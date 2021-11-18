const express = require('express');
const router = express.Router();

router.all('*', function (req, res) {
    res.send("This response is for all admin routes!")
})


module.exports = router;

// task :
// create an API to save student data using query string - keys are - name, age, address, session 
// and add another field ThingsToLearn for another call
// this will need a student data model, student router, etc