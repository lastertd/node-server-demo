import express from "express"

import * as https from "https";
import * as oS from "os";
import his from "connect-history-api-fallback"


import ssl from "./src/private/ssl/index.js";
import router from "./src/router/index.js"
import cors from "cors";


const app = express();

//适配vue的history模式
app.use(his({
    rewrites: [
        {
            from: /^\/api\/.*$/,
            to: function (context) {
                return context.parsedUrl.path
            }
        }
    ]
}))


app.use("/api", router)
app.use("/public", express.static('./public'))   //添加静态资源
app.use("/", express.static('./public'))   //添加静态资源




if (process.argv[2] === 'dev') {        //开发环境
    app.use(cors({
        origin: "*",
        credentials: true,
    }))
    app.listen(8000, '0.0.0.0', () => {
        console.log(`express server running at http://${oS.networkInterfaces()['WLAN'][1].address}:8000 `);
    })
}
else {        //运行环境

    https.createServer(ssl, app)
        .listen(443, '0.0.0.0', () => {
            console.log(`express server running at https://120.78.188.122:443 `);

        })
}











