var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.json(req.user.customData);
});


router.put('/edit', stormpath.loginRequired, function(req, res) {
    // for(var key in req.body){
    //     req.user[key] = req.body[key];
    // }
    req.user.givenName = req.body.givenName
    req.user.middleName = req.body.middleName
    req.user.surname = req.body.surname
    req.user.customData.favoriteCity = req.body.customData.favoriteCity
    req.user.customData.favoriteFood = req.body.customData.favoriteFood
    req.user.save((err, savedUser)=>{
        res.status(err? 400: 200).send(err || req.body);
    })
});

module.exports = router;
