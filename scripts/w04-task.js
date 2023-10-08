/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Weston Ford",
    photo: "/images/weston_ford.jpg",
    favoriteFoods: [
        'pizza',
        'lasagna',
        'barbecue'
    ],
    hobbies: [
        'video games',
        'anime',
        'light novels',
        'DnD'
    ],
    placesLived: [

    ],

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Redmond, WA',
        length: '19 years'
    },
    {
        place: 'Rexburg, ID',
        length: '~2.5 years'
    },
    {
        place: 'Southlake, TX',
        length: '~1.5 years'
    }
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    // let dl = document.createElement('dl')
    // document.querySelector('#placesLived').appendChild(dl)
  });
