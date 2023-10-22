import * as THREE from './three.module.js';
import HumanInterfaceDevice from './humaninterfacedevice.js';
import { CrossProduct } from './crossproduct.js';

class collisionChecker {

    constructor(scene, camera, segments, hid) {
        this.scene = scene;
        this.camera = camera;
        this.segments = segments;
        this.canvas = document.getElementById('canvas');
        this.hid = hid;
        this.check();
    }

    check() {
        // const cameraPosition = this.camera.position;
        const distanceThreshold = 0.8;

        // Speed might jump the distanceThreshold ** CAUTION **
        const moveSpeed = 0.04;
        // Iterate over all walls and find the closest one
        // for (const wall of this.segments) {
        // const wallPosition = wall.position;
        const cameraPosition = this.camera.position;

        this.segments.forEach(elem => {
            const pos= elem.position;
            const vectCP = new CrossProduct(elem.position, this.camera.position);
            if ((Math.floor(this.camera.position.x) === (pos.x | pos.z)) || (Math.floor(this.camera.position.z) === (pos.x | pos.z))) {
                // console.log(Math.floor(this.camera.position.x) + "x" + pos.x + " " + pos.z);
                // console.log(Math.floor(this.camera.position.z) + "z" + pos.x + " " + pos.z);
                var moves = [this.hid.moveLeft, this.hid.moveRight, this.hid.moveBackward, this.hid.moveForward];
                var velocity = moveSpeed;
                var jump = 0;
                var vectorChecked = 0;
                var i = 0;
                var vect = 0;
                moves.forEach(move => {
                    vect = vectCP.OrthogonalVector();
                    velocity = (move == moves[i] && i == 0 || i == 2) ? moveSpeed : -moveSpeed;
                    if (move == moves[i]) {
                        vectorChecked = vect;
                        jump = i;
                    }
                    i++;
                });
                if (jump >= 2 && vect > 0) {
                    this.hid.controls.moveForward(velocity);
                }
                else if (Math.abs(vect) > 0) {
                    this.hid.controls.moveRight(velocity);
                }
            }
        });
        const delta = this.hid.clock.getDelta();
        this.hid.update(delta);
    }
}


export { collisionChecker };