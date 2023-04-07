import axios from "axios";


const TOKEN_API = import.meta.env.VITE_TOKEN_API

const instance = axios.create({
  method: "get",

  baseURL: `https://api.nasa.gov/mars-photos/api/v1/rovers`,

  timeout: 5000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
  return formattedDate
}

async function getNasaData(roverName, currentDate) {
  try {
    const dateStr = formatDate(currentDate.value)
    const response = await instance(`/${roverName.value}/photos?earth_date=${dateStr}&api_key=${TOKEN_API}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { getNasaData };
