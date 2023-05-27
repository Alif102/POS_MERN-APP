const mongoose = require("mongoose");
require("colors");

const connectMG = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONG_URI);
        
    } catch (error) {
        process.exit(1);
        
    }
};
module.exports = connectMG;
