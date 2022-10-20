let myHeading = document.querySelector('h1')
let myButton = document.querySelector('button')
myHeading.textContent = 'Jensen Ackles'



let myImg = document.getElementsByTagName('img')[0]
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc == 'images\\js1.jpg') {
      myImg.setAttribute('src', 'images\\js2.jpg');
    } else {
      myImg.setAttribute('src', 'images\\js1.jpg');
    }
}

function setUserName(){
    let myName = prompt('Enter your name plz');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName)
        myHeading.textContent = myName + ' love Jensen'
    }
    
}

if(!localStorage.getItem('name')){
    setUserName()
}else{
    let storedName = localStorage.getItem('name')
    myHeading.textContent = storedName + ' love Jensen'
}

myButton.onclick = setUserName