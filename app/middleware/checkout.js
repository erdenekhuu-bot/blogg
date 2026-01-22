module.exports = (app) => {
  return async function checkout(ctx, next) {
    const token = ctx.headers["authorization"]?.split(" ")[1];
    if (!token) {
      ctx.throw(401, "Token required");
    } else if (token !== ctx.app.config.jwt.secret) {
      ctx.throw(401, "Invalid token");
    }
    console.log("Checkout middleware executed", ctx.request.url);
    await next();
  };
};
