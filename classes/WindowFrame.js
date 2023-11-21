import { BoxGeometry, Group, MeshStandardMaterial } from "three";
import { scene } from "../main";

export class WindowFrame {
    constructor(width = 1, height = 1) {
        this.width = width;
        this.height = height;

        // Measurements.
        this.frameThickness = 0.05;
        this.frameDepth = 0.1;
        this.sillHeight = 0.01;
        this.sillDepth = 0.2;

        // Group.
        this.group = new Group();

        // Material.
        this.metalMaterial = new MeshStandardMaterial();

        // Geometry.
        this.placeholderGeometry = new BoxGeometry();

        // TODO: add frame meshes

        // TODO: mesh shadows.

        // TODO: add window doors.

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

        // TODO: Update and reposition window doors.
    }

    // Set window doors rotation.
    setRotation(radians) {
        // TODO: add door rotations.
    }

    // Set material color.
    setMaterialColor(color) {
        // TODO: set metal colors of frame and doors.
    }
}
