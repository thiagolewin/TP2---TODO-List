const button = document.querySelector(".agregar")
const button2 = document.querySelector(".mostrar")
let arrayElementos = []
let nombreRapido = ""
let ElementoMasRapido = 10000000000000000000
const agregarLista = ()=> {
    const caja = document.querySelector(".checkBoxes")
    while (caja.firstChild) {
        caja.removeChild(caja.firstChild)
    }
    arrayElementos.forEach((element,i) => {
        const nuevoDiv = document.createElement("div")
        nuevoDiv.innerHTML = element[0]
        nuevoDiv.children[0].children[0].children[0].addEventListener("click",(e)=> {
            console.log("a")
            if(nuevoDiv.children[0].children[0].children[0].hasAttribute("checked")) {
                console.log("a")
                nuevoDiv.children[0].children[0].children[0].removeAttribute("checked")
                if(nuevoDiv.children[0].children[3] != undefined) {
                    nuevoDiv.children[0].removeChild(nuevoDiv.children[0].lastChild)
                }
            } else {
                nuevoDiv.children[0].children[0].children[0].setAttribute("checked","checked")
                let newH5 = document.createElement("h5")
                 newH5.innerHTML = `<b>Tachado:</b> ${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` 
                 nuevoDiv.children[0].appendChild(newH5)
                if(new Date() - element[1] < ElementoMasRapido) {
                    nombreRapido = nuevoDiv.children[0].children[1].textContent
                    ElementoMasRapido = new Date() - element[1]
                }
            }
            arrayElementos[i][0] = nuevoDiv.innerHTML
        })
        if(nuevoDiv.children[0].children[0].children[0].hasAttribute("checked")) {
            nuevoDiv.children[0].children[0].children[0].checked = true
        } else {
            nuevoDiv.children[0].children[0].children[0].checked = false
        }
        caja.appendChild(nuevoDiv)
    });
}
button2.addEventListener("click",()=> {
    alert("La mas rapida fue " + nombreRapido + " en " + ElementoMasRapido/1000 + " segundos")
})
button.addEventListener("click",()=> {
    const caja = document.querySelector(".checkBoxes")
    const input = document.querySelector(".input")
    const tempDiv = document.createElement("div")
    arrayElementos.push([`
    <div class="checkText">
            <label class="container">
                <input  type="checkbox" >
                <div class="checkmark"></div>
            </label>
            <h3>${input.value}</h3>
            <h5><b>Agregado:</b> ${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</h5>
        </div>
    `,new Date])
    agregarLista()
})