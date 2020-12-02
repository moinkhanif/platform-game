import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {

  }

  create() {
    console.log('Ready!');
  }

  update() { }
}

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 600,
  scene: [PlayScene],
};

// eslint-disable-next-line no-new
new Phaser.Game(config);