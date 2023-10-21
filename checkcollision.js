import * as THREE from './three.module.js';
import HumanInterfaceDevice from './humaninterfacedevice.js';
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
        const distanceThreshold = 0.3;

    const moveSpeed = 0.4;
        // Iterate over all walls and find the closest one
        // for (const wall of this.segments) {
        // const wallPosition = wall.position;
        const cameraPosition = this.camera.position;
        this.segments.forEach(elem => {
            var pos = elem.position;
            if ((Math.floor(this.camera.position.x) === (pos.x | pos.z)) || (Math.floor(this.camera.position.z) === (pos.x | pos.z))) {
                console.log(Math.floor(this.camera.position.x) + "x" + pos.x + " " + pos.z);
                console.log(Math.floor(this.camera.position.z) + "z" + pos.x + " " + pos.z);
                if ((Math.floor(this.camera.position.z) === (pos.z)) && this.hid.moveForward) {
                    this.hid.controls.moveForward(-moveSpeed);
                } else if ((Math.floor(this.camera.position.z) !== (pos.z)) && this.hid.moveForward) {
                    this.hid.controls.moveForward(moveSpeed);
                }
                else if ((Math.floor(this.camera.position.z) === (pos.z)) && this.hid.moveBackward) {
                    this.hid.controls.moveForward(-moveSpeed);
                }
                else if ((Math.floor(this.camera.position.z) !== (pos.z)) && this.hid.moveBackward) {
                    this.hid.controls.moveForward(moveSpeed);
                }
                if (Math.floor(this.camera.position.x) === (pos.x) && this.hid.moveLeft) {
                    this.hid.controls.moveRight(moveSpeed);
                }
                else if (Math.floor(this.camera.position.x) !== (pos.x) && this.hid.moveLeft) {
                    this.hid.controls.moveRight(-moveSpeed);
                }
                else if (Math.floor(this.camera.position.x) === (pos.x) && this.hid.moveRight) {
                    this.hid.controls.moveRight(-moveSpeed);
                }
                else if (Math.floor(this.camera.position.x) !== (pos.x) && this.hid.moveRight) {
                    this.hid.controls.moveRight(moveSpeed);
                }
                if (Math.floor(this.camera.position.x) === (pos.z) && this.hid.moveForward) {
                    this.hid.controls.moveRight(-moveSpeed);
                }
                else if (Math.floor(this.camera.position.x) !== (pos.z) && this.hid.moveForward) {
                    this.hid.controls.moveRight(moveSpeed);
                }
                else if (Math.floor(this.camera.position.z) === (pos.x) && this.hid.moveForward) {
                    this.hid.controls.moveForward(-moveSpeed);
                }
                else if (Math.floor(this.camera.position.z) !== (pos.x) && this.hid.moveForward) {
                    this.hid.controls.moveForward(moveSpeed);
                }
            }
        });

    }
}


export { collisionChecker };