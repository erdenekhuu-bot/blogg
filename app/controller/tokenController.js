const Controller = require("egg").Controller;

class TokenController extends Controller {
  async generate() {
    const { ctx, app } = this;
    const { payload } = ctx.request.body;

    if (!payload) {
      ctx.throw(400, "Payload is required");
    }

    const token = app.jwt.sign(payload, app.config.jwt.secret, {
      expiresIn: "1h",
    });

    ctx.body = {
      token,
    };
  }
}

module.exports = TokenController;
