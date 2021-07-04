function onOpen(id) {
    const lightbox = document.getElementById(id)
    lightbox.className += " featured"
}

const onClose = (id) => {
    const lightbox = document.getElementById(id)
    lightbox.className = "lightbox"
}