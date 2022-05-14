import dotenv from "dotenv";
import mongoose from "mongoose";

import { startServer } from "./index";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Banco conectado");
    startServer();
  })
  .catch((e) => {
    console.warn(e);
  });
