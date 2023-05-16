const URL = 'http://localhost:8080';

async function getData() {
  let response = await fetch(URL);

  let text = await response.text();
  console.log(text);
}

getData();
