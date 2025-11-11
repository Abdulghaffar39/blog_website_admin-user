const express = require("express");
const dbCon = require("./DB/dbConnection");
const router = require("./Router/route")


const cors = require("cors");
const cookieParser = require('cookie-parser');


const PORT = 5000 || process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors())
dbCon()

app.use(cookieParser());
app.use("/api", router);

app.listen(PORT, () => {

  console.log(`Server is running ${PORT}`);
  
});