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


