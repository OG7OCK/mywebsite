function calculator() {
        // Calc 

    const calc = document.querySelector('.calc');
    const calcSelect = calc.querySelectorAll('select');
    const calcInput = calc.querySelector('.promocode');
    const calcPrice = calc.querySelector('.calc-price');
    let size;
    let material;
    let options;
    let promo = 0;

    const priceList = {

        size: {
        '40x50': 50,
        '50x70': 60,
        '70x70': 70,
        '70x100': 80
        },
        material: {
            'Холст из волокна': 90,
            'Льняной холст': 100,
            'Холст из натурального хлопка': 110,
        },
        options: {
            'Покрытие арт-гелем': 120,
            'Экспресс-изготовление': 130,
            'Доставка готовых работ': 140
        },
        promo: 'IWANTPOPART'
    }

    calcSelect.forEach(item  => {
        item.addEventListener('change', () => {
            if (item.id == "size") {
                for (let key in priceList) {
                    if (key == 'size') {
                        for (let key2 in priceList[key]) {
                            if (item.value == key2) {
                                size = priceList[key][key2]
                                postPrice()
                            }
                        }
                    }
                }
            } else if (item.id == "material") {
                for (let key in priceList) {
                    if (key == 'material') {
                        for (let key2 in priceList[key]) {
                            if (item.value == key2) {
                                material = priceList[key][key2]
                                postPrice()
                            }
                        }
                    }
                }
            } else if (item.id == "options") {
                for (let key in priceList) {
                    if (key == 'options') {
                        for (let key2 in priceList[key]) {
                            if (item.value == key2) {
                                options = priceList[key][key2]
                                postPrice()
                            }
                        }
                    }
                }
            }

        })
    })

    calcInput.addEventListener('input', () => {
        if (calcInput.value === 'IWANTPOPART') {
            promo = 0.3;
        } else {
            promo = 0;
        }
        postPrice()
    })

    function postPrice() {

        let price = (size+material+options)-(size+material+options)*promo;

        if (size && material && options) {
            calcPrice.textContent = `${price} у.е.`
        }
    }
}

export default calculator;