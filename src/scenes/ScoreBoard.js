
import BaseScene from './BaseScene';

class ScoreBoard extends BaseScene {
  constructor(config) {
    super('ScoreBoard', { ...config, canGoBack: true });

    this.menu = [
      { scene: null, text: 'Thank you for playing' },
    ];
  }

  create() {
    super.create();
    this.createMenu(this.menu, () => { });
    this.getData();
  }

  async getData() {
    this.data = await fetch('https://backend.moinkhanif.dev/api/v1/mk-platform-game');
    console.log(this.data);
  }
}

export default ScoreBoard;