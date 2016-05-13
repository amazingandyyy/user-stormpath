var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.json(req.user.customData);
});


router.put('/edit', stormpath.loginRequired, function(req, res) {
    var index = req.user.customData;
    console.log('index: ', index);
    // console.log('req.body: ', req.body);
    // for(var key in req.body){
    //     console.log('keys - ', key);
    //     // req.user[key] = req.body[key];
    // }
    // console.log('req.body: ' , req.body);
    // console.log('req.user: ', req.user);
    // console.log('customData - ', req.body[key]);

    req.user.save((err, savedUser)=>{
        res.status(err? 400: 200).send(err || savedUser);
    })
});

module.exports = router;
