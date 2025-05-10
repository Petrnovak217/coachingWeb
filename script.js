//navigation
let menuBtn = document.querySelector(".menu-btn")
let navBtn = document.querySelector(".menu-btn__burger")
let navigation = document.querySelectorAll(".navigation")
let nav = document.querySelector(".nav")
let navMenu = document.querySelector(".nav-items")
let navItems = document.querySelectorAll(".menu-item")



let mobileNavOpen = false

menuBtn.addEventListener("click",() =>{
    
    if(!mobileNavOpen){
        navBtn.classList.add("open")
        navigation.forEach((item) =>{ item.classList.add("open")})
        nav.classList.add("open")
        navMenu.classList.add("open")
        navItems.forEach((item) =>{ item.classList.add("open")})

        mobileNavOpen=true
    }

    else{
        navBtn.classList.remove("open")
        navigation.forEach((item) =>{ item.classList.remove("open")})
        nav.classList.remove("open")
        navMenu.classList.remove("open")
        navItems.forEach((item)=>{ item.classList.remove("open")})

        mobileNavOpen=false
    }
})

