import express from "express";
import colors from "colors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

connectDB().then(() =>
  app.listen(port, () => console.log(`Server running on port ${port}`))
);
