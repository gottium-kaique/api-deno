import { Router, json } from "https://deno.land/x/opine@0.21.2/mod.ts"
import UsersControllers from "./controllers/UsersController.ts"

const router = Router()

router.use(json())

router.get("/user", UsersControllers.index)
router.post("/user", UsersControllers.create)
router.put("/user", UsersControllers.update)
router.delete("/user", UsersControllers.delete)

export default router