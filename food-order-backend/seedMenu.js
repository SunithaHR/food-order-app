import mongoose from "mongoose";
import dotenv from "dotenv";
import Menu from "./models/Menu.js";
import connectDB from "./config/db.js";

dotenv.config();

const menuItems = [
  {
    name: "Margherita Pizza",
    description: "Classic cheese pizza",
    price: 299,
    image: "/foods/pizza.jpg",
  },
  {
    name: "Veg Burger",
    description: "Grilled veg patty burger",
    price: 149,
    image: "/foods/burger.jpg",
  },
  {
    name: "French Fries",
    description: "Crispy salted fries",
    price: 99,
    image: "/foods/sandwich.jpg",
  },
  {
    name: "Pasta Alfredo",
    description: "Creamy white sauce pasta",
    price: 249,
    image: "/foods/pasta.png",
  },
];


const seedData = async () => {
  await connectDB();

  await Menu.deleteMany();
  await Menu.insertMany(menuItems);

  console.log("Menu data inserted");
  process.exit();
};

seedData();
