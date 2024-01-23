const tabContents = document.querySelectorAll(".models_inner_right_element")
const tabItems = document.querySelectorAll(".models_inner_left_element")
const tabsParent = document.querySelector(".models_inner_left_elements")
const input_som = document.querySelector(".soms")
const input_usd = document.querySelector(".dollars")
const input_euro = document.querySelector(".euros")
const findPorsche = document.querySelector(".cars_inner_bottom_button")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
let i = 0
const hideTabContent = () =>{
    tabContents.forEach((tabContent) =>{
        tabContent.style.display = "none"
    })
    tabItems.forEach((tabItem)=>{
        tabItem.classList.remove("models_inner_left_element_active")
    })
}
const showTabContent = (index = 0) =>{
    tabContents[index].style.display = "block"
    tabItems[index].classList.add("models_inner_left_element_active")
}
const autoContent = () =>{
    if (i < 6){
        showTabContent(i)
        i++
        setTimeout(autoContent,6000)
        setTimeout(hideTabContent,5999)
    }else{
        i = 0
        setTimeout(autoContent,1)
    }
}
hideTabContent()
autoContent()
tabsParent.onclick = (event) =>{
    if (event.target.classList.contains("models_inner_left_element")) {
        tabItems.forEach((tabItem,tabIndex) =>{
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
const converter = (element, targetElementOne, targetElementTwo, currentValue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/exchangeRates.json")
        request.setRequestHeader("Content-type", "application.json")
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            switch (currentValue) {
                case "som":
                    targetElementOne.value = (element.value / data.usd).toFixed(2)
                    targetElementTwo.value = (element.value / data.euro).toFixed(2)
                    break
                case "usd":
                    targetElementOne.value = (element.value * data.usd).toFixed(2)
                    targetElementTwo.value = (targetElementOne.value / data.euro).toFixed(2)
                    break
                case "euro":
                    targetElementOne.value = (element.value * data.euro).toFixed(2)
                    targetElementTwo.value = (targetElementOne.value / data.usd).toFixed(2)
                    break
                default:
                    break
            }
            if (element.value === ""){
                targetElementOne.value = ""
                targetElementTwo.value = ""
            }
        })
    }
}
converter(input_som,input_usd,input_euro,"som")
converter(input_usd,input_som,input_euro,"usd")
converter(input_euro,input_som,input_usd,"euro")
findPorsche.onclick=()=> {
    if (input_usd.value>=250000){
        one.style.backgroundImage = "url(../images/image-911-front-gt3rs.webp)"
        two.style.backgroundImage = "url(../images/image-911-side-gt3rs.webp)"
        three.style.backgroundImage = "url(../images/image-911-back-gt3rs.webp)"
    }else if (input_usd.value>=200000){
        one.style.backgroundImage = "url(../images/image-taycan-front-turbos.webp)"
        two.style.backgroundImage = "url(../images/image-taycan-side-turbos.webp)"
        three.style.backgroundImage = "url(../images/image-taycan-back-turbos.webp)"
    }else if (input_usd.value>=81000){
        one.style.backgroundImage = "url(../images/image-718-front.webp)"
        two.style.backgroundImage = "url(../images/image-718-side.webp)"
        three.style.backgroundImage = "url(../images/image-718-back.webp)"
    }else if (input_usd.value>=81000){
        one.style.backgroundImage = "url(../images/image-718-front.webp)"
        two.style.backgroundImage = "url(../images/image-718-side.webp)"
        three.style.backgroundImage = "url(../images/image-718-back.webp)"
    }else if (input_usd.value>=81000){
        one.style.backgroundImage = "url(../images/image-718-front.webp)"
        two.style.backgroundImage = "url(../images/image-718-side.webp)"
        three.style.backgroundImage = "url(../images/image-718-back.webp)"
    }else if (input_usd.value>=81000){
        one.style.backgroundImage = "url(../images/image-718-front.webp)"
        two.style.backgroundImage = "url(../images/image-718-side.webp)"
        three.style.backgroundImage = "url(../images/image-718-back.webp)"
    }else if (input_usd.value>=70000){
        one.style.backgroundImage = "url(../images/image-718-front.webp)"
        two.style.backgroundImage = "url(../images/image-718-side.webp)"
        three.style.backgroundImage = "url(../images/image-718-back.webp)"
    }else if (input_usd.value>=65500) {
        one.style.backgroundImage = "url(../images/image-macan-front.webp)"
        two.style.backgroundImage = "url(../images/image-macan-side.webp)"
        three.style.backgroundImage = "url(../images/image-macan-back.webp)"
    }
}