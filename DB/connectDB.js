const mongoose = require("mongoose");

const connect = async (url)=>{
    mongoose.connect(url);
}

module.exports = connect;