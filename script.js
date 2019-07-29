let input = document.getElementById("archivos")
let dropzone = document.getElementById("dropzone")

input.addEventListener("change",e=>{
    //console.log(e.target.files)
    procesarArchivos(e.target.files)
})

//dragenter - dragleave - dragover - drop
dropzone.addEventListener("dragenter",()=>{
    console.log("Adentro del dropzone")
})

dropzone.addEventListener("dragleave",()=>{
    console.log("Adentro del dropzone")
})

dropzone.addEventListener("dragover",e=>{
    e.preventDefault()
    console.log("Encima del dropzone")
})

dropzone.addEventListener("drop",e=>{
    e.preventDefault()
    console.log("Soltaron un archivo")
    //console.log(e)
    procesarArchivos(e.dataTransfer.files)
})

function procesarArchivos(archivos){
    
    console.log(archivos)
    
    let data = new FormData

    for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i]
        //data.append("imagenes[]",archivo)
        data.append(`imagen-${i}`,archivo)
    }

    let xhr = new XMLHttpRequest

    xhr.open("POST","archivos.php")

    xhr.addEventListener("load",()=>{
        if (xhr.status == 200) {
            console.log("Termino el pedido")
        }
    })
    
    xhr.upload.addEventListener("progress",e=>{
        let porcentaje = e.loaded * 100 / e.total
        console.log(porcentaje)
    })
    //xhr.setRequestHeader("content-type","multipart/form-data")
    //string : application/x-www-form-urlencoded
    //formdata : multipart/form-data
    //json : application/json
    //XHR.send(JSON - FormData - String)
    xhr.send(data)

}