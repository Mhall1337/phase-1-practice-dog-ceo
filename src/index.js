console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.querySelector("#breed-dropdown").value


function getDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((dogPics) =>dogPics.message.forEach(dogURL => renderDogs(dogURL)))
    
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((dogs) => {Object.keys(dogs.message).forEach(dog => dogList(dog))
    //section for select breed dropdown
   const result = Object.keys(dogs.message).filter(dogArr => dogArr[0])
        if(result === dropdown){
            return result
        }
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
 