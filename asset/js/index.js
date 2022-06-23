// grab the dom
const getCertificatesButton = document.querySelector(".btn")
let certs = document.querySelector(".certificates")
const form = document.querySelector(".form")
const Pname = document.querySelector("#name").value
let email = document.querySelector("#email").value
const certificate = document.querySelector("#Certificate-name").value
const msg = document.querySelector("#msg").value


// add an event listener to fetch the certificates when the button is clicked
window.addEventListener('DOMContentLoaded', async (event) => {
    await getCertificatesButton.addEventListener("click", async()=>{
        await fetchData()
    })
    await form.addEventListener("submit", () =>{
        validateForm()
    })
    event.preventDefault()
});

const fetchData = async() => {
    await fetch("https://rahisiapi.herokuapp.com/rahisi/certs").then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
        const html = data.map(content=>{
            return `
            <div>
                <h2>Name: ${content.name}</h2>,
                <h3>Type: ${content.title}</h3>,
                <img src='${content.img}'</img>,
                <button class='btn'>Download</button>,

            </div>
            `
        }).join("")
        console.log(html)
        certs.insertAdjacentHTML("afterbegin", html)
    })
}
// form validation
const validateForm = () =>{
    if(Pname === '' || email === '' || certificate === '' || msg === ''  ){
        ralert("All fields are required")
        return false
    }else{
        alert("form Submitted")
        return true
    }
}