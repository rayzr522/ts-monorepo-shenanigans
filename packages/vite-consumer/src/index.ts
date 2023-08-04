import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from 'vite-lib'

export default fetchRequestHandler({
  router: appRouter,
  req: new Request(new URL('https://github.com')),
  endpoint: '/api/hello',
  createContext() {
    return { hello: 'world' }
  },
})
