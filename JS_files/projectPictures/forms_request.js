function formRequest() {
    // Request

const message = {

    Failure: 'Ошибка',
    Success: 'Данные отправлены',
    Loading: 'Идет загрузка...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'

}

const forms = document.querySelectorAll('form');
forms.forEach(item => {
    postData(item)
})

const uploadForms = document.getElementsByName('upload');

uploadForms.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value) {
            item.previousElementSibling.textContent = `${item.files[0].name}`;
        }
    })
})

function clearUploadForms(inputsNames) {
    inputsNames.forEach(item => {
        item.previousElementSibling.textContent = 'Файл не выбран';
    })
}

function postData(form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault()


        let inputs = form.querySelectorAll('input');

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.parentNode.appendChild(statusMessage);

        setTimeout(() => {
            form.style.display = 'none';
        }, 400)

        let statusImg = document.createElement('img');
        statusImg.setAttribute('src', message.spinner)
        statusImg.classList.add('animated', 'fadeIn')
        statusMessage.appendChild(statusImg)

        let textMessage = document.createElement('div');
        textMessage.textContent = message.Loading
        statusMessage.appendChild(textMessage)

        const formData = new FormData(form)

        fetch('assets/server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            body: formData
        })
        .then(() => {
            console.log(formData)
            setTimeout(() => {
                statusImg.setAttribute('src', message.ok)
                statusMessage.textContent = message.Success
                statusMessage.appendChild(statusImg)
            },400)
            setTimeout(() => {
                statusMessage.remove()
            },1500)
        })
        .catch(() => {
            setTimeout(() => {
                statusImg.setAttribute('src', message.fail);
                statusMessage.textContent = message.Failure
                statusMessage.appendChild(statusImg)
            },400)
        })
        .finally(() => {
            setTimeout(() => {
                form.reset()
                form.style.display = 'block';
                clearUploadForms(uploadForms)
            }, 1500)
        })
    })

}
}

export default formRequest;