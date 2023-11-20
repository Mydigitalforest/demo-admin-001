/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import env from "@ioc:Adonis/Core/Env";
import Views from "@ioc:Adonis/Core/View";

Views.global("admin_password", env.get("ADMIN_PASSWORD"));
