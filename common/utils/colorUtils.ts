import tinycolor from 'tinycolor2'; // tinycolor kütüphanesini kullanarak kontrast oranı hesaplamak için

export const determineTextColor = (color: string) => {
  // Arka plan rengiyle yeterince kontrastlı bir metin rengi seç
  // Örneğin, 4.5:1 kontrast oranını sağlamak için
  return tinycolor
    .mostReadable(color, ['#000000', '#FFFFFF'], {
      includeFallbackColors: true,
      level: 'AA', // Minimum AA erişilebilirlik kriterlerini karşılaması
      size: 'small', // Varsayılan olarak küçük metin için uygun bir renk seç
    })
    .toHexString(); // Seçilen rengi hex formatında döndür
};
