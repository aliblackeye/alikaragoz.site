'use client';

import {
  useMutation as mutation,
  useQuery as query,
} from '@tanstack/react-query';

import { API } from '@configs/apiConfig';
import { TYPES } from '@configs/typesConfig';

import { createNotification } from '@utils/createNotification';

/* import { createNotification } from '../utils/createNotification'; */

/* export const fetchToken = async () => {
  return await fetch('/api/auth/getToken').then(async (res) => {
    const { token } = await res.json();
    localStorage.setItem('token', token);
    return token;
  });
}; */

// Eğer path içine parametre gönderiliyorsa eşleme için kullanılır
const urlParser = (endpointUrl: string, pathParameters: string[]) => {
  if (!Array.isArray(pathParameters)) {
    throw new Error(
      'You must provide path parameters for this endpoint. Please check your fetcher function.'
    );
  }

  pathParameters &&
    pathParameters?.forEach((param, paramIndex) => {
      endpointUrl = endpointUrl?.replace(`{${paramIndex + 1}}`, param);
    });
  return endpointUrl;
};

function successHandler(notification: string = 'DEFAULT') {
  const success = `GLOBAL.NOTIFICATIONS.SUCCESS.${notification}`;
  /*  createNotification(`${success}.TITLE`, `${success}.DESCRIPTION`, 'success');  */
}

function errorHandler(notification: string = 'DEFAULT') {
  const error = `GLOBAL.NOTIFICATIONS.ERROR.${notification}`;
  /* createNotification(`${error}.TITLE`, `${error}.DESCRIPTION`, 'error');  */
  /*  createNotification(`Error`, `An error occured on server!`, 'error');  */

  createNotification({
    title: 'Error',
    description: 'An error occured on server!',
    status: 'danger',
  });
}

export async function fetchRequest(apiConfig: Omit<API, 'TYPE'>, data?: any) {
  const { ERROR, METHOD, SUCCESS, URL, SERVICE } = apiConfig;

  try {
    /* const token = localStorage.getItem('token') */

    // add /api prefix to all requests
    const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
    let inputUrl = `${baseURL}/${SERVICE}${URL}`;

    if (apiConfig.METHOD === 'GET' && !Array.isArray(data) && data) {
      const queryParams = new URLSearchParams(data).toString();
      inputUrl += `?${queryParams}`;
    }

    const headers = {
      'Content-Type': apiConfig?.CONTENT_TYPE || 'application/json',
      /* Authorization: `Bearer ${token}`, */
    };

    const res = await fetch(
      Array.isArray(data) ? urlParser(inputUrl, data?.[1]) : inputUrl,
      {
        method: METHOD,
        headers,
        body:
          METHOD === 'GET'
            ? undefined
            : Array.isArray(data)
              ? JSON.stringify(data?.[0])
              : JSON.stringify(data),
      }
    );

    if (!res.ok) {
      // 401
      switch (res.status) {
        case 401:
          // logout
          /* errorHandler('UNAUTHORIZED'); */
          localStorage.removeItem('user');
          localStorage.removeItem('token');

          createNotification({
            title: 'Error',
            description: 'You are unauthorized!',
            status: 'danger',
          });
          /* window.location.href = '/login'; */
          break;

        case 500 || 502 || 503 || 504:
          createNotification({
            title: 'Error',
            description: 'An error occured on server!',
            status: 'danger',
          });
          break;
      }

      // hatayı throw et ve catch bloğuna git
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData = await res.json();

    if (responseData.success) {
      SUCCESS && successHandler(data?.notification);
    }

    if (!responseData.success) {
      ERROR && errorHandler(data?.notification);
    }

    return {
      response: res,
      data: responseData,
    };
  } catch (error) {
    console.error(error);
    ERROR && errorHandler();
    return Promise.reject(error);
  }
}

export const useFetcher = (serviceType: TYPES) => {
  const apiConfig = API.find((api) => api.TYPE === serviceType) as API;

  if (!apiConfig) {
    throw new Error(
      `Service Type: ${serviceType} not found. Please check your apiConfig.ts file.`
    );
  }

  const { TYPE } = apiConfig;

  const render = (data?: any) =>
    query({
      queryKey: [TYPE, apiConfig],
      queryFn: () => fetchRequest(apiConfig, data),
    });

  const action = () =>
    mutation({
      mutationKey: [TYPE],
      mutationFn: (data: any) => fetchRequest(apiConfig, data),
    });

  return {
    action,
    render,
  };
};
