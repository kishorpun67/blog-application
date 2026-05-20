import { Router} from "express"
import { registerUserController } from "../controller/auth.controller.js"
import { registerSchema } from "../validatiors/auth.validator.js"
import { validate } from "../../../middleware/validate.middleware.js"

const router = Router()
router.route("/register").post(
    // validate(registerSchema),
    registerUserController)
router.route("/test").get((req, res)=>res.send('okey'))

export default router


