export default class MenuMobile {
    constructor(toggle,menu){
        this.toggle = document.querySelector(toggle);
        this.menu = document.querySelector(menu);
        this.activeClass="active";
    }


    activeMenuMobile(){
        this.menu.classList.toggle(this.activeClass);
    }

    outsideClick(event){
        if(!this.menu.contains(event.target) && !this.toggle.contains(event.target)){
            this.menu.classList.remove(this.activeClass)
        }
    }


    bindEvents(){
        this.activeMenuMobile = this.activeMenuMobile.bind(this);
        this.outsideClick= this.outsideClick.bind(this);
    }


    eventMenu(){
        this.toggle.addEventListener("pointerdown", this.activeMenuMobile)
        window.addEventListener("pointerdown", this.outsideClick)
    }


    start(){
        if(this.menu){
            this.bindEvents()
            this.eventMenu()
        }
    }
}