let activity_nav = document.getElementById('activity-nav')
let activity_menu = document.getElementById('activity-menu')
let text = document.getElementsByClassName('card-text')
let log = document.getElementById('log')
let input = document.getElementById('email-input')
let pswd = document.getElementById('pswd')
activity_nav.addEventListener('mouseenter',()=>{
   
    activity_nav.classList.add("show")
    activity_menu.classList.add("show")
    activity_menu.setAttribute("data-bs-popper","static")
    
})

activity_nav.addEventListener('mouseleave',()=>{
  
   
    activity_nav.classList.remove("show")
    activity_menu.classList.remove("show")
    activity_menu.removeAttribute("data-bs-popper","static")
   
})
activity_menu.addEventListener('mouseenter',()=>{
    activity_nav.classList.add("show")
    activity_menu.classList.add("show")
    activity_menu.setAttribute("data-bs-popper","static")
   
})
activity_menu.addEventListener('mouseleave',()=>{
    
   
   
    activity_nav.classList.remove("show")
    activity_menu.classList.remove("show")
    activity_menu.removeAttribute("data-bs-popper","static")
   
})
log.addEventListener('click',()=>{
    let str = input.value
    let password = pswd.value
    let reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    let test = reg.test(str)
    let idvalid = false
    let passvalid = false
    if(!test){
        document.getElementById('valid').style.display = 'block';
    }
    else{
        document.getElementById('valid').style.display = 'none';
        idvalid = true
    }
    if(password.length < 3){
        document.getElementById('pass-valid').style.display = 'block';
    }else{
        document.getElementById('pass-valid').style.display = 'none';
        passvalid = true
    }
    if(idvalid && passvalid){
        alert('login successful')
    }
})






