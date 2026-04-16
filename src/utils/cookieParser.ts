export interface ParsedCookies {
  [key: string]: string;
}

export function parseCookies(cookieHeader: string | undefined): ParsedCookies {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader
    .split(';')
    .reduce((cookies, cookie) => {
      const [name, ...rest] = cookie.trim().split('=');
      const value = rest.join('=');
      if (name && value) {
        cookies[name] = decodeURIComponent(value);
      }
      return cookies;
    }, {} as ParsedCookies);
}

