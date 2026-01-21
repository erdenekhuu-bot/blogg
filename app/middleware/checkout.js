module.exports = (app) => {
  return async function checkout(ctx, next) {
    const token = ctx.request.headers["authorization"];
    if (!token) {
      ctx.throw(401, "Token not found");
    }
    console.log("Checkout middleware executed", ctx.request.url);
    await next();
  };
};
