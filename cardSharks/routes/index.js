var express = require('express');
var passport = require('passport');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {title: 'Card Sharks'});
});

router.get('/goFish', function(req, res) {
	console.log(req.user.username);
	User.findOne({username: req.user.username}, function(err, user) {
		var showForm = !!req.user && req.user.username == user.username;
   	    //  console.log(user.username);
   	    //  console.log(showForm);
   	 	res.render('goFish', {
  			showForm: showForm,
  			//highScore: user.highScore,
  			username: user.username
  
     	 });
  	});
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', function(req,res,next) {
  passport.authenticate('local', function(err,user) {
    if(user) {
      req.logIn(user, function(err) {
        res.redirect('/goFish');
      });
    } else {
      res.render('login', {message:'Your login or password is incorrect.'});
    }
  })(req, res, next);

});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res) {
  User.register(new User({username:req.body.username}), 
      req.body.password, function(err, user){
      console.log(req.body.password);
    if (err) {
    	console.log(err);
      res.render('register',{message:'Invalid Registration'});
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/goFish');
      });
    }
  });   
});
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/win', function(req, res) {
  if(typeof req.user.currentWinStreak === 'undefined'){
  	req.user.currentWinStreak = 1;
  	req.user.bestWinStreak = 1;
  	console.log(req.user.currentWinStreak);
  }
  else {
  	req.user.currentWinStreak++;
  }
  if(req.user.currentWinStreak > req.user.bestWinStreak){
  	req.user.bestWinStreak = req.user.currentWinStreak;
  }
  req.user.save(function(err, savedUser, count) {
  	res.render('win', {currentWinStreak: req.user.currentWinStreak, bestWinStreak: req.user.bestWinStreak});
  });
  
});

router.get('/lose', function(req, res) {
	req.user.currentWinStreak = 0;
	req.user.save(function(err, savedUser, count) {
  	res.render('lose', {currentWinStreak: req.user.currentWinStreak, bestWinStreak: req.user.bestWinStreak});
  });
});
router.get('/highScores', function(req, res) {
	User.find({},function(err, users, count){
		  users.sort(function(a, b){return b.bestWinStreak-a.bestWinStreak});

		  res.render('highScores', {users: users});
	});
});


router.get('/api/highScores', function(req, res) {
  
    User.find({}, function(err, users, count) {
    console.log(users);
	if(req.query.username !== null){
		console.log("in!");
		users = users.filter(function(element) {
			console.log("e "+ element.username+" r " +req.query.username);
			return element.username == req.query.username;
		});
	}
	console.log(users);
	res.send(users);	
	});
});
module.exports = router;
