import { NextRequest, NextResponse } from 'next/server';

import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
});

export function middleware(req: NextRequest) {
  /* const res = NextResponse.next();

  if (process.env.NODE_ENV === 'production') {
    if (req.nextUrl.pathname.startsWith('/ui-library')) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  } */

  return I18nMiddleware(req);
}

export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next|favicon.ico|not-found|robots.txt).*)',
  ],
};
