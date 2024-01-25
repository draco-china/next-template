export const fallbackLng =
  process.env.NODE_ENV === 'development' ? 'zh-CN' : 'en-US';
export const defaultNS = 'index';
export const languages =
  process.env.NODE_ENV === 'development'
    ? [
        'zh-CN',
        'cs-CZ',
        'de-DE',
        'en-US',
        'es-ES',
        'es-MX',
        'fi-FI',
        'fr-FR',
        'hi-IN',
        'hu-HU',
        'ja-JP',
        'ko-KR',
        'no-NO',
        'pl-PL',
        'pt-BR',
        'ro-RO',
        'ru-RU',
        'th-TH',
        'tr-TR',
        'uk-UA',
        'vi-VN',
      ]
    : [
        'cs-CZ',
        'de-DE',
        'en-US',
        'es-ES',
        'es-MX',
        'fi-FI',
        'fr-FR',
        'hi-IN',
        'hu-HU',
        'ja-JP',
        'ko-KR',
        'no-NO',
        'pl-PL',
        'pt-BR',
        'ro-RO',
        'ru-RU',
        'th-TH',
        'tr-TR',
        'uk-UA',
        'vi-VN',
      ];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
