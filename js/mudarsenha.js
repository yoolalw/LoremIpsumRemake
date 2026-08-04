const btn = document.getElementById("btnAlterar")
const popup = document.getElementById("popup")
const closepopup = document.getElementById("closepopup")
popup.style.display = "none"

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const novasenha = document.getElementById("novasenha").value
    const novasenhaconfirmada = document.getElementById("novasenhaconfirmada").value

    if (novasenha == '' && novasenhaconfirmada == '') {
        popup.style.display = "block"

        closepopup.addEventListener("click", (e) => {
            e.preventDefault()
            popup.style.display = "none"
        })

        return
    }
    if (novasenha == novasenhaconfirmada) {
        window.location.href = "login.html"
    }
})