const express = require("express");
const dbCon = require("./DB/dbConnection");
const router = require("./Router/route")
const cors = require("cors");

const PORT = 5000 || process.env.PORT;
const app = express();


app.use(cors({
    origin: 'http://127.0.0.1:5500', // aapka frontend origin
    credentials: true // cookies allow karne ke liye zaroori
}));


app.use(express.json());
dbCon()

app.use("/api", router);

app.listen(PORT, () => {

  console.log(`Server is running ${PORT}`);

});