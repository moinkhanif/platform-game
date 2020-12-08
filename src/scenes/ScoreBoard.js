
import BaseScene from './BaseScene';

class ScoreBoard extends BaseScene {
  constructor(config) {
    super('ScoreBoard', { ...config, canGoBack: true });
    this.returnMenu();
  }

  create() {
    super.create();
    this.createMenu(this.menu, () => { });
    this.getData();
  }

  async returnMenu() {
    const menus = await this.getData();
    const menuResult = await menus.result;
    if (menuResult.length > 5) {
      menuResult.length = 5;
    }
    let result;
    if (menuResult.length === 0) {
      result = [{ scene: null, text: 'No score available' }];
    } else {
      result = menuResult.map((val) => ({ scene: null, text: `${val.name}:  ${val.total}` }));
    }
    this.menu = result;
  }

  async getData() {
    this.data = await fetch('https://backend.moinkhanif.dev/api/v1/mk-platform-game');
    const json = await this.data.json();
    return json;
  }
}

export default ScoreBoard;