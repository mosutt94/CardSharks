//db.js
var mongoose = require('mongoose'),
URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
  username: String,
  password: String,
  //highScore:  { type: Number, min: 1, required: true }
});


User.plugin(passportLocalMongoose);

mongoose.model('User', User);
mongoose.connect('mongodb://localhost/cardSharksdb');