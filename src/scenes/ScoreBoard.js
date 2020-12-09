
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

  // async getData() {
  //   try {
  //     this.data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VVQuSwQddoQIFiYmWVCR/scores/');
  //     const json = await this.data.json();
  //     return json;
  //   } catch (error) {
  //     this.data = await fetch('https://backend.moinkhanif.dev/api/v1/mk-platform-game');
  //     const json = await this.data.json();
  //     return json;
  //   }
  // }
}

export default ScoreBoard;