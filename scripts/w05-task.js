/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img)
        templesElement.appendChild(article);
    });
    console.log(templesElement)
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        templeList.push(await response.json());
    };
};

/* reset Function */

function reset() {
    templesElement.remove();
};

/* sortBy Function */

function sortBy(temples) {
    reset();
    let filter = document.querySelector('#sortBy');
    switch(filter.value) {
        case 'utah':
            let utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            // console.log(utahTemples);
            break;
        case 'notutah':
            let notUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(notUtahTemples);
            // console.log(notUtahTemples);
            break;
        case 'dedicated':
            break;
        case 'all':
            displayTemples(temples);
            break;
    };
};

getTemples();
console.log(templeList[0]);

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList[0]) });