import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, customer, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    if (!customer?.name || !customer?.address || !customer?.phone) {
      return res.status(400).json({
        success: false,
        message: "Customer details missing",
      });
    }

    const order = await Order.create({
      items,
      customer,
      totalAmount,
    });

    res.status(201).json({
      success: true,
      orderId: order._id,
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};


// controllers/orderController.js

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch order",
    });
  }
};
