let links = document.querySelectorAll(".links")
let main = document.querySelector("main")

links.forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault()
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

window.addEventListener("popstate",()=>{
    
})