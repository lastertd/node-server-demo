import express from "express";
import handleError from "../utils/handleError.js";
import handleLog from "../utils/handleLog.js";
import testRoute from "./src/testRoute.js";
import cookieParser from "cookie-parser";
import key from "../private/key.js";


const router = express.Router()
router.use(handleLog)
router.use(cookieParser(key.cookieKey))    //用于简化cookie操作，详见: https://github.com/expressjs/cookie-parser#readme



router.use('/test',testRoute)





router.use(handleError)


export default router