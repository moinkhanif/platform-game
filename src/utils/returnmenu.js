import getData from './getscore';

async function returnMenu() {
  const menus = await getData();
  const menuResult = await menus.result;
  if (menuResult.length > 4) {
    menuResult.length = 4;
  }
  let result;
  if (menuResult.length === 0) {
    result = [{ scene: null, text: 'No score available' }];
  } else {
    result = menuResult.map((val) => ({ scene: null, text: `${val.user}:  ${val.score}` }));
  }
  return result;
}

export default returnMenu;
