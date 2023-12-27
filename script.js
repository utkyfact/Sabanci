let menu = document.getElementById('menu')
let closeMenu = document.getElementById('closeMenu')
let zindex = document.querySelector('.zindex')
let header = document.querySelector('header')

let divs = document.querySelectorAll('.herbiri')

menu.addEventListener('click',()=>{
    zindex.classList.remove('d-none')
    header.classList.add('d-none')
})

zindex.addEventListener('click',(e)=>{
    let alar = zindex.querySelectorAll('a')
    if(!e.composedPath()[0].classList.contains('link-light')){
        zindex.classList.add('d-none')
        header.classList.remove('d-none')
    }
    
})


divs.forEach(div =>{
    div.addEventListener('click',function(){
        let id = this.dataset.target
        let ilgiliLi = document.getElementById(id)
        for (i of this.parentElement.children){
            i.classList.remove('border-active')
        }
        for (i of ilgiliLi.parentElement.children){
            i.style.display = 'none'
        }

        ilgiliLi.style.display = 'block'
        this.classList.add('border-active')
    })
})