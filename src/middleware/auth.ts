import { parseCookies } from '../utils/cookieParser';

export function isAuthorized(request: Request): boolean {
  const cookieHeader = request.headers.get('Cookie');
  const cookies = parseCookies(cookieHeader);

  // Check for your auth token (adjust the cookie name as needed)
  const authToken = cookies['auth_token'] || cookies['session_id'];

  if (!authToken) {
    return false;
  }

  // Add your token validation logic here
  // For example, verify JWT or check session in database
  return validateAuthToken(authToken);
}

function validateAuthToken(token: string): boolean {
  // TODO: Implement your token validation logic
  // Examples:
  // - Verify JWT signature and expiration
  // - Check session in Redis/database
  // - Validate against your auth service

  return token.length > 0; // Placeholder
}

