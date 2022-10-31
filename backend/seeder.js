import colors from 'colors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js'
import products from './data/products.js'
import user from './data/user.js'
import Order from './models/orderModel.js';
import Product from './models/productmodel.js';
import User from './models/userModel.js';


dotenv.config();

connectDB();

const importData=async()=>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();


        const createdUser=await User.insertMany(user);
        const admniUser=createdUser[0]._id;

        const sampaleProducts=products.map((product)=>{
            return{...product,user:admniUser}
        });

        await Product.insertMany(sampaleProducts)
        console.log(`data imported`.red.inverse);
        process.exit();
    }catch (error){
        console.error(`${error}`.red.inverse);
        process.exit(1);
        
    }
};

const destroyData=async()=>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log(`Data destroy`.red.inverse)
        process.exit()
    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)

    }
}

if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}
