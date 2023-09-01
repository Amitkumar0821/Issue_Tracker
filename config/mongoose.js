// setting up the mongodb connection through mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amitkumarmandal126:WhgUYzcdva3NNHk9@issue.i3kkouk.mongodb.net/?retryWrites=true&w=majority');


// mongoose.connect('url') 
// mongoose.connect(url,{
//     serverSelectionTimeoutMS: 10000,
// });
const db=mongoose.connection;

//  catch an error when connecting mongodb
db.on('error',console.error.bind(console,"Error connecting to MongoDB")); 


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});


// exports this module
module.exports=db;  



// const mongoose = require('mongoose');
// const retry = require('mongoose-retry');

// const connectWithRetry = () => {
//   return mongoose.connect(url, { useNewUrlParser: true })
//     .catch(() => retry(connectWithRetry));
// };

// connectWithRetry();

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   serverSelectionTimeoutMS: 10000, // 30 seconds
// });
