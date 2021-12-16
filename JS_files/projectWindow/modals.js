
function modals() {
    
    const engineerButton = document.querySelector('.popup_engineer_btn');
    const engineerModal = document.querySelector('.popup_engineer');
    const engineerPopupClose = engineerModal.querySelector('.popup_close');
    const phoneLink = document.querySelectorAll('.phone_link');
    const popupModal = document.querySelector('.popup');
    const popupClose = popupModal.querySelector('.popup_close');
    const forms = document.querySelectorAll('form');
    const calcButton = document.querySelectorAll('.glazing_price_btn');
    const popupCalc = document.querySelector('.popup_calc');
    const popupCalcClose = popupCalc.querySelector('.popup_calc_close');
    const icons = document.querySelector('.balcon_icons');
    const spanIcons = document.querySelectorAll('.balcon_icons_img');
    const bigImgBlock = document.querySelector('.big_img');
    const bigImg = bigImgBlock.querySelectorAll('img');
    const inputWidth = document.querySelector('#width');
    const inputHeight = document.querySelector('#height');
    const popupCalcContent = document.querySelector('.popup_calc_content');
    const popupCalcButton = popupCalcContent.querySelector('.popup_calc_button');
    const popupCalcProfile = document.querySelector('.popup_calc_profile');
    const popupCalcProfileClose = popupCalcProfile.querySelector('.popup_calc_profile_close');
    const popupCalcProfileButton = popupCalcProfile.querySelector('.popup_calc_profile_button');
    const popupCalcEnd = document.querySelector('.popup_calc_end');
    const popupCalcEndClose = popupCalcEnd.querySelector('.popup_calc_end_close');
    const popupCalcEndButton = popupCalcEnd.querySelector('.btn-block');
    const popupCalcEndInputs = popupCalcEnd.querySelectorAll('input');
    const popupCalcEndForm = popupCalcEnd.querySelector('form');
    const selectViewType = document.querySelector('#view_type');
    const checkBox = document.querySelectorAll('.checkbox');
    
    forms.forEach(item => {
        item.id = 1;
    })
    popupCalcEndForm.id = 2;
    
    const message = {
        Loading: "Идет отправка данных...",
        Success: "Данные отправлены!",
        Error: "Ошибка",
        ValidationPhone: "Введите цифры",
        ValidationName: "Введите буквы"
    }
    
    let calcData = {
        'type': 'type 1'
    }

    
    const timeoutPopup = setTimeout(autoOpen, 6000)
    
    function autoOpen() {
        popupModal.style.display = 'block'
        document.body.style.overflow = 'hidden';
    }
    
    
    function postData(form) {
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                form.append(statusMessage)
                statusMessage.textContent = message.Loading;
    
    
                const request = new XMLHttpRequest();
                request.open('POST', 'assets/server.php');
    
                request.setRequestHeader('Content-type', 'application/json')
    
                const formData = new FormData(form);
    
                const formDataObj = {};
                formData.forEach((value, key) => {
                    formDataObj[key] = value;
                })
    
                const formDataObjJson = JSON.stringify(formDataObj)
    
                request.send(formDataObjJson)
    
                request.addEventListener('load', () => {
                    if (request.status == 200) {
                        statusMessage.textContent = message.Success;
                    } else  {
                        statusMessage.textContent = message.Error;
                    }
                    setTimeout(() => {
                        form.reset();
                        statusMessage.remove();
                    }, 3000)
                })
    
        })
    }
    
    function createPopupCalc() {
    
        spanIcons.forEach((item, i) => {
            const img = item.querySelector('img');
            img.id = `type ${i+1}`
        })
    
        checkBox.forEach((box, i) => {
            box.setAttribute("type", "radio");
            if (i > 0) {
                box.id = 'warm'
            } else {
                box.id = 'cold'
            }
            box.addEventListener('change', (e)=> {
                if (e.target.id == 'cold') {
                    calcData['profile'] = e.target.id
                } else if (e.target.id == 'warm') {
                    calcData['profile'] = e.target.id
                }
            })
        })
    
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        popupCalcContent.append(statusMessage)
    
        validationNumbers(inputHeight, statusMessage) 
        validationNumbers(inputWidth, statusMessage)
    
        popupCalcButton.addEventListener('click', () => {
            if (inputHeight.value / 2 && inputWidth.value / 2) {
                popupCalcProfile.style.display = 'block'
                popupCalc.style.display = 'none'
                calcData['width'] = inputWidth.value;
                calcData['height'] = inputHeight.value;
            } else {
                if (inputHeight.value == false && inputWidth.value == false) {
                    inputHeight.style.border = "1px solid red";
                    inputWidth.style.border = "1px solid red";
                    statusMessage.textContent = message.ValidationPhone;
                } else if (inputHeight.value == false) {
                    inputHeight.style.border = "1px solid red";
                    statusMessage.textContent = message.ValidationPhone;
                } else if (inputWidth.value == false) {
                    inputWidth.style.border = "1px solid red";
                    statusMessage.textContent = message.ValidationPhone;
                }
            }
        })
        
        spanIcons.forEach((item, i) => {
            if (item.classList.contains('do_image_more')) {
                bigImg[i].classList.add('active');
                bigImg[i].style.display = 'block';
                bigImg[i].style.margin = '0 auto';
            }
        })
        
        icons.addEventListener('click', (e) => {
            spanIcons.forEach((span, i) => {
                const imgIcon = span.querySelector('img');
        
                if (e.target == imgIcon) {
                    calcData['type'] = e.target.id
                    spanIcons.forEach(span => {
                        if (span.classList.contains('do_image_more')) {
                            span.classList.remove('do_image_more')
                        }
                    })
        
                    bigImg.forEach(img => {
                        if (img.classList.contains('active')) {
                            img.classList.remove('active');
                            img.style.display = 'none';
                        }
                    })
                    span.classList.add('do_image_more')
                    bigImg[i].classList.add('active');
                    bigImg[i].style.display = 'block';
                    bigImg[i].style.margin = '0 auto';
                }
            })
        })
    
        closePopup(popupCalc, popupCalcClose)
    
        selectViewType.addEventListener('change', () => {
            calcData['viewType'] = selectViewType.value
            console.log(calcData)
        })
    
        popupCalcEndButton.addEventListener('click', (e) => {
            e.preventDefault();
    
            popupCalcEndInputs.forEach(item => {
                if (item.name == "user_name") {
                    calcData[`${item.name}`] = item.value
                } else {
                    calcData[`${item.name}`] = item.value
                }
            })
            
            if (popupCalcEndInputs[0].value == false && popupCalcEndInputs[1].value == false) {
                popupCalcEndInputs[0].style.border = "1px solid red";
                popupCalcEndInputs[1].style.border = "1px solid red";
                statusMessage.textContent = message.ValidationPhone;
            } else if (popupCalcEndInputs[0].value == false) {
                popupCalcEndInputs[0].style.border = "1px solid red";
                statusMessage.textContent = message.ValidationPhone;
            } else if (popupCalcEndInputs[1].value == false) {
                popupCalcEndInputs[1].style.border = "1px solid red";
                statusMessage.textContent = message.ValidationPhone;
            } else {

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                popupCalcEndForm.append(statusMessage)
                statusMessage.textContent = message.Loading;
        
        
                const request = new XMLHttpRequest();
                request.open('POST', 'assets/server.php');
        
                request.setRequestHeader('Content-type', 'application/json')
        
                const formDataObjJson = JSON.stringify(calcData)
        
                request.send(formDataObjJson)
        
                request.addEventListener('load', () => {
                    if (request.status == 200) {
                        statusMessage.textContent = message.Success;
                    } else  {
                        statusMessage.textContent = message.Error;
                    }
                    setTimeout(() => {
                        popupCalcEndForm.reset();
                        statusMessage.remove();
                    }, 3000)
                })
            }  
        })
    
    }
    
    
    function scroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();

        return scrollWidth
    }
    
    function validation(form) {
    
        const inputs = form.querySelectorAll('input');
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        form.append(statusMessage)
    
        inputs.forEach(item => {
            if (item.name == 'user_phone') {
                validationNumbers(item, statusMessage)
            } else {
                validationWords(item, statusMessage)
            }
        })
    }
    
    
    function validationNumbers(input,status) {
    
        input.addEventListener('input', () => {
            if (input.value / 2 || input.value == '') {
                input.style.border = "1px solid rgb(201, 201, 201)";
                status.textContent = '';
            } else {
                input.style.border = "1px solid red";
                status.textContent = message.ValidationPhone;
            }
        }) 
    
    }
    
    
    function validationWords(input, status) {
    
        input.addEventListener('input', () => {
            if (/\d/.test(input.value) == false || input.value == '') {
                input.style.border = "1px solid rgb(201, 201, 201)";
                status.textContent = '';
            } else {
                input.style.border = "1px solid red";
                status.textContent = message.ValidationName;
            }
        }) 
    
    }
    
    function closePopup(popupBlock, closeButton) {
        
        popupBlock.addEventListener('click', (e) => {
            if (e.target == popupBlock) {
                popupBlock.style.display = "none";
                const input = document.querySelectorAll('input');
                input.forEach(item => {
                    item.value = '';
                })
            }
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        })
    
        closeButton.addEventListener('click', (e) => {
            popupBlock.style.display = "none";
            const input = popupBlock.querySelectorAll('input');
            input.forEach(item => {
                item.value = '';
            })
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = `0px`;
        })
    
    }
    
    function openPopup(button, popupBlock, prev) {
    
        button.addEventListener('click', (e) => {
            e.preventDefault()
            
            popupBlock.style.display = 'block'
            clearTimeout(timeoutPopup)
            try {
                prev.style.display = 'none'
            } catch(e) {
                if (e instanceof TypeError) {}
            }
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll()}px`;
        })
    
    }
    
    forms.forEach(form => {
        if (form.id == 1) {
            postData(form)
        }
        validation(form)
    })
    phoneLink.forEach(item => {
        openPopup(item, popupModal)
    })
    calcButton.forEach(btn => {
        openPopup(btn,popupCalc)
    })
    createPopupCalc()
    
    openPopup(popupCalcProfileButton, popupCalcEnd, popupCalcProfile)
    openPopup(engineerButton, engineerModal)
    
    closePopup(popupModal, popupClose)
    closePopup(popupCalcEnd, popupCalcEndClose)
    closePopup(engineerModal, engineerPopupClose)
    closePopup(popupCalcProfile, popupCalcProfileClose)

}

export default modals;