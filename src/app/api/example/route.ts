import { isAuthorized } from '../../../middleware/auth';

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Your protected route logic here
  return new Response('Authorized content');
}

