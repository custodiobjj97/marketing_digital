export default class ScrollAnimation{
    constructor(elements) {
        this.elements = document.querySelectorAll(elements);
        this.activeClass="active";
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry)=>{
                if(entry.intersectionRatio){
                    entry.target.classList.add(this.activeClass);
                }
            })
        },{threshold:0.7});

        for(let i =0 ; i< this.elements.length; i++){
            const element = this.elements[i];

            observer.observe(element);
        }
    }

    bindEvents(){
        this.handleScroll = this.handleScroll.bind(this);
    }


    eventScroll(){
        window.addEventListener("scroll", this.handleScroll)
    }


    start(){
        if(this.elements.length){
            this.handleScroll();
            this.eventScroll();
        }
    }


} 