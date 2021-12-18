window.addEventListener('DOMContentLoaded', function(){
    const menubtn = document.querySelector('.menu_btn');
    const nav = document.querySelector('nav');
    const navs = document.querySelectorAll('nav a');

    menubtn.addEventListener('click', ()=>{
        menubtn.classList.toggle('active');
        nav.classList.toggle('active');
    })
    navs.forEach(item =>{
        item.addEventListener('click', ()=>{
            menubtn.classList.remove('active');
            nav.classList.remove('active')
        })
    })
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })
    const scrolltop = document.querySelector('.scrolltop');
    window.addEventListener('scroll', ()=>{
        scrolltop.classList.toggle('active', window.scrollY > 500)
    })
    scrolltop.addEventListener('click', ()=>{
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
    window.addEventListener('scroll', ()=>{
        let reveals = document.querySelectorAll('.reveal');
        for(let i = 0; i < reveals.length; i++){
            let windowheight = window.innerHeight;
            let revealtop = reveals[i].getBoundingClientRect().top
            let revelpoint = 50
            if(revealtop < windowheight - revelpoint){
                reveals.classList.add('active');
            }
        }
    })

})