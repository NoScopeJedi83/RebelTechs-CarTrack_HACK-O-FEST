import carsCollection from './api.js';

// console.log(carsCollection.Mercedes[0]);

// Wait for the DOM content to load before accessing the DOM elements
// const caro = document.querySelector(".caro");
// caro.innerText=`${carsCollection.Mercedes[0].model} `

// let newh3=document.createElement('h3');
// newh3.innerText=`${carsCollection.Mercedes[2].name}`
// caro.prepend(newh3)


// document.addEventListener('DOMContentLoaded', function() {
//     const caro = document.querySelector(".caro");
    // caro.innerText = ''; // Clear existing content
    // for(let i =0;i<=3;i++){
        
    //     const newh3 = document.createElement('h3');
    //         newh3.innerText = `: ${carsCollection.Mercedes[i].name}`;
    //         caro.appendChild(newh3);

    // }
 
        // carsCollection.Mercedes.forEach((car, index) => {
        //     const newh3 = document.createElement('h3');
        //     newh3.innerText = `${Mercedes}: ${car.name}`;
        //     caro.appendChild(newh3);
        // });
   
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const caro = document.querySelector(".caro");
//     caro.innerText = ''; // Clear existing content

//     const brandToShow = 'Mercedes'; // Change this to the desired brand

//     if (carsCollection.hasOwnProperty(brandToShow)) {
//         carsCollection[brandToShow].forEach((car, index) => {
//             const newh3 = document.createElement('h3');
//             newh3.innerText = `${brandToShow}: ${car.name}`;
//             caro.appendChild(newh3);
//         });
//     } else {
//         console.error(`Brand '${brandToShow}' not found in the cars collection.`);
//     }
// });


