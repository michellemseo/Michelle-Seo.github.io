const partiesContainer = document.querySelector('#parties');
const APP_TOKEN = 'YTAV4jKg4jwbNc1MycwyYEIl0'; // <- Replace this with your app token
const DATASET_IDENTIFIER = '25th-nujf'; // <- Replace this with the ID for the data resource that you want to look up

// Construct the URL that we need to make requests
// This is a filtered dataset of only "Loud Music/Party" complaints in the past year
const url = `https://data.cityofnewyork.us/resource/25th-nujf.json?$query=SELECT%20%60brth_yr%60%2C%20%60gndr%60%2C%20%60nm%60%2C%20%60ethcty%60%2C%20%60cnt%60%2C%20%60rnk%60%0AWHERE%20(%60brth_yr%60%20%3D%202019)%20AND%20(%60gndr%60%20IN%20(%22MALE%22))%0AORDER%20BY%20%60brth_yr%60%20DESC%20NULL%20LAST%2C%20%60gndr%60%20ASC%20NULL%20LAST`;

const modalContainer = document.getElementById('modal')

console.log(`Fetching url - ${url}`);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);


      data.forEach(item => {

        let currentPerson = document.createElement('div');
        currentPerson.classList.add(item.nm.charAt(0))
        currentPerson.dataset.name = item.nm;
        currentPerson.dataset.ethnicity = item.ethcty;
        currentPerson.dataset.count = item.cnt;
        currentPerson.dataset.rank = item.rnk;

        currentPerson.addEventListener('click', (evt) => {
          modalContainer.innerHTML = `
            <div>

            <h3>Name:</h3> 
            <p>${evt.target.dataset.name}</p>
            
            <h3>Ethnicity:</h3> 
            <p>${evt.target.dataset.ethnicity}</p>

            <h3>Count:</h3> 
            <p>${evt.target.dataset.count}</p>

            <h3>Rank:</h3> 
            <p>${evt.target.dataset.rank}</p>

            </div>
          `
          modalContainer.style.top = evt.clientY + 'px';
          modalContainer.style.left = evt.clientX + 'px';


        })

        partiesContainer.append(currentPerson);

      });
      
      partiesDOM += `<div>`;
      partiesContainer.innerHTML = partiesDOM;
  });

  
  const square = document.getElementById('square');
  const info = document.querySelector('div.E');
  
  square.addEventListener('click', () => {
    if (info.style.display === 'none') {
      info.style.display = 'none';
    } else {
      info.style.display = 'block';
    }
  });