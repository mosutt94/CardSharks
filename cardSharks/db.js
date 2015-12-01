//db.js
var mongoose = require('mongoose'),
URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
  username: String,
  password: String,
  currentWinStreak: Number,
  bestwinStreak, Number
});


User.plugin(passportLocalMongoose);

mongoose.model('User', User);
mongoose.connect('mongodb://localhost/cardSharksdb');