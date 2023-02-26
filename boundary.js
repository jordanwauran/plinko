function Boundary(x,y,w,h) {
    var options = {
        isStatic: true,
    }
    this.body = Bodies.rectangle(x,y,w, h, options);
    this.w = w;
    this.h = h;
    Composite.add(engine.world, this.body);
}

Boundary.prototype.show = function() {
   
    var pos = this.body.position;

    if((pos.x == 375) || (pos.x == 430) || (pos.x == 320) || (pos.x == 485)) {
        fill(237,245,26);
        stroke(237,245,26);
    }
    else if ((pos.x == 265) || (pos.x == 540) || (pos.x == 210) || (pos.x == 595)) {
        fill('orange');
        stroke('orange');
    }
    else if (pos.x == 73|| pos.x == 733) {
        fill(26, 44, 56);
        stroke(26, 44, 56);
    }
    else {
        fill('red');
        stroke('red');
    }
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h, 2);
    
    if((pos.x == 100) || (pos.x == 705)) {
        textSize(16);
        strokeWeight(1);
        textStyle(BOLD);
        fill(0,0,0);
        text('50x',-12,5);
    }

    if((pos.x == 155) || (pos.x == 650)) {
        textSize(16);
        strokeWeight(1);
        textStyle(BOLD);
        fill(0,0,0);
        text('17x',-12,5);
    }

    if((pos.x == 210) || (pos.x == 595)) {
        textSize(16);
        strokeWeight(1);
        textStyle(BOLD);
        fill(0,0,0);
        text('3x',-8,5);
    }

    if((pos.x == 265) || (pos.x == 540)) {
        textSize(16);
        strokeWeight(1);
        textStyle(BOLD);
        fill(0,0,0);
        text('0.8x',-13,5);
    }

    if((pos.x == 320) || (pos.x == 485)) {
        textSize(16);
        strokeWeight(1);
        textStyle(BOLD);
        fill(0,0,0);
        text('0.6x',-13,5);
    }

    if((pos.x == 375) || (pos.x == 430)) {
        textSize(16);
        strokeWeight(1);
        textStyle(BOLD);
        fill(0,0,0);
        text('0.3x',-13,5);
    }

    pop();
}