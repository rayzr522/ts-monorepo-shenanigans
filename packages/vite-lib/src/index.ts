import { initTRPC } from '@trpc/server'
import { t, ContextType } from 'trpc-base'

export type InitTRPC<TContext extends object = {}> = ReturnType<
  ReturnType<typeof initTRPC.context<TContext>>['create']
>
export const appRouter = (t as InitTRPC<ContextType>).router({
  hello: t.procedure.query(() => 'world'),
})

export type AppRouter = typeof appRouter
