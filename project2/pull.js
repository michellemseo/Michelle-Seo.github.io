fetch('kordata.json')
    .then(response => response.json())
    .then(data => {
        let flexContainer = document.querySelector("#day-container")
        console.log(data);
        for(let i=0; i<data.length; i++){
            console.log(i);
            const dayParent = document.createElement('div');
            const day = document.createElement('p');

            dayParent.id ="dayParent";

            //dates
            if(i>2&&i<34){
                day.innerHTML=i-2;
            }

            
            if(i===5||i===10||i===25||i===26){
                let popUp = document.createElement('div');
                popUp.classList.add("popUp");
                popUp.classList.add("hide");
                for(let j=0; j<data[i].Name.length; j++){
                    if(i>2&&i<34){
                        const img = document.createElement('img');
                        const location = document.createElement('p');
                        location.innerHTML = data[i].Location[j];
                        img.src="elastic_collection/"+ data[i].Name[j];
                        popUp.append(img, location)    
                    }
                }
                dayParent.addEventListener("click", () =>{
                    popUp.classList.toggle("hide");
                })
                dayParent.append(popUp)
            }

            if(i===5){
                dayParent.id="red";
            }

            if(i===10){
                dayParent.id="green";
            }
            
            if(i===25){
                dayParent.id="yellow";
            }

            if(i===26){
                dayParent.id="blue";
            }
            

            console.log(data[i].Location)
            // Set the text content and href attributes for the link
        
            // Add the HTML tags to webpage
            dayParent.append(day);
            flexContainer.append(dayParent);
        }
    })
    .catch(error => console.error(error));