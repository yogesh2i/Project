let activity_nav = document.getElementById('activity-nav')
let activity_menu = document.getElementById('activity-menu')
let text = document.getElementsByClassName('card-text')
let log = document.getElementById('log')
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
    alert('LogIn successful')
})






