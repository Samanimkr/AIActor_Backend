const express = require("express");
const fr = require('face-recognition');

const app = express();

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running on port 8080");
});

const image = fr.loadImage('images/samani.png')

const win = new fr.ImageWindow()

// display image
win.setImage(image)

// drawing the rectangle into the displayed image
win.addOverlay(rectangle)

// pause program until key pressed
fr.hitEnterToContinue()
