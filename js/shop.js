const name = document.querySelector(".name")
const price = document.querySelector(".price")
const shopInner = document.querySelector(".shop_inner")

const shopList = async() =>{
    const response = await fetch("../data/cards.json/?_limit=10")
    const data = await response.json()
    data.forEach((card)=>{
        const shopCard = document.createElement("a")
        shopCard.innerHTML = `
             <div class="shop_inner_element shop_inner_element_one">
                 <img class="main" src="${card.img}" alt="${card.name}">
                 <div class="shop_inner_element_text">
                     <div class="shop_inner_element_text_top">
                         <h4 class="black">${card.name}</h4>
                         <p class="black">${card.description}</p>
                     </div>
                     <div class="shop_inner_element_text_bottom">
                         <img src="../images/icon-arrow-mini.svg" alt="arrow">
                         <p class="black">From $${card.price}</p>
                     </div>
                 </div>
             </div>
           `
        shopInner.append(shopCard)
    })
}
shopList()
