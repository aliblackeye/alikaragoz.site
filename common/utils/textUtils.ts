export const numberWithCommas = (x: number) =>
  /* 3 haneden sonra virgül koyan fonksiyon */
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const capitalize = (s: string) => {
  /* İlk harfi büyük yapan fonksiyon */
  return s.charAt(0).toUpperCase() + s.slice(1);
};
