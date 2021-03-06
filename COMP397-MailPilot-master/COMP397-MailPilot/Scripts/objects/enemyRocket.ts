﻿module objects {
    // ENEMY ROCKET CLASS
    export class EnemyRocket extends objects.GameObject {
        public planeX: number;
        public planeY: number;
        // CONSTRUCTOR
        constructor(enemyPlaneX, enemyPlaneY) {
            super("enemyRocket");
            this.sound = "yay";
            this._dx = 5;
            this.x = enemyPlaneX + this.width;
            this.y = enemyPlaneY;
            //this.reset();

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            //alert(plane);
            this.x -= 10;
            
            //this.planeX = tmpPlaneX;
            //this.planeY = tmpPlaneY;
            //this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            //alert("planeX"+this.planeX);
            //alert("planeY"+this.planeY);
            this.visible = false;
            this.x = this.planeX + this.width;
            this.y = this.planeY + 35;//Math.floor(Math.random() * 430);

            /*
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            */
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.x >= (1000 + this.width)) {

                this.reset();
            }

            /*
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
            */
        }

    }

}  