
// import mongoose from "mongoose";
// // require('dotenv').config();
// export async function connect() {
//     console.log(process.env.MONGODB_URI, process.env.JWT_SECRET, ":varsha");

//     try {
//         await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nextauth")
//         const connection = mongoose.connection
//         connection.on("connected", () => {
//             console.log("db connected")
//         })
//         connection.on("error", (err) => {
//             console.log("mongo connection error", err)
//             process.exit()
//         })
//     } catch (error) {
//         console.log("something went wrong in dbConfig")
//         console.log(error)
//     }
// }


import mongoose from "mongoose";
import { EventEmitter } from "events";

// Create an instance of EventEmitter and set max listeners
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(20); // Increase as needed

export async function connect() {
    // console.log(process.env.MONGODB_URI, process.env.JWT_SECRET, ":varsha");
    // if (mongoose.connections[0].readyState) {
    //     console.log("Already connected");
    //     return;
    // }

    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nextauth", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("db connected");
        });

        connection.on("error", (err) => {
            console.log("mongo connection error", err);
            process.exit();
        });

    } catch (error) {
        console.log("something went wrong in dbConfig");
        console.log(error);
    }
}

