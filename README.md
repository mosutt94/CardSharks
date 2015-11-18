# ms6880-final-project
final-project created for ms6880

Overview

For all the future card sharks out there, you can now play some classic card games!  Featuring the classic games Go Fish! and War, Users can register, login and play these classic card games against the computer.  High scores will even be saved so you can hone your card skills!

Schema

var Item = new mongoose.Schema({
  name: String,
  quantity: Number,
}); 


var Deck = new mongoose.Schema({
  name: String,
  createdBy: String,
  items: [Item]
})

var User = new mongoose.Schema({
  username: String,
  password: String,
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});

Images

[!Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/ms6880-final-project/blob/master/img/login.jpg)
[!Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/ms6880-final-project/blob/master/img/goFish.jpg)
[!Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/ms6880-final-project/blob/master/img/highScore.jpg)



