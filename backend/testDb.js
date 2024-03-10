const mongoose = require ('mongoose');
const dotenv =require ('dotenv');

const user=require ('./testData/userData.js');
const product= require ('./testData/prodData.js');
const User =require ('./models/user.js');
const Product = require ('./models/products.js');
//import Order from './models/orderModel.js';
const connectDB =require('./config/database.js');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(user);

    const adminUser = createdUsers[0]._id; //id we will get from monfoDb (auto-generated)

    const sampleProducts = product.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
   // await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}