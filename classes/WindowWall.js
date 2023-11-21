import {
    BoxGeometry,
    Group,
    Mesh,
    MeshStandardMaterial,
} from "three";
import { scene } from "../main";

export class WindowWall {
    constructor(width = 2, height = 2, holeWidth = 1, holeHeight = 1) {
        this.width = width;
        this.height = height;
        this.holeWidth = holeWidth;
        this.holeHeight = holeHeight;

        // Measurements.
        this.wallDepth = 0.15;

        // Group.
        this.group = new Group();

        // Material.
        this.wallMaterial = new MeshStandardMaterial();
        // TODO: add brick texture.

        // Geometry.
        this.placeholderGeometry = new BoxGeometry();

        // Parts.
        this.wall = new Mesh(this.placeholderGeometry, this.wallMaterial);

        this.group.add(this.wall);

        // Shadows.
        this.wall.castShadow = true;
        this.wall.receiveShadow = true;

        this.add();
        this.setSize(this.width, this.height, this.holeWidth, this.holeHeight);
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
    setSize(width, height, holeWidth, holeHeight) {
        this.width = width;
        this.height = height;
        this.holeWidth = holeWidth;
        this.holeHeight = holeHeight;

        // Set scales.
        this.wall.scale.set(this.width, this.height, this.wallDepth);

        // TODO: cut hole in wall.

        // TODO: update brick texture repeats.
    }

    // Set group position.
    setPosition(x, y, z) {
        this.group.position.set(x, y, z);
    }
}
