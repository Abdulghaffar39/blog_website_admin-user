const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.DB);
async function dbCon() {

    try {
        const db = await mongoose

            .connect(`mongodb+srv://Abdulghaffar:${process.env.DB}@cluster0.d1n4lpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;`)

            .then(() => console.log("Database Connected"))
            .catch((err) => console.log(`connection failed ${err}`));

        mongoose.connection.on("connected", () =>

            console.log("DATABASE SUCCESSFULLY CONNECTED...!")
        );

        mongoose.connection.on("disconnected", () =>

            console.log("DATABASE CONNECTION TERMINATED...!")
        );

    } catch (err) {
        console.log(err, "here is an error");
    }
}

module.exports = dbCon;