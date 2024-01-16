const openBtn = document.querySelector(".userBtn")
const closeBtn = document.querySelector(".close")
const modal = document.querySelector(".modal")
const  modalOpen = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}
const  modalClose = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""

}
openBtn.onclick = () => modalOpen()
closeBtn.onclick = () => modalClose()
modal.onclick = (event) => {
    if (event.target === modal) {
        modalClose()
    }
}