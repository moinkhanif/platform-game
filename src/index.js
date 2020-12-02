import Phaser from 'phaser';

import PlayScene from './scenes/Play';

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 600,
  scene: [PlayScene],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

// eslint-disable-next-line no-new
new Phaser.Game(config);