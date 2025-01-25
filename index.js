//them changer
    const theme = document.getElementById('theme-selector')
    const body = document.querySelector('body')
  const Footer  = document.querySelector('footer')
    theme.addEventListener('change' , function(e){
        const selectedTheme = theme.value
        if(selectedTheme === 'dark'){
                   
        body.style.backgroundColor = 'black'
        body.style.color = 'wheat'
        Footer.style.backgroundColor = '#414141'
        }
        else if(selectedTheme === 'white'){
                  body.style.backgroundColor = 'white'
        body.style.color = 'black'
        }
        else if(selectedTheme === 'default'){
        body.style.backgroundColor = '#212121'
        body.style.color = '#fff'
        }
    })

    //navbar
    const bar = document.querySelector('#bar')
    const hide  = document.querySelector('#hide')

    let flag = 0
    bar.addEventListener('click', ()=>{
        if(flag === 0){
    hide.querySelector('ul').style.display = 'block'
    flag = 1;
        } else {
            hide.querySelector('ul').style.display = 'none'
            flag = 0;
        }
        event.stopPropagation()
    })
document.addEventListener('click',()=>{
       hide.querySelector('ul').style.display = 'none'
       flag = 0
})

// Logic
//Login system

const logIn = document.querySelector("#login")
const name  = document.querySelector("#name")
const subt  = document.querySelector("#subt")
const container = document.querySelector('.container')
const welcome = document.querySelector('.welcome')
const continueButton = document.querySelector('.continueButton')
const message  = document.querySelector('.message')
const newAcc = document.querySelector('.newAcc')
const main = document.querySelector('main')
const userShow = document.querySelector('#user-show')
const usernam = document.querySelector('#user-name')
const userHide = document.querySelector('#user-hide')
const close = document.querySelector('#close')

const userNaame = document.querySelector('#user-naame')


userShow.addEventListener('click', function(e){
    userHide.style.display = 'block'
    event.stopPropagation()
    
})
// userShow.addEventListener('mouseover', ()=>{
//     userHide.style.display = 'block'
//     event.stopPropagation()
// })
// userShow.addEventListener('mouseout', ()=>{
//     userHide.style.display = 'none'
//     event.stopPropagation()
// })
// userHide.addEventListener('mouseover', ()=>{
//     userHide.style.display = 'block'
//     event.stopPropagation()
// })
// userHide.addEventListener('mouseout', ()=>{
//     userHide.style.display = 'none'
//     event.stopPropagation()
// })
close.addEventListener('click', function(ec){
    userHide.style.display = 'none'
    console.log(ec);
    
event.stopPropagation()
 
})
document.addEventListener('click', function(event){
    if(!userHide.contains(event.target) && event.target !== userShow){
    userHide.style.display = 'none'
    }
  })









function checkName(){
   
const isLoggedIn = localStorage.getItem('isLoggedIn')
const userName = localStorage.getItem('userName')


if(isLoggedIn === "true" && userName){

    //if the user is already logged in display the following content
    container.style.display = 'block'
    message.style.display = 'none'
    logIn.style.display = 'none'
usernam.innerHTML = `${userName}`
userNaame.innerHTML = `${userName}`


}else{
 

container.style.display = 'none'
message.style.display = 'none'
subt.addEventListener('click', (e)=>{
    e.preventDefault()
    if(name.value === ''){
        alert('Please Enter your name')
    }else if(name.value != ''){

        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userName", name.value)

        message.style.display = 'flex'
        welcome.innerHTML = `Welcome ${name.value}`
        logIn.replaceWith(message)

usernam.innerHTML = `${name.value}`
userNaame.innerHTML = `${name.value}`
        continueButton.addEventListener('click', ()=>{
            displayWeb()
        })
    
    }
})
}
}

checkName()

function displayWeb(){
    message.style.display = 'none'
    container.style.display = 'block'
}

// user.addEventListener('click', ()=>{

// })

newAcc.addEventListener('click', ()=>{
    localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  
  location.reload(); // Reload the page to show the login screen
 
})

