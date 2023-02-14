const platform = '/img/platform.png';
const background = '/img/background.png';
const hills = '/img/hills.png';
const platformSmallTall = '/img/platformSmallTall.png';
const penguinRight = '/img/side-right.png';
const penguinLeft = '/img/side-left.png';

const canvas = document.querySelector('canvas');
//c = canvas context
const c = canvas.getContext('2d');


canvas.width = 1024; //don't need window. can just use innerWidth
canvas.height = 576;

const gravity = 0.5;

class Player {
  constructor() {
    this.speed = 5;
    //setting position of Player
    this.position = {
      x: 100,
      y: 100
    };

    this.velocity = {
      x: 0,
      y: 0 //positive will push element down (top = 0)
    }
    //setting size of Player
    this.width = 60;
    this.height = 60;

    this.penguin = {
      right: createImage(penguinRight),
      left: createImage(penguinLeft)
    }

    this.currentPenguin = this.penguin.right;
    this.image = this.currentPenguin;

  }

  draw() {
    //define the look of Player
   c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
  //updates player's property 
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      //if y position + player height + velocity < bottom this means its above ground => gravity
      this.velocity.y += gravity; //accerlerating overtime
    } else {
      //on ground => no gravity
      // this.velocity.y = 0;

      //player fall to ground => restart

    }
  }
};

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
};

class GenericObjects {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
};

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

//creating our player
let player = new Player();
let platforms = [];

let genericObjects = [];

//monitoring pressed keys for x position movements
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

//win scenario
let scrollOffset = 0;
let currentKey;

function init() {
   platformImage = createImage(platform);
   platformSmallTallImage = createImage(platformSmallTall);


  scrollOffset = 0;

   player = new Player();
   platforms = [
    new Platform({
      x: platformImage.width * 4 + 300-2 + platformImage.width - platformSmallTallImage.width,
      y: 270,
      image: platformSmallTallImage
    }),
    new Platform({
      x: -1, y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width - 3, y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 2 + 100, y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 3 + 300, y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 4 + 300-2, y: 470,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 5 + 650-2, y: 470,
      image: platformImage
    })
  ];

   genericObjects = [
    new GenericObjects({
      x: 0,
      y: 0,
      image: createImage(background)
    }),
    new GenericObjects({
      x: 0,
      y: 0,
      image: createImage(hills)
    })
  ];
}



//recursive function to generate animation  of player by constantly updating and drawing player
function animate() {
  requestAnimationFrame(animate);
  //(starting x, starting y, to x, to y)
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); //clearing canvasand allow us to call draw right after
  genericObjects.forEach(genericObject => {
    genericObject.draw();
  })
  platforms.forEach(platform => platform.draw());
  player.update();

  //update velocity to change position x of player
  // add in condition to limit where player can move
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 50) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(platform => platform.position.x -= player.speed);
      genericObjects.forEach(genericObject => genericObject.position.x -= player.speed*0.66);
      //subtract at same rate as velocity to create the illusion of movement for player
    } else if (keys.left.pressed && scrollOffset >= 0) {
      scrollOffset -= player.speed;
      platforms.forEach(platform => platform.position.x += player.speed);
      genericObjects.forEach(genericObject => genericObject.position.x += player.speed*0.66);

    }
  }
  //platform collision detection
  platforms.forEach(platform => {
    if (player.position.y + player.height <= platform.position.y //+ platform.height //bottom of player taller than bottom of platform (?)
      && player.position.y + player.height + player.velocity.y >= platform.position.y //jumping above the top of platform
      && player.position.x + player.width >= platform.position.x //right side of player >= left side of platform => stays on top
      && player.position.x <= platform.position.x + platform.width // left side of player >= right side of platform => falls
    ) {
      player.velocity.y = 0; //stop player movement
    }
  });

  if (currentKey === 'right' && player.currentPenguin !== player.penguin.right) {
    player.currentPenguin = player.penguin.right;
    player.image = player.currentPenguin;

  } else if (currentKey === 'left' && player.currentPenguin !== player.penguin.left) {
    player.currentPenguin = player.penguin.left;
    player.image = player.currentPenguin;
  }

  // win condition
  if (scrollOffset > platformImage.width * 5 + 420-2) {
    console.log('you win');
  }

  // lose condition
  if (player.position.y > canvas.height) {
    init()
  }

}

init();
animate();

addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 37:
    case 65:
      keys.left.pressed = true;
      currentKey = 'left';
      break;
    // case 83:
    //     console.log("down");
    //     break;
    case 39:
    case 68:
      keys.right.pressed = true;
      currentKey = 'right';
      break;
    case 32:
      player.velocity.y -= 15;
      break;
  }
}); //window.addeventListener()

addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
    case 37:
    case 65:
      keys.left.pressed = false;
      break;
    // case 83:
    //     console.log("down");
    //     break;
    case 39:
    case 68:
      keys.right.pressed = false;
      break;
  }
});

