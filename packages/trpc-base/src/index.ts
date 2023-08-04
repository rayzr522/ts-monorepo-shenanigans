import { initTRPC } from '@trpc/server'

export type InitTRPC<TContext extends object = {}> = ReturnType<
  ReturnType<typeof initTRPC.context<TContext>>['create']
>

export type ContextType = { hello: string }

export const t: InitTRPC<ContextType> = initTRPC.context<ContextType>().create()
