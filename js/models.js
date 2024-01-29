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
const name = document.querySelector(".name")
const cost = document.querySelector(".cost")
const block = document.querySelector(".block")
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


const converter = async (element, targetElementOne, targetElementTwo, currentValue) =>{
    const response = await fetch("../data/exchangeRates.json")
    const data = await response.json()
    element.oninput = () =>{
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
        if (element.value === "") {
            targetElementOne.value = ""
            targetElementTwo.value = ""
        }
    }
}
converter(input_som,input_usd,input_euro,"som")
converter(input_usd,input_som,input_euro,"usd")
converter(input_euro,input_som,input_usd,"euro")


findPorsche.onclick=()=> {
    if (input_usd.value>=65500) {
        name.style.color = "#DCDCDCFF"
        cost.style.color = "#DCDCDCFF"
        block.style.width = "340px"
    }
    if (input_usd.value>=250000){
        one.style.backgroundImage = "url(../images/image-911-front-gt3rs.webp)"
        two.style.backgroundImage = "url(../images/image-911-side-gt3rs.webp)"
        three.style.backgroundImage = "url(../images/image-911-back-gt3rs.webp)"
        name.textContent = "911 GT3 RS"
        name.style.color = "#111"
        cost.textContent = "From $250,000"
        cost.style.color = "#111"
        block.style.backgroundColor = "rgb(233, 202, 26)"
        block.style.width = "430px"
    }else if (input_usd.value>=200000){
        one.style.backgroundImage = "url(../images/image-taycan-front-turbos.webp)"
        two.style.backgroundImage = "url(../images/image-taycan-side-turbos.webp)"
        three.style.backgroundImage = "url(../images/image-taycan-back-turbos.webp)"
        name.textContent = "Taycan Turbo S"
        cost.textContent = "From $200,000"
        block.style.backgroundColor = "rgb(19, 38, 66)"
        block.style.width = "580px"
    }else if (input_usd.value>=165000){
        one.style.backgroundImage = "url(../images/image-911-front-gts.webp)"
        two.style.backgroundImage = "url(../images/image-911-side-gts.webp)"
        three.style.backgroundImage = "url(../images/image-911-back-gts.webp)"
        name.textContent = "911 Carrera 4 GTS"
        cost.textContent = "From $165,000"
        block.style.backgroundColor = "rgb(34, 68, 127)"
        block.style.width = "660px"
    }else if (input_usd.value>=130000){
        one.style.backgroundImage = "url(../images/image-911-front-t.webp)"
        two.style.backgroundImage = "url(../images/image-911-side-t.webp)"
        three.style.backgroundImage = "url(../images/image-911-back-t.webp)"
        name.textContent = "911 Carrera T"
        cost.textContent = "From $130,000"
        block.style.width = "500px"
        block.style.backgroundColor = "#a01954"
    }else if (input_usd.value>=115000){
        one.style.backgroundImage = "url(../images/image-911-front.webp)"
        two.style.backgroundImage = "url(../images/image-911-side.webp)"
        three.style.backgroundImage = "url(../images/image-911-back.webp)"
        name.textContent = "911 Carrera"
        cost.textContent = "From $115,000"
        block.style.backgroundColor = "rgb(34, 34, 36)"
        block.style.width = "420px"
    }else if (input_usd.value>=110000){
        one.style.backgroundImage = "url(../images/image-panamera-front-4s.webp)"
        two.style.backgroundImage = "url(../images/image-panamera-side-4s.webp)"
        three.style.backgroundImage = "url(../images/image-panamera_back_4s.webp)"
        name.textContent = "Panamera 4S"
        cost.textContent = "From $110,000"
        block.style.backgroundColor = "rgb(45, 13, 22)"
        block.style.width = "500px"
    }else if (input_usd.value>=92000){
        one.style.backgroundImage = "url(../images/image-taycan-front.webp)"
        two.style.backgroundImage = "url(../images/image-taycan-side.webp)"
        three.style.backgroundImage = "url(../images/image-taycan-back.webp)"
        name.textContent = "Taycan"
        cost.textContent = "From $92,000"
        block.style.backgroundColor = "rgb(82,133,155)"
    }else if (input_usd.value>=81000){
        one.style.backgroundImage = "url(../images/image-cayenne-front.webp)"
        two.style.backgroundImage = "url(../images/image-cayenne-side.webp)"
        three.style.backgroundImage = "url(../images/image-cayenne-back.webp)"
        name.textContent = "Cayenne"
        cost.textContent = "From $81,000"
        block.style.backgroundColor = "rgb(0, 63, 85)"
    }else if (input_usd.value>=70000){
        one.style.backgroundImage = "url(../images/image-718-front.webp)"
        two.style.backgroundImage = "url(../images/image-718-side.webp)"
        three.style.backgroundImage = "url(../images/image-718-back.webp)"
        name.textContent = "718 Cayman"
        cost.textContent = "From $70,000"
        block.style.backgroundColor = "rgb(34, 34, 36)"
        block.style.width = "430px"
    }else if (input_usd.value>=65500) {
        one.style.backgroundImage = "url(../images/image-macan-front.webp)"
        two.style.backgroundImage = "url(../images/image-macan-side.webp)"
        three.style.backgroundImage = "url(../images/image-macan-back.webp)"
        name.textContent = "Macan"
        cost.textContent = "From $65,500"
        block.style.backgroundColor = "#80000e"
    }
}