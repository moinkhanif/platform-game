async function getData() {
  let data;
  try {
    data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VVQuSwQddoQIFiYmWVCR/scores/');
    const json = await data.json();
    return json;
  } catch (error) {
    data = await fetch('https://backend.moinkhanif.dev/api/v1/mk-platform-game');
    const json = await data.json();
    return json;
  }
}

export default getData;
