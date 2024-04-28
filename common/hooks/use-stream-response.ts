'use client';

import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export type Message = {
  id: string;
  message: string;
  sender: 'me' | 'bot';
};

export function useStreamResponse() {
  // States
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [data, setData] = useState('');
  const [messageId, setMessageId] = useState('');

  const startStream = async (body: {
    session_id: string;
    question: string;
    data_id: string;
  }) => {
    setLoading(true);

    const headers = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
    };
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/ai/ask`, headers)
      .then((response) => {
        if (!response.body) {
          throw new Error('No response body');
        }

        const newMessageId = uuidv4(); // Benzersiz bir id oluşturun
        setMessageId(newMessageId);

        // sırf loading durumunu görmek için
        setMessages((prev) => {
          return [
            ...prev,
            {
              id: newMessageId,
              message: '',
              sender: 'bot',
            },
          ];
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        const processData = async () => {
          let done = false;

          while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;

            if (value) {
              const parts = decoder
                .decode(value, { stream: true })
                .split('\n\n');
              for (const part of parts) {
                const replacedText = part.replace('data: ', '');

                setData((prev) => prev + replacedText);
              }
            }
          }

          if (done) {
            setMessageId('');
            setData('');
            setLoading(false);
          }
        };
        processData();
      })
      .catch((error) => {
        console.error('Hata:', error);
      });
  };

  useEffect(() => {
    if (data.length > 0) {
      // Eğer mesaj ilk defa geliyorsa
      if (messages.findIndex((m) => m.id === messageId) === -1) {
        setMessages((prev) => [
          ...prev,
          {
            id: messageId,
            message: data,
            sender: 'bot',
          },
        ]);
      }

      // Mesaj zaten varsa
      else {
        const index = messages.findIndex((m) => m.id === messageId);
        const newMessages = [...messages];
        newMessages[index].message = data;
        setMessages(newMessages);
      }
    }
  }, [data]);

  return {
    loading,
    startStream,
    data,
    messages,
    setMessages,
  };
}
