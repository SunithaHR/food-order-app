import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },
  name: String,
  price: Number,
  quantity: Number,
  image: String,
});

const orderSchema = new mongoose.Schema(
  {
    items: [orderItemSchema],

    customer: {
      name: String,
      address: String,
      phone: String,
    },

    totalAmount: Number,

    status: {
      type: String,
      enum: [
        "Order Received",
        "Preparing",
        "Out for Delivery",
        "Delivered",
      ],
      default: "Order Received",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
