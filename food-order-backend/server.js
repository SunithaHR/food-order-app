import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import Order from "./models/Order.js"; // Add this import

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// 🔴 ADD STATUS SIMULATION BACK
const simulateOrderUpdates = async () => {
  try {
    const orders = await Order.find({
      status: { $ne: "Delivered" }
    });

    if (orders.length > 0) {
      console.log(`Checking ${orders.length} orders for status update...`);
    }

    for (const order of orders) {
      const statusFlow = [
        "Order Received",
        "Preparing",
        "Out for Delivery",
        "Delivered"
      ];
      
      const currentIndex = statusFlow.indexOf(order.status);
      
      if (currentIndex < statusFlow.length - 1) {
        order.status = statusFlow[currentIndex + 1];
        await order.save();
        console.log(`✓ Order ${order._id} → ${order.status}`);
      }
    }
  } catch (error) {
    console.error("Status update error:", error);
  }
};

// Run simulation every 10 seconds
setInterval(simulateOrderUpdates, 10000);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));