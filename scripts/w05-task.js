/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
var templesList = [];

/* async displayTemples Function */

const displayTemples = () => {
    templesList.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3, img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        let temples = await response.json();
        templesList.push(temples);
    }
}

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
