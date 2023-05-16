const HOST = 'localhost';
const PORT = 8080;

async function getData() {
  let response = await fetch(`http://${HOST}:${PORT}`);

  let text = await response.text();
  console.log(text);
}

getData();
