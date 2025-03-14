export default class FormSubmit {
     constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form)
        this.formButton = document.querySelector(settings.button)
        if(this.form) {
            this.url = this.form.getAttribute("action")
        }
        this.sendForm = this.sendForm.bind(this);
     }

     displaySuccess(){
        this.form.innerHTML = this.settings.success
     }

     displayError(){
        this.form.innerHTML = this.settings.error
     }

     getFormObject(){
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value
        })
        return formObject
     }

     onSubmission(event){
        event.preventDefault()
        event.target.disabled = true 
        event.target.innerText = "Enviando..."
     }

     async sendForm(event){
        try{
          this.onSubmission(event)
          await fetch(this.url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(this.getFormObject()),
          });
          this.displaySuccess()
        }catch(error){
          this.displayError();
          console.log(error)
        }
     }

     eventClick(){
        this.formButton.addEventListener("click", this.sendForm);
     }

     init(){
        if(this.form){
            this.eventClick()
        }
        return this
     }


}