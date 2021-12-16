import axios from "axios";

export default class Request {

    constructor({form = null, adress = null}={}) {
        this.form = document.querySelector(form);
        this.adress = adress;
        try {
            this.btn = this.form.querySelector('button');
        } catch (error) {}

    }

    init() {
        try {
        this.form.setAttribute('method', 'post');
        this.form.setAttribute('enctype', 'multipart/form-data');
        this.btn.setAttribute('type', 'submit');

        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const data = new FormData(this.form)

            axios.post('assets/question.php', data)
            .then(() =>{
                if (this.btn.nextElementSibling) {
                    this.btn.nextElementSibling.textContent = 'Data has been sent';
                } else {
                    this.btn.textContent = 'Data has been sent';
                }
                
            })
            .catch(() => {
                if (this.btn.nextElementSibling) {
                    this.btn.nextElementSibling.textContent = 'Error';
                } else {
                    this.btn.textContent = 'Error';
                }
                
            })
            .finally(
                setTimeout(() => {
                    this.form.reset()
                    if (this.btn.nextElementSibling) {
                        this.btn.nextElementSibling.innerHTML = 'By clicking «Send» I am agreed<br>with Privacy Policy.';
                    } else {
                        this.btn.textContent = 'Send';
                    }
                }, 3000)
            )
        })
        } catch (error) {}
        
    }

}




