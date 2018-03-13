import axios from "./axios-swpc";

export const getAlerts = () => {
  return axios.get("products/alerts.json");
};

export const getThreeDayForcast = () => {
  return axios.get("text/3-day-forecast.txt");
};

export const getTwentyDayForcast = () => {
  return axios.get("text/27-day-outlook.txt");
};

export const getWeeklySummary = () => {
  return axios.get("text/weekly.txt");
};

export const getThreeHourForcast = () => {
  return axios.get("products/noaa-planetary-k-index-forecast.json");
};

export const parseThreeDayForcast = rawData => {
  //format lights JSON
  //grabs all lights info
  const a = rawData.slice(rawData.indexOf("A."), rawData.indexOf("B."));
  //split by newlines
  const aArray = a.split("\n");
  const dateTable = [];
  //forcast details
  for (let i = 10; i < 18; i++) {
    dateTable.push(aArray[i].match(/[^ ]+/g));
  }
  //sometimes rationale can be multiple lines
  let rationale = "";
  for (let j = 19; j < aArray.length; j++) {
    if (aArray[j] !== "") {
      rationale = rationale + aArray[j];
    }
  }
  const json = {
    lights: {
      title: aArray[0].slice(3),
      greatesObserved: aArray[2] + aArray[3],
      greatestExpected: aArray[4] + aArray[5],
      kpBreakdown: aArray[7],
      dateRanger: aArray[9].match(/[A-z]+\s\d+/g),
      dateTable: dateTable,
      rationale: rationale
    },
    solar: {},
    radio: {}
  };
  return json;
};

export const getAPOD = () => {
    //TODO: cant make request to apod. might have to do rss feed
};
