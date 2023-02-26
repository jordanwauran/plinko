var Engine = Matter.Engine,
   // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies;
    Composite = Matter.Composite;

  var engine;
  var runner;
  var particles = [];
  var plinkos = [];
  var bounds = [];
  var cols = 4;
  var rows = 11;
  var yspacing = 100;
  var xspacing = 50;
  var spacing = 500;
  var balance = 100;
  let button;

function setup() {
    createCanvas(800,800);
    engine = Engine.create();
    runner = engine.runner;

    for (var j = 4; j <= rows; j++, cols++) {

        xspacing = 50;
        
        if(j == 4) {
           var x = width/2 - 75;
        }

        if(j == 5) {
            var x = width/2 - 100;
        }

        if(j == 6) {
            var x = width/2 - 125;
        }

        if (j == 7) {
            var x = width/2 - 150;
        }

        if (j == 8) {
            var x = width/2 - 175;
        }

        if (j == 9) {
            var x = width/2 - 200;
        }

        if (j == 10) {
            var x = width/2 - 225;
        }

        if (j == 11) {
            var x = width/2 - 250;
        }
        
        for(var i = 0; i < cols; i++) {
          
          var y = yspacing;
          var p = new Plinko(x, y, 4);
          plinkos.push(p);
          x += xspacing;
        }
        yspacing += 70;  
    }   

    for (var i = 0; i < cols; i ++) {
        var x = i * 55 + 100;
        var h = 22;
        var w = 50;
        var y = 630;
        var b = new Boundary (x, y , w, h);
        bounds.push(b);
    }

    var lSide = new Boundary(73, 630, 1, 400);
    bounds.push(lSide);
    var rSide = new Boundary(733, 630, 1, 400);
    bounds.push(rSide);

    let col = color(0,231,1)
    button = createButton('Bet');
    button.position(width - 192, 80);
    button.style('font-size', '16px');
    button.style('background-color', col);
    button.style('border:none');
    button.style('cursor:pointer');
    button.style('padding: 18px 52px');
    button.style('border-bottom-left-radius: 4px');
    button.style('border-bottom-right-radius: 4px');
    button.style('border-top-right-radius: 4px');
    button.style('border-top-left-radius: 4px');
    button.style('font-weight: 600');
    button.style('font-family: proxima-nova, sans-serif');
    button.mousePressed(spawnParticles);
}

function spawnParticles () {
        if (balance > 0) {
            var xval = randomNumber(375, 425);
            var p = new Particle (xval, 30, 10);
            particles.push(p);
            balance--;
        }   
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function ghubLink() {
    window.open('https://github.com/jordanwauran/plinko');
}

function draw() {
    background(26, 44, 56);
    Engine.update(engine);
    ghubButton = createImg('ghub.png');
    ghubButton.position(10,5);
    ghubButton.mousePressed(ghubLink);
    ghubButton.style('height: 35px');
    ghubButton.style('width: 35px');
    ghubButton.style('cursor:pointer');
    textSize(20);
    strokeWeight(0);
    textStyle(BOLD);
    fill(102,178,255);
    stroke(102,178,255);
    text('Balance:', width - 186, 60);
    text(balance, width - 100, 60);

    for (var i = 0; i < particles.length; i++) {
        particles[i].show();
        
        if(particles[i].isOffScreen()) {
            particles[i].removeFromWorld();
            particles.splice(i, 1);
            i--;
        }
      
        var val = particles[i].removeFromCollision();
        if (val != 0) {
            balance += 1 * parseInt(val);
            particles[i].removeFromWorld();
            particles.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].show();
    }

    for (var i = 0; i < bounds.length; i++) {
        bounds[i].show();
    }
}