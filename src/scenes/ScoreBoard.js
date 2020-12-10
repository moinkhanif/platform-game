
import BaseScene from './BaseScene';
import getData from '../utils/getscore';
import returnMenu from '../utils/returnmenu';

class ScoreBoard extends BaseScene {
  constructor(config) {
    super('ScoreBoard', { ...config, canGoBack: true });
    this.setMenu();
  }

  create() {
    super.create();
    this.createMenu(this.menu, () => { });
    getData();
  }

  async setMenu() {
    this.menu = await returnMenu();
  }
}

export default ScoreBoard;