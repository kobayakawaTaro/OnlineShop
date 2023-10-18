require("dotenv").config();
const connect = require("../DB/connectDB.js");
const app = require("./app.js");
const port = process.env.PORT || 3000

const start = async ()=>{
    try{
        await connect(process.env.MONGO_URI);
        app.listen(port,()=>{console.log(`server running on port ${port}..`)});
    }
    catch(e){
        console.log(e);
        process.exit(0);
    }
}

start()