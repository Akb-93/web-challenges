console.clear();

// import { renderElement } from "./utils";

// const root = document.body;
// const jokeSection = JokeSection();
// root.append(jokeSection);

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  const allData = data.results;
  //   allData.forEach((name) => {
  //     const dataNames =
  //   });

  const names = allData.map((charactor) => charactor.name);
  console.log(names);
}

fetchData();
// renderElement();
