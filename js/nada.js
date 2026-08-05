async function updateResourceWithETag(url, updatedData) {
    const response = await fetch(url)
    const headerETag = await response.headers.get('ETag')

    const putResponse = await fetch(url, {
        method: 'PUT',
        headers: {
            'If-Match': `${headerETag}`
        },
        body: JSON.stringify({ updatedData: updatedData })
    })

    if (putResponse.ok) {
        alert("Foi realizado com sucesso!")
    } else if (response.status == 412) {
        alert("Este recurso foi alterado por outro usuário.")
    }

}
//-------------------

async function fetchWithRetry(url, options, maxRetries, backoffMs) {
    let cont = 0
    const response = await fetch(url)
    if (!response.ok || response.status == 500) {
        cont++
        if (cont < maxRetries) {
            exponentialBackoff()
            return
        }
    } else if (response.status == 401 || response.status == 400) {
        throw new Error('Bad request!')
    }
    function exponentialBackoff() {
        return maxRetries * backoffMs
    }
}

/////


const button = document.getElementById("userForm")
button.addEventListener("submit", async (e) => {
    e.preventDefault()

    let emailValue = document.getElementById("email").value

    fetch('/api/users', {
        method: 'POST',
        'headers': {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emailValue)
    }).then(response => {
        if (!response.ok) {
            alert("Ocorreu um erro ao tentar salvar o usuario.")
        }

        alert("Usuario salvo com sucesso!")
    })
})