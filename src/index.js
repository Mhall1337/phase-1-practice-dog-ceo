console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.querySelector("#breed-dropdown").value
let dogArray;

function getDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((dogPics) =>dogPics.message.forEach(dogURL => renderDogs(dogURL)))
    
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((dogs) => {Object.keys(dogs.message).forEach(dog => dogList(dog))  
    }) 
}
getDogImages()

//function that renders dog images to DOM
function renderDogs(dog){
    let img = document.createElement('img')
    img.setAttribute('src',`${dog}`)
    document.querySelector("#dog-image-container").appendChild(img)
}


//function that add the list of dogs
function dogList(dogs){
    const li = document.createElement('li')
    document.querySelector("#dog-breeds").appendChild(li).textContent = `${dogs}`
    li.addEventListener('click', (e) => {
        li.style.color = 'red'
    })
}
dogList()
 
//new section for select breed dropdown
document.querySelector("#breed-dropdown").addEventListener('change', (e) =>{
 const dogFilter = dogArray.filter(dog => {
       return dog[0] === e.target.value
    })
    document.querySelector("#dog-breeds").innerText = ''
    dogFilter.forEach(dog => dogList(dog))
    
})