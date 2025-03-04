import LinkSmooth from "./module/linksSmooth.js";
import MenuMobile from "./module/MenuMobile.js";
import ScrollAnimation from "./module/ScrollAniamtion.js";
import FormSubmit from "./module/Contact.js";



const menu = new MenuMobile(".toggle",".list-menu")

menu.start()


const scroll = new ScrollAnimation(".scroll")
scroll.start()

const smooth = new LinkSmooth(".list-menu  a")

smooth.start()

const form  = new FormSubmit({
    form:"[data-form]",
    button:"[data-button]",
    success:"<h1>Mensagem enviada!</h1>",
    error:"<h1>Não foi possivel enviar sua memsagem!</h1>"
})

form.init()