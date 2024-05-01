'use client';

import {
  useMutation as mutation,
  useQuery as query,
} from '@tanstack/react-query';
import axios from 'axios';

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

axios.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // logout
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      /* errorHandler('UNAUTHORIZED'); */

      createNotification({
        title: 'Error',
        description: 'You are unauthorized!',
        status: 'danger',
      });
      /* window.location.href = '/login'; */
    }

    if (error.response.status === 500 || 502 || 503 || 504) {
      createNotification({
        title: 'Error',
        description: 'An error occured on server!',
        status: 'danger',
      });
    }

    return Promise.reject(error);
  }
);

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

const successHandler = (notification: string = 'DEFAULT') => {
  const success = `GLOBAL.NOTIFICATIONS.SUCCESS.${notification}`;
  /*  createNotification(`${success}.TITLE`, `${success}.DESCRIPTION`, 'success');  */
};

const errorHandler = (notification: string = 'DEFAULT') => {
  const error = `GLOBAL.NOTIFICATIONS.ERROR.${notification}`;
  /* createNotification(`${error}.TITLE`, `${error}.DESCRIPTION`, 'error');  */
  /*  createNotification(`Error`, `An error occured on server!`, 'error');  */

  createNotification({
    title: 'Error',
    description: 'An error occured on server!',
    status: 'danger',
  });
};

export async function fetchRequest(apiConfig: Omit<API, 'TYPE'>, data?: any) {
  const { ERROR, METHOD, SUCCESS, URL, SERVICE, CONTENT_TYPE } = apiConfig;

  /* const token = localStorage.getItem('token') */

  // add /api prefix to all requests
  const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
  let inputUrl = `${baseURL}/${SERVICE}${URL}`;

  const response = await axios.request({
    baseURL: Array.isArray(data) ? urlParser(inputUrl, data?.[1]) : inputUrl,
    method: METHOD,
    data: Array.isArray(data) ? data?.[0] : data,
    headers: {
      'Content-Type': CONTENT_TYPE || 'application/json',
      /* Authorization: `Bearer ${token}`, */
    },
  });

  try {
    const { data: resData } = response;

    if (resData?.data?.success) {
      SUCCESS && successHandler(data?.notification);
    }

    if (!resData?.data?.success) {
      ERROR && errorHandler(data?.notification);
    }

    return {
      response,
      data: response.data,
    };
  } catch (error) {
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
