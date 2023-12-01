import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import env from "@ioc:Adonis/Core/Env";

export default class AdminMiddleware {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    await auth.check();
    // code for middleware goes here. ABOVE THE NEXT CALL
    if (auth.user?.password === env.get("ADMIN_PASSWORD")) {
      await next();
    } else {
        return response.redirect().toPath("/auth/login");
    }
  }
}
