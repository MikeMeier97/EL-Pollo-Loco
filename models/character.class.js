class Character extends MovableObject {
    height = 250; 
    width = 250; 
    y = 100; 
    speed = 7;
    IMAGES_IDLE = [
        './assets/img/2_character_pepe/1_idle/idle/I-1.png',
        './assets/img/2_character_pepe/1_idle/idle/I-2.png',
        './assets/img/2_character_pepe/1_idle/idle/I-3.png',
        './assets/img/2_character_pepe/1_idle/idle/I-4.png',
        './assets/img/2_character_pepe/1_idle/idle/I-5.png',
        './assets/img/2_character_pepe/1_idle/idle/I-6.png',
        './assets/img/2_character_pepe/1_idle/idle/I-7.png',
        './assets/img/2_character_pepe/1_idle/idle/I-8.png',
        './assets/img/2_character_pepe/1_idle/idle/I-9.png',
        './assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_WALK = [
        './assets/img/2_character_pepe/2_walk/W-21.png',
        './assets/img/2_character_pepe/2_walk/W-22.png',
        './assets/img/2_character_pepe/2_walk/W-23.png',
        './assets/img/2_character_pepe/2_walk/W-24.png',
        './assets/img/2_character_pepe/2_walk/W-25.png',
        './assets/img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMP = [
        './assets/img/2_character_pepe/3_jump/J-31.png',
        './assets/img/2_character_pepe/3_jump/J-32.png',
        './assets/img/2_character_pepe/3_jump/J-33.png',
        './assets/img/2_character_pepe/3_jump/J-34.png',
        './assets/img/2_character_pepe/3_jump/J-35.png',
        './assets/img/2_character_pepe/3_jump/J-36.png',
        './assets/img/2_character_pepe/3_jump/J-37.png',
        './assets/img/2_character_pepe/3_jump/J-38.png',
        './assets/img/2_character_pepe/3_jump/J-39.png'
    ];
    world; 
    constructor(){
        super().loadImage('./assets/img/2_character_pepe/1_idle/idle/I-1.png'); 
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.applyGravity();
        this.animate();
    }
    animate() {
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false; 
            }
            if(this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if(this.world.keyboard.SPACE && !this.aboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);
        setInterval(() => {
            if(this.aboveGround()) {
                let i = this.currentImage % this.IMAGES_JUMP.length; 
                let path = this.IMAGES_JUMP[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            } else {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALK.length; 
                let path = this.IMAGES_WALK[i];
                this.img = this.imageChache[path];
                this.currentImage++; 
            } else {
                let i = this.currentImage % this.IMAGES_IDLE.length; 
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageChache[path];
                this.currentImage++; 
            }
        }
        }, 200);
    }
}