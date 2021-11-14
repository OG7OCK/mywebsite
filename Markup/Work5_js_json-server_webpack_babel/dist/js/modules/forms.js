function forms() {

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading...',
        success: 'Ty, will contact',
        failure: 'Failure'
    }
    forms.forEach(item => {
        bindPostData(item)
    })

    async function postData (url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);


            const formData = new FormData(form);


            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data)
                statusMessage.textContent = message.success;
            })
            .catch(() => {
                statusMessage.textContent = message.failure
            })
            .finally(() => {
                setTimeout(function () {
                    form.reset();
                    statusMessage.remove();
                }, 2000)
            })
        })
    }
}

export default forms;