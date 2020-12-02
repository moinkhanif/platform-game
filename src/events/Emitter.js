
import Phaser from 'phaser';

class EventEmitter extends Phaser.Events.EventEmitter {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}

export default new EventEmitter();
