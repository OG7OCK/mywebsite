function calculator() {

    const result = document.querySelector('.calculating__result span');
    const genderBlock = document.querySelector('#gender');
    const genderChildBlocks = genderBlock.querySelectorAll('.calculating__choose-item');
    const activityBlock = document.querySelector('#activity');
    const activityChildBlocks = activityBlock.querySelectorAll('.calculating__choose-item');
    const attrBlock = document.querySelector('#attr');
    const attrChildBlocks = attrBlock.querySelectorAll('input');
    let weight;
    let height;
    let age;
    let gender;
    let coef;
        
    checkLocalStorage();
    postResult(weight, height, age, coef, gender);

    function checkLocalStorage() {
        if (localStorage.getItem('gender')) {
            gender = localStorage.getItem('gender')
            document.querySelector(`#${localStorage.getItem('gender')}`).classList.add('calculating__choose-item_active');
        } else {
            gender = "female"
            genderBlock.querySelector('#female').classList.add('calculating__choose-item_active');
            localStorage.setItem('gender', 'female')
        }


        if (localStorage.getItem('coef')) {
            coef = localStorage.getItem('coef')
            document.querySelector(`[data-coef='${localStorage.getItem('coef')}']`).classList.add('calculating__choose-item_active');
        } else {
            coef = 1.375
            activityBlock.querySelector('[data-coef="1.375"]').classList.add('calculating__choose-item_active');
            localStorage.setItem('coef', 1.375)
        }
    }

    genderBlock.addEventListener('click', (e) => {
        gender = e.target.id;
        localStorage.setItem('gender', e.target.id)
        genderChildBlocks.forEach(item => {
            if (e.target.classList.contains('calculating__choose-item')) {
                if (item.classList.contains('calculating__choose-item_active')) {
                    item.classList.remove('calculating__choose-item_active')
                }
                e.target.classList.add('calculating__choose-item_active')
            }
        })
        postResult(weight, height, age, coef, gender);
    })

    activityBlock.addEventListener('click', (e) => {
        coef = e.target.getAttribute('data-coef');
        localStorage.setItem('coef', e.target.getAttribute('data-coef'))
        activityChildBlocks.forEach(item => {
            if (e.target.classList.contains('calculating__choose-item')) {
                if (item.classList.contains('calculating__choose-item_active')) {
                    item.classList.remove('calculating__choose-item_active')
                }
                e.target.classList.add('calculating__choose-item_active')
            }
        })
        postResult(weight, height, age, coef, gender);
    })

    attrChildBlocks.forEach(item => {
        item.addEventListener('input', () => {
            if(item.value.match(/\D/ig)) {
                item.style.border = '1px solid red';
            } else {
                item.style.border = 'none';
            }

            if (item.id == "weight") {
                weight = +item.value
            } else if (item.id == "height") {
                height = +item.value
            } else if (item.id == "age") {
                age = +item.value
            }
            postResult(weight, height, age, coef, gender);
        })
    })

    function postResult(weight, height, age, coef, gender) {
        if (weight && height && age && coef && gender) {
            if (gender == 'male') {
                result.innerHTML = `
                ${Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * coef)}
                `
            } else {
                result.innerHTML = `
                ${Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * coef)}
                `
            }
        } else {
            result.innerHTML = 0
        }
    }
}

export default calculator;