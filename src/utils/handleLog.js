export default function (req, res, next) {
    console.log("\n\n----------------------------------------------")
    console.log(`[${new Date()}] from{ ${req.ip} }: ${req.originalUrl}`)
    next()
}