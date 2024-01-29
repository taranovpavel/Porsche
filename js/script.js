const special = document.querySelector(".special_inner_main")
const next = document.querySelector(".special_inner_right")
const prev = document.querySelector(".special_inner_left")
const name = document.querySelector(".name")
const price = document.querySelector(".price")
const shopInner = document.querySelector(".shop_inner")
let i = 0

const shopList = async() =>{
	const response = await fetch("../data/cards.json/?_limit=10")
	const data = await response.json()
	data.forEach((card)=>{
		if (card.id <= 5){
			const shopCard = document.createElement("a")
			shopCard.href = "pages/shop.html"
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
		}
	})
}
shopList()


const cardFetcher = async (id) =>{
	const response = await fetch("../data/special.json")
	const data = await response.json()
	special.style.backgroundImage = `url(${data[id].dataImage})`
	price.textContent = `${data[id].dataPrice}`
	name.textContent = `${data[id].dataName}`
}
cardFetcher(i)
const cardNext = () =>{
	if (i >= 4){
		i = 0
		cardFetcher(i)
	}else {
		i++
		cardFetcher(i)
	}
}
next.onclick= () =>{
	clearInterval(cardInterval)
	cardNext()
}
prev.onclick = () =>{
	clearInterval(cardInterval)
	if (i <= 0){
		i = 4
		cardFetcher(i)
	}else{
		i--
		cardFetcher(i)
	}
}
const cardInterval = setInterval(() =>{
	cardNext()
},3000)

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});