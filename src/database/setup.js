// SETUP MONGOOSE
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/zuribook';

module.exports = () => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('database connection successful')
    }
  })
}