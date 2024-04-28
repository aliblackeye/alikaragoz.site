import REGEX from './regex';

export const FORM_RULES = {
  DEFAULT: {
    REQUIRED: [
      {
        required: true,
        message: 'Bu alan zorunludur.',
      },
    ],
  },
  EMAIL: {
    REQUIRED: [
      {
        required: true,
        message: 'Geçerli bir e-posta adresi giriniz.',
        pattern: REGEX.EMAIL,
      },
    ],
  },
  USERNAME: {
    REQUIRED: [
      {
        required: true,
        pattern: REGEX.USERNAME,
        message: 'Geçerli bir kullanıcı adı giriniz.',
      },
    ],
  },
  NAME: {
    REQUIRED: [
      {
        required: true,
        pattern: REGEX.NAME,
        message: 'Geçerli bir isim giriniz.',
      },
    ],
  },
  PASSWORD: {
    REQUIRED: [
      {
        required: true,
        message: 'Lütfen şifrenizi giriniz.',
      },
    ],
    LENGTH: [
      {
        min: 6,
        message: 'Şifre en az 6 karakterden oluşmalıdır.',
      },
    ],
  },
};