//********************** */ show***************
document.addEventListener('DOMContentLoaded',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Mercedes ${carsCollection.mercedes[i].name}`;
            para.innerText = ` ${carsCollection.mercedes[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.mercedes[i].year}`;
            flexrowp.innerText = ` ${carsCollection.mercedes[i].model}`;
            image.src=`${carsCollection.mercedes[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button1 =document.querySelector('.Mercedes')
const caro = document.querySelector(".caro");
   
button1.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Mercedes ${carsCollection.mercedes[i].name}`;
            para.innerText = ` ${carsCollection.mercedes[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.mercedes[i].year}`;
            flexrowp.innerText = ` ${carsCollection.mercedes[i].model}`;
            image.src=`${carsCollection.mercedes[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button2=document.querySelector('.Audi');
button2.addEventListener('click',function (){
    caro.innerHTML = '';
    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Audi ${carsCollection.audi[i].name}`;
            para.innerText = ` ${carsCollection.audi[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.audi[i].year}`;
            flexrowp.innerText = ` ${carsCollection.audi[i].model}`;
            image.src=`${carsCollection.audi[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

          

    }
})


const button3 =document.querySelector('.bmw')
button3.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `bmw ${carsCollection.bmw[i].name}`;
            para.innerText = ` ${carsCollection.bmw[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.bmw[i].year}`;
            flexrowp.innerText = ` ${carsCollection.bmw[i].model}`;
            image.src=`${carsCollection.bmw[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button4 =document.querySelector('.bugatti')
button4.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Bugatti ${carsCollection.bugatti[i].name}`;
            para.innerText = ` ${carsCollection.bugatti[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.bugatti[i].year}`;
            flexrowp.innerText = ` ${carsCollection.bugatti[i].model}`;
            image.src=`${carsCollection.bugatti[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button5 =document.querySelector('.Porsche')
button5.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Porsche ${carsCollection.porsche[i].name}`;
            para.innerText = ` ${carsCollection.porsche[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.porsche[i].year}`;
            flexrowp.innerText = ` ${carsCollection.porsche[i].model}`;
            image.src=`${carsCollection.porsche[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);

    }

})

const button6 =document.querySelector('.RollsRoyce')
button6.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `RollsRoyce ${carsCollection.rollsroyce[i].name}`;
            para.innerText = ` ${carsCollection.rollsroyce[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.rollsroyce[i].year}`;
            flexrowp.innerText = ` ${carsCollection.rollsroyce[i].model}`;
            image.src=`${carsCollection.rollsroyce[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);

    }

})

const button7 =document.querySelector('.koenigsegg')
button7.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Koenigsegg ${carsCollection.koenigsegg[i].name}`;
            para.innerText = ` ${carsCollection.koenigsegg[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.koenigsegg[i].year}`;
            flexrowp.innerText = ` ${carsCollection.koenigsegg[i].model}`;
            image.src=`${carsCollection.koenigsegg[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button8 =document.querySelector('.Aston_Martin')
button8.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Aston Martin ${carsCollection.astonmartin[i].name}`;
            para.innerText = ` ${carsCollection.astonmartin[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.astonmartin[i].year}`;
            flexrowp.innerText = ` ${carsCollection.astonmartin[i].model}`;
            image.src=`${carsCollection.astonmartin[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);

    }

})

const button9 =document.querySelector('.ferrari')
button9.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Ferrari ${carsCollection.ferrari[i].name}`;
            para.innerText = ` ${carsCollection.ferrari[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.ferrari[i].year}`;
            flexrowp.innerText = ` ${carsCollection.ferrari[i].model}`;
            image.src=`${carsCollection.ferrari[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button10 =document.querySelector('.lamborghini')
button10.addEventListener('click',function (){
    caro.innerHTML = '';
    


    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Lamborghini ${carsCollection.lamborghini[i].name}`;
            para.innerText = ` ${carsCollection.lamborghini[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.lamborghini[i].year}`;
            flexrowp.innerText = ` ${carsCollection.lamborghini[i].model}`;
            image.src=`${carsCollection.lamborghini[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button11 =document.querySelector('.ford')
button11.addEventListener('click',function (){
    caro.innerHTML = '';
    


    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            newh3.innerText = `Ford ${carsCollection.ford[i].name}`;
            para.innerText = ` ${carsCollection.ford[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.ford[i].year}`;
            flexrowp.innerText = ` ${carsCollection.ford[i].model}`;
            image.src=`${carsCollection.ford[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})

const button12 =document.querySelector('.special_cars')
button12.addEventListener('click',function (){
    caro.innerHTML = '';
    

    for(let i =0;i<=5;i++){
        const card=document.createElement('div')
        card.classList.add('card-container')
        const newh3 = document.createElement('h2');
        newh3.classList.add('card-h2')
        const para = document.createElement('p');
        para.classList.add('card-para')
        
        const flexrow = document.createElement('div');
        flexrow.classList.add('flex-row')
        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase')
        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left')


   
        const ancor=document.createElement('a')
        ancor.classList.add('hero-image-container')
        const image = document.createElement('img');
        image.classList.add('hero-image')
       
            para.innerText = ` ${carsCollection.special_cars[i].description}`;
            flexrowh2.innerText = ` ${carsCollection.special_cars[i].year}`;
            flexrowp.innerText = ` ${carsCollection.special_cars[i].model}`;
            image.src=`${carsCollection.special_cars[i].img}`

            card.appendChild(newh3);
            ancor.appendChild(image);
            card.appendChild(ancor);

            card.appendChild(para);
            flexrow.appendChild(flexrowh2);
            flexrow.appendChild(flexrowp);
            card.appendChild(flexrow);
            caro.appendChild(card);
          

    }

})






////search*********************
const form = document.querySelector("#searchform");
const searchCards = document.querySelector(".searchCards");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let searchValue = form.elements.query.value.toLowerCase();
    searchCards.innerHTML = '';

    const numCardsPerRow = 3;
    const numResults = Math.min(6, carsCollection[searchValue].length); // Limiting to 6 results

    for (let i = 0; i < numResults; i++) {
        if (i % numCardsPerRow === 0) {
            var row = document.createElement('div');
            row.classList.add('flex-row');
            searchCards.appendChild(row);
        }

        const card = document.createElement('div');
        card.classList.add('card-container');

        const newh3 = document.createElement('h3');
        newh3.classList.add('card-h2');
        newh3.innerText = carsCollection[searchValue][i].name;

        const para = document.createElement('p');
        para.classList.add('card-para');
        para.innerText = carsCollection[searchValue][i].description;

        const flexrowh2 = document.createElement('h2');
        flexrowh2.classList.add('coinbase');
        flexrowh2.innerText = carsCollection[searchValue][i].year;

        const flexrowp = document.createElement('p');
        flexrowp.classList.add('time-left');
        flexrowp.innerText = carsCollection[searchValue][i].model;

        const ancor = document.createElement('a');
        ancor.classList.add('hero-image-container');

        const image = document.createElement('img');
        image.classList.add('hero-image');
        image.src = carsCollection[searchValue][i].img;

        card.appendChild(newh3);
        card.appendChild(ancor);
        ancor.appendChild(image);
        card.appendChild(para);
        card.appendChild(flexrowh2);
        card.appendChild(flexrowp);

        row.appendChild(card);
    }
});
