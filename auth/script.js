const email = document.getElementById('email')
const password = document.getElementById('password')
const signup = document.getElementById('signup')
const btn = document.getElementById('submitBtn')
const message = document.getElementById('message')

async function signUp() {

}

async function login() {
    const data = await fetch('https://api.quintondev.com/butlins-experience/auth/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    const response = await data.json()

    if (response.outcome === true) {
        const connectionToken = response.connectionToken

        window.location.href = `butlinsexperience://auth/callback?connectionToken=${connectionToken}`
    } else {
        message.innerHTML = response.error
    }
}


btn.addEventListener('click', () => {
    if (email.value !== '' && password.value !== '') {
        if (signup.checked === false) {
            login()
        } else {
            signUp()
        }
    }
})