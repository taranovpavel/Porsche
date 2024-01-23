const tabContents = document.querySelectorAll(".models_inner_right_element")
const tabItems = document.querySelectorAll(".models_inner_left_element")
const tabsParent = document.querySelector(".models_inner_left_elements")
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
let i = 0
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