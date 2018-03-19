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

export const parseThreeDaySolar = rawData => {
  const solar = rawData.slice(rawData.indexOf("B."), rawData.indexOf("C."));

  const solarJson = {
    rationale: solar.match(/^Rationale:[\S\s]+/gm)[0],
    observed: solar.match(/^Solar radiation,[\S\s]+(?=Solar Radiation)/gm)[0]
  };
  return solarJson;
};

export const parseThreeDayRadio = rawData => {
  const radio = rawData.slice(rawData.indexOf("C."));
  //begining to end of observed
  let blackout = radio
    .match(/^C.[\S\s]+(?=Radio Blackout Forecast for[\S\s]+)/gm)[0]
    .split("\n")
    .splice(2);
  //put all in one string, rid of new lines
  blackout = blackout.reduce((prev, current) => {
    if (current !== "") {
      return prev + current;
    }
    return prev;
  }, "");

  return {
    rationale: radio.match(/^Rationale:[\S\s]+/gm)[0],
    blackout: blackout
  };
};

export const parseThreeDayLights = rawData => {
  //format lights JSON
  //grabs all lights info
  rawData = rawData.slice(rawData.indexOf("A."), rawData.indexOf("B."));
  //split by newlines
  const aArray = rawData.split("\n");
  const dateTable = [];
  //forcast details
  for (let i = 10; i < 18; i++) {
    dateTable.push(aArray[i].match(/[^ ]+/g));
  }
  //sometimes rationale can be multiple lines
  let rationale = "";
  for (let j = 19; j < aArray.length; j++) {
    if (aArray[j] !== "") {
      rationale = rationale + " " + aArray[j];
    }
  }

  //for formatting table
  const dateRange = aArray[9].match(/[A-z]+\s\d+/g);
  dateRange.unshift("Time");

  const json = {
    title: aArray[0].slice(3),
    greatesObserved: aArray[2] + aArray[3],
    greatestExpected: aArray[4] + aArray[5],
    kpBreakdown: aArray[7],
    dateRange: dateRange,
    dateTable: dateTable,
    rationale: rationale
  };
  return json;
};

export const parseWeeklySummary = rawData => {
  //splits data into highlighs and forcast and returns a JSO
  const total = rawData.replace(/[:#].*\n/g, "");
  const highlights = total.slice(0, total.indexOf("Forecast of") - 1);
  const forcast = total.slice(total.indexOf("Forecast of"));
  return {
    highlights: highlights,
    forcast: forcast
  };
};

export const parseAlerts = rawData => {
  //Grab first 5 alerts
  const alerts = [];
  for (let i in rawData) {
    //if its an alert, push to array
    if (rawData[i].message.match(/^ALERT:.*/gm)) {
      alerts.push({
        id: rawData[i].message.match(/^Serial Number:.*/gm),
        alert: rawData[i].message.match(/^ALERT:.*/gm),
        time: rawData[i].message.match(/^Issue Time:.*/gm),
        thresholdReached: rawData[i].message.match(/^Threshold Reached:.*/gm),
        station: rawData[i].message.match(/^Station:.*/gm),
        impacts: rawData[i].message.match(/^Potential Impacts:.*/gm),
        touched: false
      });
    }
    if (alerts.length > 4) break;
  }
  return alerts;
};

export const parseThreehourForcast = rawData => {
  //get rid of headers
  rawData = rawData.slice(1);
  //3d array. Each element is a day, each day contains 8 forcasts, each forcast is an array of 4 elements
  //initialize with threeHourDay and threeHourArrayIndex so for loop works properly
  //threeHourDay is there to check if we have a new days forcasts while looping
  //threeHourArrayIndex is incremented whenever we see a new day
  const threeHour = [];
  threeHour.push([]);
  let threeHourDay = rawData[0][0].match(/^[0-9-]+/g)[0];
  let threeHourArrayIndex = 0;

  /* this loop always pushes a forcast to the threeHour array.
  The if statement is just to check if its a new day, if it is, 
  push an empty array to it then carry on */
  for (let rawDataIndex in rawData) {
    if (threeHourDay !== rawData[rawDataIndex][0].match(/^[0-9-]+/g)[0]) {
      //new day
      threeHourArrayIndex += 1;
      threeHourDay = rawData[rawDataIndex][0].match(/^[0-9-]+/g)[0];
      threeHour.push([]);
    }
    threeHour[threeHourArrayIndex].push(rawData[rawDataIndex]);
  }
  return threeHour;
};
