"use client";

import axios from "axios";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const EditorAPI = {
  getAll: async function () {
    const response = await axios.get(
      "https://fakefor.me/api/projects/works/getWorks"
    );
    return response;
  },
};

// defining the cancel API object for EditorAPI
const cancelApiObject = defineCancelApiObject(EditorAPI);
