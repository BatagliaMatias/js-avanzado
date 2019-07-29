let links = document.querySelectorAll(".links")
let main = document.querySelector("main")

links.forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault()
        //URI
        //location.hash = e.target.innerText
        history.pushState("","",e.target.innerText)
        ajax("get",e.target.href,render)
    })
})


function ajax(metodo,url,callback){
    let xhr = new XMLHttpRequest
    xhr.open(metodo,url)
    xhr.addEventListener("load",()=>{
        if (xhr.status == 200) {
            callback(xhr.response)
        }
    })
    xhr.send()
    return xhr
}

function render(data){
    main.innerHTML = data
}


//popstate : se dispara cuando el usuario hace click en los botones de control de historial(atras o adelante), alt+<-/-> , history.{back|forward|go}()
window.addEventListener("popstate",()=>{
    console.log("Cambio El historial")
    //let url = location.pathname.split("/")[1] + ".html"
    let url = location.pathname.substr(1) + ".html"
    ajax("get",url,render)
})