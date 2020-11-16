let menuBtn = document.querySelector(".header-top__btn")
let list = document.querySelector(".header-top__menu")
let linkMenu=document.querySelectorAll(".link-menu")
let section=document.querySelectorAll(".section")
let menu = document.querySelector(".header")
let overlay = document.querySelectorAll(".portfolio-item__img-overlay")
let modal =document.querySelector(".portfolio-modal")
let body = document.body
let closeModal=document.querySelector(".close-modal")
let closeWd=document.querySelector(".close-windows")
let showmenu =()=>{
    menuBtn.addEventListener("click",()=>{
        list.classList.toggle("show")
    })
}
showmenu()
let scrollMenu =()=>{
    let scrolling = menu.getBoundingClientRect().top
    if(scrollY>scrolling+150){
        menu.classList.add("change")
    }
    else{
        menu.classList.remove("change")
    }
}
window.onscroll=function(){scrollMenu()}
let linkActive =()=>{
    for (let i = 0; i < linkMenu.length; i++) {
        let linkMenus = linkMenu[i];
        let position = section[i].offsetTop
        
        if (scrollY>position-66) {
            linkMenu.forEach(linkMenus => {
                linkMenus.classList.remove("link-active")
            });
            linkMenus.classList.add("link-active")
        } else {
            linkMenus.classList.remove("link-active")
        }
    }
}
let linkOnscroll = ()=>{
    for (let i = 0; i < linkMenu.length; i++) {
        let linkMenus = linkMenu[i];
        let position = section[i].offsetTop
        linkMenus.addEventListener("click",(e)=>{
            console.log("ok");
            e.preventDefault()
            list.classList.remove("show")
            window.scrollTo(0,position-66)
        })
    }
}
linkOnscroll()
window.addEventListener('scroll',linkActive)
let galerry = [{
    src :"asset/image/01-full.jpg",
    name :"Client: Threads",
    title:"Category: Illustration",
    
},
{
    src :"asset/image/02-full.jpg",
    name :"Client: Explore",
    title:"Category: Graphic Design",
    
},
{
    src :"asset/image/03-full.jpg",
    name :"Client: Finish",
    title:"Category: Identity",
    
},
{
    src :"asset/image/04-full.jpg",
    name :"Client: Lines",
    title:"Category: Branding",
    
},
{
    src :"asset/image/05-full.jpg",
    name :"Client: Southwest",
    title:"Category: Website Design",
    
},
{
    src :"asset/image/06-full.jpg",
    name :"Client: Window",
    title:"Category: Photography",
    
},
]
let showModal = () =>{
    for (let i = 0; i < overlay.length; i++) {
        let overlays = overlay[i];
        overlays.addEventListener("click",()=>{
            let modalName=document.querySelector(".modal-name")
            let modalCategory=document.querySelector(".modal-category")
            let modalImg=document.querySelector(".modal-img")
            modal.classList.add("show")
            body.classList.add("body-hidden")
            modalName.innerText=galerry[i].name
            modalImg.src=galerry[i].src
            modalCategory.innerText=galerry[i].title
        })
    }

}
showModal()
closeModal.addEventListener("click",()=>{
    modal.classList.remove("show")
    body.classList.remove("body-hidden")
})
closeWd.addEventListener("click",()=>{
    modal.classList.remove("show")
    body.classList.remove("body-hidden")
})