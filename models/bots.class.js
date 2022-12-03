class Bot extends MovableObject {
    width = 80; 
    height = 80; 
    IMAGES_CHICKEN = [
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    constructor() {
        super().loadImage('./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_CHICKEN);
        this.x = 200 + Math.random() * 3600;
        this.y = 50; 
        this.speed = 0.4 + Math.random() * 1; 

        this.animate(); 
    }
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_CHICKEN.length;
            let path = this.IMAGES_CHICKEN[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}