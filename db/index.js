const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('MongoDB URL')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username : String,
  password : String
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username : String,
  password : String,
  purchaseCourse : [
    {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }
  ]

});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title : String,
  description : String,
  imageLink : String,
  price: Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course
};

