const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://anmol:abcd1234@cluster0.o6fo11h.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

module.exports = mongoose.connection;


//mongodb+srv://anmol:anmol@cluster0.k5wk3fw.mongodb.net/Demox