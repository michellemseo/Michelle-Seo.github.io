fetch('usdata.json')
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

            
            if(i===8||i===12||i===20||i===24){
                let popUp = document.createElement('div');
                popUp.classList.add("popUp");
                popUp.classList.add("hide");
                for (let j = 0; j < data[i].Name.length; j++) {
                    if (i > 2 && i < 34) {
                        const img = document.createElement('img');
                        const location = document.createElement('p');
                        // // Select the gallery button element
                        // const galleryButton = document.getElementById('gallery-button');
                        location.innerHTML = data[i].Location[j];
                        img.src = "elastic_collection/" + data[i].Name[j];
                        popUp.append(img, location)
                    }
                }
                dayParent.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })
                dayParent.append(popUp)
            }

            if(i===8){
                dayParent.id="green";
                dayParent.id = "green";
                let popUp = document.createElement('div');
                //Create 3 buttons for filtering
                let buttonCollage = document.createElement('button');
                let buttonGallery = document.createElement('button');
                let buttonVertical = document.createElement('button');

                buttonCollage.classList.add("button1");
                buttonGallery.classList.add("button1");
                buttonVertical.classList.add("button1");

                buttonCollage.innerHTML = "collage";
                buttonGallery.innerHTML = "gallery";
                buttonVertical.innerHTML = "vertical";


                let buttonContainer = document.createElement('div');

            // const buttonCollage = document.getElementById('collage');
            // const buttonGallery = document.getElementById('gallery');
            // const buttonVertical = document.getElementById('vertical');

                popUp.classList.add("popUp1");
                popUp.classList.add("hide");
                for (let j = 0; j < data[i].Name.length; j++) {
               
                        const img = document.createElement('img');
                        img.classList.add("image")
                        let currentWidth = "25vw";
                        img.style.width = currentWidth;
                        const location = document.createElement('p');
                        location.style.width = currentWidth;
                        location.classList.add("location")
                        const div = document.createElement('div');
                        div.classList.add("parent")
                        location.innerHTML = data[i].Location[j];
                        location.classList.add("hide");

                        img.src = "elastic_collection/" + data[i].Name[j];
                        div.append(img, location)
                        div.addEventListener("click", () => {
                            location.classList.toggle("hide");
                            // img.style.animation = "example 4s"
                            console.log(img.style.width)
                        })

                        popUp.append(div);

                        buttonContainer.appendChild(buttonCollage);
                        buttonContainer.appendChild(buttonGallery);
                        buttonContainer.appendChild(buttonVertical);
                        popUp.append(buttonContainer);
                        buttonContainer.classList.add("buttonContainer");


                        buttonCollage.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            let randomWidth = Math.floor(Math.random() * (40 - 15)) + 10 + "vw";
                            img.style.width = randomWidth;
                            location.style.width = randomWidth;
                            div.style.marginBottom = "20vh";
                        })
                        buttonVertical.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "100%";
                            // let image1 = document.querySelector(".image");
                            // image1.style.width = "90px";
                            img.style.width = "30vw";
                        })
                        buttonGallery.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            img.style.width = "20vw";
                        })


                    
                }
                dayParent.append(popUp)
                dayParent.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })
                popUp.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })

                //filtering here:

                // buttonCollage.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "33% 33% 33%";
                // })
                // buttonVertical.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //      let image1 = document.querySelector(".image");
                //     // image1.style.width = "90px";
                //     image1.style.width = "10vw";
                // })
                // buttonGallery.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //     img.style.width = "100%";
                // })
            }

            if(i===12){
                dayParent.id = "yellow";
                let popUp = document.createElement('div');
                //Create 3 buttons for filtering
                let buttonCollage = document.createElement('button');
                let buttonGallery = document.createElement('button');
                let buttonVertical = document.createElement('button');

                buttonCollage.classList.add("button1");
                buttonGallery.classList.add("button1");
                buttonVertical.classList.add("button1");

                buttonCollage.innerHTML = "collage";
                buttonGallery.innerHTML = "gallery";
                buttonVertical.innerHTML = "vertical";


                let buttonContainer = document.createElement('div');

            // const buttonCollage = document.getElementById('collage');
            // const buttonGallery = document.getElementById('gallery');
            // const buttonVertical = document.getElementById('vertical');

                popUp.classList.add("popUp1");
                popUp.classList.add("hide");
                for (let j = 0; j < data[i].Name.length; j++) {
               
                        const img = document.createElement('img');
                        img.classList.add("image")
                        let currentWidth = "25vw";
                        img.style.width = currentWidth;
                        const location = document.createElement('p');
                        location.style.width = currentWidth;
                        location.classList.add("location")
                        const div = document.createElement('div');
                        div.classList.add("parent")
                        location.innerHTML = data[i].Location[j];
                        location.classList.add("hide");

                        img.src = "elastic_collection/" + data[i].Name[j];
                        div.append(img, location)
                        div.addEventListener("click", () => {
                            location.classList.toggle("hide");
                            // img.style.animation = "example 4s"
                            console.log(img.style.width)
                        })

                        popUp.append(div);

                        buttonContainer.appendChild(buttonCollage);
                        buttonContainer.appendChild(buttonGallery);
                        buttonContainer.appendChild(buttonVertical);
                        popUp.append(buttonContainer);
                        buttonContainer.classList.add("buttonContainer");


                        buttonCollage.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            let randomWidth = Math.floor(Math.random() * (40 - 15)) + 10 + "vw";
                            img.style.width = randomWidth;
                            location.style.width = randomWidth;
                            div.style.marginBottom = "20vh";
                        })
                        buttonVertical.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "100%";
                            // let image1 = document.querySelector(".image");
                            // image1.style.width = "90px";
                            img.style.width = "30vw";
                        })
                        buttonGallery.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            img.style.width = "20vw";
                        })


                    
                }
                dayParent.append(popUp)
                dayParent.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })
                popUp.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })

                //filtering here:

                // buttonCollage.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "33% 33% 33%";
                // })
                // buttonVertical.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //      let image1 = document.querySelector(".image");
                //     // image1.style.width = "90px";
                //     image1.style.width = "10vw";
                // })
                // buttonGallery.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //     img.style.width = "100%";
                // })
            }
            
            if(i===20){
                dayParent.id = "blue";
                let popUp = document.createElement('div');
                //Create 3 buttons for filtering
                let buttonCollage = document.createElement('button');
                let buttonGallery = document.createElement('button');
                let buttonVertical = document.createElement('button');

                buttonCollage.classList.add("button1");
                buttonGallery.classList.add("button1");
                buttonVertical.classList.add("button1");

                buttonCollage.innerHTML = "collage";
                buttonGallery.innerHTML = "gallery";
                buttonVertical.innerHTML = "vertical";


                let buttonContainer = document.createElement('div');

            // const buttonCollage = document.getElementById('collage');
            // const buttonGallery = document.getElementById('gallery');
            // const buttonVertical = document.getElementById('vertical');

                popUp.classList.add("popUp1");
                popUp.classList.add("hide");
                for (let j = 0; j < data[i].Name.length; j++) {
               
                        const img = document.createElement('img');
                        img.classList.add("image")
                        let currentWidth = "25vw";
                        img.style.width = currentWidth;
                        const location = document.createElement('p');
                        location.style.width = currentWidth;
                        location.classList.add("location")
                        const div = document.createElement('div');
                        div.classList.add("parent")
                        location.innerHTML = data[i].Location[j];
                        location.classList.add("hide");

                        img.src = "elastic_collection/" + data[i].Name[j];
                        div.append(img, location)
                        div.addEventListener("click", () => {
                            location.classList.toggle("hide");
                            // img.style.animation = "example 4s"
                            console.log(img.style.width)
                        })

                        popUp.append(div);

                        buttonContainer.appendChild(buttonCollage);
                        buttonContainer.appendChild(buttonGallery);
                        buttonContainer.appendChild(buttonVertical);
                        popUp.append(buttonContainer);
                        buttonContainer.classList.add("buttonContainer");


                        buttonCollage.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            let randomWidth = Math.floor(Math.random() * (40 - 15)) + 10 + "vw";
                            img.style.width = randomWidth;
                            location.style.width = randomWidth;
                            div.style.marginBottom = "20vh";
                        })
                        buttonVertical.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "100%";
                            // let image1 = document.querySelector(".image");
                            // image1.style.width = "90px";
                            img.style.width = "30vw";
                        })
                        buttonGallery.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            img.style.width = "20vw";
                        })


                    
                }
                dayParent.append(popUp)
                dayParent.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })
                popUp.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })

                //filtering here:

                // buttonCollage.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "33% 33% 33%";
                // })
                // buttonVertical.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //      let image1 = document.querySelector(".image");
                //     // image1.style.width = "90px";
                //     image1.style.width = "10vw";
                // })
                // buttonGallery.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //     img.style.width = "100%";
                // })
            }




            if(i===24){
                dayParent.id = "red";
                let popUp = document.createElement('div');
                //Create 3 buttons for filtering
                let buttonCollage = document.createElement('button');
                let buttonGallery = document.createElement('button');
                let buttonVertical = document.createElement('button');

                buttonCollage.classList.add("button1");
                buttonGallery.classList.add("button1");
                buttonVertical.classList.add("button1");

                buttonCollage.innerHTML = "collage";
                buttonGallery.innerHTML = "gallery";
                buttonVertical.innerHTML = "vertical";


                let buttonContainer = document.createElement('div');

            // const buttonCollage = document.getElementById('collage');
            // const buttonGallery = document.getElementById('gallery');
            // const buttonVertical = document.getElementById('vertical');

                popUp.classList.add("popUp1");
                popUp.classList.add("hide");
                for (let j = 0; j < data[i].Name.length; j++) {
               
                        const img = document.createElement('img');
                        img.classList.add("image")
                        let currentWidth = "25vw";
                        img.style.width = currentWidth;
                        const location = document.createElement('p');
                        location.style.width = currentWidth;
                        location.classList.add("location")
                        const div = document.createElement('div');
                        div.classList.add("parent")
                        location.innerHTML = data[i].Location[j];
                        location.classList.add("hide");

                        img.src = "elastic_collection/" + data[i].Name[j];
                        div.append(img, location)
                        div.addEventListener("click", () => {
                            location.classList.toggle("hide");
                            // img.style.animation = "example 4s"
                            console.log(img.style.width)
                        })

                        popUp.append(div);

                        buttonContainer.appendChild(buttonCollage);
                        buttonContainer.appendChild(buttonGallery);
                        buttonContainer.appendChild(buttonVertical);
                        popUp.append(buttonContainer);
                        buttonContainer.classList.add("buttonContainer");


                        buttonCollage.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            let randomWidth = Math.floor(Math.random() * (40 - 15)) + 10 + "vw";
                            img.style.width = randomWidth;
                            location.style.width = randomWidth;
                            div.style.marginBottom = "20vh";
                        })
                        buttonVertical.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "100%";
                            // let image1 = document.querySelector(".image");
                            // image1.style.width = "90px";
                            img.style.width = "30vw";
                        })
                        buttonGallery.addEventListener('click', function(){
                            popUp.style.gridTemplateColumns = "33% 33% 33%";
                            img.style.width = "20vw";
                        })


                    
                }
                dayParent.append(popUp)
                dayParent.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })
                popUp.addEventListener("click", () => {
                    popUp.classList.toggle("hide");
                })

                //filtering here:

                // buttonCollage.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "33% 33% 33%";
                // })
                // buttonVertical.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //      let image1 = document.querySelector(".image");
                //     // image1.style.width = "90px";
                //     image1.style.width = "10vw";
                // })
                // buttonGallery.addEventListener('click', function(){
                //     popUp.style.gridTemplateColumns = "100%";
                //     img.style.width = "100%";
                // })
            }
            

            console.log(data[i].Location)
            // Set the text content and href attributes for the link
        
            // Add the HTML tags to webpage
            dayParent.append(day);
            flexContainer.append(dayParent);
        }
    })
    .catch(error => console.error(error));