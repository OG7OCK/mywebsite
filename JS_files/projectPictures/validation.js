function validation() {
        // validation
    function validation (selector) {
        const txtInputs = document.querySelectorAll(selector)

        txtInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault()
                }
            })
        })
    }
    validation('[name="name"]');
    validation('[name="message"]');
}

export default validation;