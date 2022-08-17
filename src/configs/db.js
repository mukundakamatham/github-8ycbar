const mongoose = require('mongoose');
module.exports = () => async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Education:Education@cluster0.8mhay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        useNewUrlParser: true,
      }
    );
    console.log('Mongodb connected...');
  } catch (error) {
    console.log(error.message);

    // exit process with failure
    process.exit(1);
  }
};
