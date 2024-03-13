const wrapAsync =require ('../middleware/errorHandling');
const Order = require('../models/order');
const Product =require('../models/products');
const express=require('express');
const router=express.Router();
const {protect}=require('../middleware/authenticate');


//creating new orders

router.post('/api/orders', protect, wrapAsync(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {

    const itemsFromDB = await Product.find({
      _id: { $in: orderItems.map((x) => x._id) },
    });

    // map over the order items and use the price from our items from database
    // const dbOrderItems = orderItems.map((itemFromClient) => {
    //   const matchingItemFromDB = itemsFromDB.find(
    //     (itemFromDB) => itemFromDB._id.toString() === itemFromClient._id
    //   );
    //   return {
    //     ...itemFromClient,
    //     product: itemFromClient._id,
    //     price: matchingItemFromDB.price,
    //     _id: undefined,                              
    //   };
    // });

    // // calculating price 
    // const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
    //   calcPrices(dbOrderItems);

    const order = new Order({
      orderItems: dbOrderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
}));


//getting all user orders
router.get('/api/orders/myorders', protect , wrapAsync(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
}));


//gettting the user orders by id
router.get('/api/orders/:id', protect, wrapAsync(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user','name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
}));

module.exports=router;