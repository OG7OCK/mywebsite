export default class Validation {
    constructor(name) {
        this.inputs = document.querySelectorAll(name);
    }

    init() {
        this.inputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if(e.key.match(/[^a-z 0-9 @\.]/ig)) {
                    e.preventDefault()
                }
            })
        })
    }
}