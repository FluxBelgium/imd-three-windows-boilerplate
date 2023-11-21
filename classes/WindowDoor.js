import { BoxGeometry, Group, MeshStandardMaterial } from "three";
import { scene } from "../main";

export class WindowDoor {
    constructor(width = 1, height = 1) {
        this.width = width;
        this.height = height;

        // Measurements.
        this.frameThickness = 0.05;
        this.frameDepth = 0.05;
        this.glassDepth = 0.02;

        // Group.
        this.group = new Group();

        // TODO: add 'flip' parameter for right door.

        // Material.
        this.metalMaterial = new MeshStandardMaterial();
        this.glassMaterial = new MeshStandardMaterial();

        // Geometry.
        this.placeholderGeometry = new BoxGeometry();

        // TODO: add meshes.

        // TODO: load and add handle meshes.

        // TODO: add mesh shadows.

        this.add();
        this.setSize(this.width, this.height);
    }

    // Add to main scene.
    add() {
        scene.add(this.group);
    }

    // Remove from main scene.
    remove() {
        scene.remove(this.group);
    }

    // Resize the window frame.
    setSize(width, height) {
        this.width = width;
        this.height = height;

        // TODO: Set mesh scales.

        // TODO: Reposition meshes.
    }

    // Set group position.
    setPosition(x, y, z) {
        this.group.position.set(x, y, z);
    }

    // Set window rotation.
    setRotation(radians) {
        // TODO: rotate window.

        // TODO: rotate handle grip.
    }

    // Set material color.
    setMaterialColor(color) {
        // TODO: update material color.
    }
}
