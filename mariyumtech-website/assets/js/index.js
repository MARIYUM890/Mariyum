// whatsApp

const whatsAppFooter = document.getElementById("whatsApp-Footer")

if (whatsAppFooter) {
  whatsAppFooter.addEventListener("click", function (e) {
    e.preventDefault()

    const phoneNumber="919341906100"

    const message = "Hello MariyumTech, I'm interested in your web design services."
    
    const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message)
    
    window.open(url, "_blank")
  })
}