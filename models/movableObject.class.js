class MovableObject {
    imageCache = {};
    x = 50; 
    y = 200; 
    img; 
    height = 100; 
    width = 100; 
    currentImage = 0; 
    speed = 0.15; 
    otherDirection = false; 
    speedy = 0;
    acceleration = 2; 
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); 
            img.src = path; 
            this.imageCache[path] = img; 
        }); 
    }
    applyGravity() { // gravity 
        setInterval(() => {
            if(this.aboveGround() || this.speedy > 0) {
            this.y += this.speedy; 
            this.speedy -= this.acceleration;
    }}, 1000 / 25);
    }
    aboveGround(){
        return this.y < 180;
    }
    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }
    moveLeft() {
        this.x -= this.speed; 
    }
    moveRight() {
        this.x += this.speed; 
    }
    jump() {
        this.speedy = 30;
    }
}