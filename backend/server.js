const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://Nishant2209:Manash@2209@cluster0.rb3sxrk.mongodb.net/test'

const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log("Connected !!!");
    })
}

module.exports = connectToMongo;
