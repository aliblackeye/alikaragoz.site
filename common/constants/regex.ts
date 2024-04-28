const REGEX = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  NAME: /^[a-zA-ZğüşöçİĞÜŞÖÇ\s]*$/,
  PASSWORD: /^.{6,}$/,
  PHONE: /^5[0-9]{9}$/,
  TC: /^[1-9]{1}[0-9]{9}[02468]{1}$/,
  URL: /^(ftp|http|https):\/\/[^ "]+$/,
  USERNAME: /^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ\s]*$/,
  HEX_COLOR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
};

export default REGEX;
