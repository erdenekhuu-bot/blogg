module.exports = (app) => {
  return async function checkout(ctx, next) {
    if (!ctx.request.url.startsWith("/api")) {
      console.log("No checkout required for non-API route", ctx.request.url);
      await next();
      return;
    }
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
