'use client';

import api from './configs/axiosConfig';
import { defineCancelApiObject } from './configs/axiosUtils';

export const EditorAPI = {
  list: async function () {
    const response = await api.get('works/list');
    return response;
  },
  delete: async function (id: string) {
    const response = await api.delete(`works/delete/${id}`);
    return response;
  },
};

// defining the cancel API object for EditorAPI
const cancelApiObject = defineCancelApiObject(EditorAPI);
