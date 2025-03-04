export default class LinkSmooth {
    constructor(links){
        this.links = document.querySelectorAll(links)
        this.handleScrollSmooth= this.handleScrollSmooth.bind(this);
    }

    handleScrollSmooth(event){
        event.preventDefault()
       const href = event.currentTarget.getAttribute("href")
       const section = document.querySelector(href)
       section.scrollIntoView({ behavior: "smooth", block: "start"});
    }


    eventSmooth(){
        this.links.forEach((item) => {
            item.addEventListener("click", this.handleScrollSmooth)
        })
    }

    start(){
        if(this.links.length){
            this.eventSmooth()
        }
    }


}