setTimeout(cambiaMensaje, 8000)

function cambiaMensaje()
{
    document.getElementById("cargando").innerText = "ABRAZO ENVIADO"
}

setTimeout(function()
{
    alert("🫂RECIBISTE UN ABRAZO🤗\nʕ(づ￣ ³￣)づ")
}, 8000)