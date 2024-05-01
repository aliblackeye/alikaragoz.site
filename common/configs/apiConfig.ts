// SERVICES
import { SERVICES } from './servicesConfig';
// TYPES
import { TYPES } from './typesConfig';

export enum METHODS {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum CONTENT_TYPE {
  JSON = 'application/json', // Default
  FORM_DATA = 'multipart/form-data',
  TEXT_HTML = 'text/html',
}

export type API = {
  URL: string;
  SERVICE: SERVICES;
  TYPE: string;
  METHOD: METHODS;
  SUCCESS?: boolean;
  ERROR?: boolean;
  REFETCH: TYPES[];
  REDUCER?: string;
  REDUCER_TYPE?: string;
  CONTENT_TYPE?: CONTENT_TYPE;
  RESPONSE_TYPE?: CONTENT_TYPE;
  /* CUSTOM_REQUEST_CONFIG?: {
    cacheTime?: number;
    staleTime?: number;
    gcTime?: number;
  }; // StaleTime = Ne kadar sürede cache'in geçersiz olacağıdır. */
};

const WORKS = [
  {
    URL: '/list',
    SERVICE: SERVICES.WORKS,
    TYPE: TYPES.GET_WORKS_LIST,
    METHOD: METHODS.GET,
    REFETCH: [],
  },
  {
    URL: '/delete/{1}',
    SERVICE: SERVICES.WORKS,
    TYPE: TYPES.DELETE_WORK,
    METHOD: METHODS.DELETE,
    REFETCH: [TYPES.GET_WORKS_LIST],
  },
  {
    URL: '/create',
    SERVICE: SERVICES.WORKS,
    TYPE: TYPES.POST_WORK_CREATE,
    METHOD: METHODS.POST,
    CONTENT_TYPE: CONTENT_TYPE.FORM_DATA,
    REFETCH: [TYPES.GET_WORKS_LIST],
  },
  {
    URL: '/update/{1}',
    SERVICE: SERVICES.WORKS,
    TYPE: TYPES.PUT_WORK_UPDATE,
    METHOD: METHODS.PUT,
    CONTENT_TYPE: CONTENT_TYPE.FORM_DATA,
    REFETCH: [TYPES.GET_WORKS_LIST],
  },
  {
    URL: '/detail/{1}',
    SERVICE: SERVICES.WORKS,
    TYPE: TYPES.GET_WORK_DETAIL,
    METHOD: METHODS.GET,
    REFETCH: [],
  },
];

export const API: API[] = [...WORKS];
