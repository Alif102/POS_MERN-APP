const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemModel= require('./config/Models/ItemModels');
const items = require('./utils/Data')
const connectMG = require('./config/config')
require('colors');

dotenv.config();
connectMG();

const importData = async ()=>{
    try {
        await itemModel.deleteMany();
        const itemsData = await itemModel.insertMany(items);
  
        process.exit();

        
    } catch (error) {
       
        process.exit(1);
        
    }
};


importData();