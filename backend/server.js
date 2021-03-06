import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
