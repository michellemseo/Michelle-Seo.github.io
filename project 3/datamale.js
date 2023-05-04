const partiesContainer = document.querySelector('#parties');
const APP_TOKEN = 'YTAV4jKg4jwbNc1MycwyYEIl0'; // <- Replace this with your app token
const DATASET_IDENTIFIER = '25th-nujf'; // <- Replace this with the ID for the data resource that you want to look up

// Construct the URL that we need to make requests
// This is a filtered dataset of only "Loud Music/Party" complaints in the past year
const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$query=SELECT%20%60brth_yr%60%2C%20%60gndr%60%2C%20%60nm%60%2C%20%60cnt%60%0AWHERE%20(%60cnt%60%20%3C%3D%2010)%20AND%20((%60brth_yr%60%20%3D%202019)%20AND%20(%60gndr%60%20IN%20(%22MALE%22)))%0AORDER%20BY%0A%20%20%60brth_yr%60%20DESC%20NULL%20LAST%2C%0A%20%20%60gndr%60%20ASC%20NULL%20LAST%2C%0A%20%20%60ethcty%60%20ASC%20NULL%20LAST%2C%0A%20%20%60rnk%60%20ASC%20NULL%20LAST`;

// initialize parties DOM
let partiesDOM = "<ol>";


console.log(`Fetching url - ${url}`);

fetch(url)
  .then((response) => response.json())
  .then((json) => {
      console.log(json);
      json.forEach(function(party) {
        partiesDOM += `<div>${(party.brth_yr)}: (${party.gndr}) ${party.nm} ${party.cnt}</div>`;
      });
      partiesDOM += `</ol>`;
      partiesContainer.innerHTML = partiesDOM;
  });