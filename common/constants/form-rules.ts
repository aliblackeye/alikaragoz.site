import { EMAIL_REGEX } from "./regex";

export const FORM_RULES = {
  EMAIL: {
    required: true,
    type: "email",
    message: "form-rules.email.message",
    pattern: EMAIL_REGEX,
  },
};
