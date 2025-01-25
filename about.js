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