import Menu from "../models/Menu.js";

export const getMenu = async (req, res) => {
  try {
    const items = await Menu.find({ isAvailable: true });

    res.json({
      success: true,
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu",
    });
  }
};
