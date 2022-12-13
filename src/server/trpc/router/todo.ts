import { router, publicProcedure, protectedProcedure } from "../trpc";

export const todoRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getTodo: protectedProcedure.query(() => {
    const response = [
      { id: "1", title: "Todo 1" },
      { id: "2", title: "Todo 2" },
    ];
    return response;
  }),
});
