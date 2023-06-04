import formiable from "formidable";     // https://github.com/node-formidable/formidable
import express from "express";
import cors from "cors";
import pool from "../../private/mysql.js";


const testRoute = express.Router();





testRoute.get('/',(req, res) => {
    res.send('最基础的请求')

})

testRoute.get("/setCookie",(req, res) => {
    const nowDate = new Date();
    res.cookie('signedSting','hello world!',{
        maxAge: 1000*60*60*3,   //设置存活时间，毫秒为单位，不能简写
        signed: true, //是否签名（加密）,为true时将会使用创建cookie-parser时传入的key作为密匙

    });
        res.cookie('originSting','hello world!',{
        maxAge: 1000*60*60*3,   //设置存活时间，毫秒为单位，不能简写

    });


    res.send('Cookie set successfully!');
})

testRoute.get("/getCookie",(req, res) => {
    res.send({
        origin:req.cookies,     //未签名的cookie
        signed:req.signedCookies    //签名的cookie（会进行解码）
    });
})


testRoute.post("/form", (req, res) => {

})




export default testRoute;