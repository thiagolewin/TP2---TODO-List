const button = document.querySelector(".agregar")
const button2 = document.querySelector(".mostrar")
let arrayElementos = []
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
            e.prev
            if(nuevoDiv.children[0].children[0].children[0].hasAttribute("checked")) {
                nuevoDiv.children[0].children[0].children[0].removeAttribute("checked")
            } else {
                nuevoDiv.children[0].children[0].children[0].setAttribute("checked","checked")
                if(new Date() - element[1] < ElementoMasRapido) {
                    ElementoMasRapido = new Date() - element[1]
                }
                console.log(ElementoMasRapido)
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
            <h5>${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</h5>
        </div>
    `,new Date])
    agregarLista()
})