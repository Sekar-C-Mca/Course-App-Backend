const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username });
    
    if(existingAdmin){
        return res.status(403).json({
            msg: "Admin already exists"
        });
    }

    // Create new admin
    await Admin.create({
        username, 
        password
    });
    
    res.json({
        msg: "Admin created successfully"
    });
  } catch(error) {
    res.status(500).json({
        msg: "Error creating admin",
        error: error.message
    });
  }
});

router.post('/courses', adminMiddleware, async(req, res) => {
  // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const cource = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg : "Course created sucessfully",
        courseId : cource._id
    });



});

router.get('/courses', adminMiddleware,async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    response
  })
});

module.exports = router;
