# ms6880-final-project
final-project created for ms6880

# Overview

For all the future card sharks out there, you can now play some classic card games!  Featuring the classic games Go Fish! and War, Users can register, login and play these classic card games against the computer.  High scores will even be saved so you can hone your card skills!

# Data Model
```
var User = new mongoose.Schema({
  username: String,
  password: String,
  highScore:  { type: Number, min: 1, required: true }
});
```
# Wireframe

![Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/ms6880-final-project/blob/master/img/login.jpg)
![Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/ms6880-final-project/blob/master/img/goFish.jpg)
![Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/ms6880-final-project/blob/master/img/highScore.jpg)

# Research Topics

* (1 point) Using pre-built Express project templates
* (3 points) Integrate user authentication
* (2 points) Perform client side form validation using a JavaScript library
* (1 point) Use a CSS framework throughout your site, use a reasonable of customization of the framework (Bootstrap)
* (1 point) Integrate visual effects


