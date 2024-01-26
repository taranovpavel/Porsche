const special = document.querySelector(".special_inner_main")
const next = document.querySelector(".special_inner_right")
const prev = document.querySelector(".special_inner_left")
const name = document.querySelector(".name")
const price = document.querySelector(".price")
let i = 0
const cardFetcher = (id) =>{
	fetch(`../data/special.json`)
		.then(response => response.json())
		.then(data =>{
			special.style.backgroundImage = `url(${data[id].dataImage})`
			price.textContent = `${data[id].dataPrice}`
			name.textContent = `${data[id].dataName}`
		})
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


const dataPosts = () =>{
	fetch(`https://jsonplaceholder.typicode.com/posts`)
		.then(response => response.json())
		.then(data =>{
			console.log(data)
		})
}
dataPosts()


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