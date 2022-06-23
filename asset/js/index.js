// grab the dom
const getCertificatesButton = document.querySelector(".btn")
let certs = document.querySelector(".certificates")


// add an event listener to fetch the certificates when the button is clicked
window.addEventListener('DOMContentLoaded', async (event) => {
    await getCertificatesButton.addEventListener("click", async()=>{
        fetchData()
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
                <h2>${content.name}</h2>,
                <h3>${content.title}</h3>,
                <img src='${content.img}'</img>,
                <button>Download</button>,

            </div>
            `
        }).join("")
        console.log(html)
        certs.insertAdjacentHTML("afterbegin", html)
    })
}