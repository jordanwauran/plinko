function Particle(x,y,r) {
    var options = {
        restitution: 0.1,
        friction: 0.8
    }
    this.body = Bodies.circle(x,y,r, options);
    this.r = r;
    Composite.add(engine.world, this.body);
}

Particle.prototype.isOffScreen = function() {
    var pos = this.body.position;
    return (pos.y > height + 100);
}

Particle.prototype.removeFromCollision = function() {
    var pos = this.body.position;

        if( ((pos.x >= 45 && pos.x < 155) || (pos.x > 650 && pos.x <= 755)) && pos.y >= 609) {
            return 50;
        }

        if( ((pos.x >= 155 && pos.x < 210) || (pos.x > 595 && pos.x <= 650)) && pos.y >= 609) {
            return 17;
        }

        if( ((pos.x >= 210 && pos.x < 265) || (pos.x > 540 && pos.x <= 595)) && pos.y >= 609) {
            return 3;
        }

        if( ((pos.x >= 265 && pos.x < 320) || (pos.x > 485 && pos.x <= 540)) && pos.y >= 609) {
            return 0.8;
        }

        if( ((pos.x >= 320 && pos.x < 375) || (pos.x > 430 && pos.x <= 485)) && pos.y >= 609) {
            return 0.6;
        }

        if ((pos.x >= 375 && pos.x <= 430) && pos.y >= 609) {
            return 0.3;
        }

        else {
            return 0;
        }
}

Particle.prototype.removeFromWorld = function() {
    Composite.remove(engine.world, this.body);
}


Particle.prototype.show = function() {
    fill(255, 128, 0);
    stroke(255, 128, 0);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r*2);
    pop();
}