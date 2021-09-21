const navbar = document.querySelector("#navbar")
const header = document.querySelector("#header")
const button = document.querySelector(".navbar-toggler")
const logo = document.querySelector('.logotype')

const init = () => {
    if (window.innerWidth > 768) {
        document.addEventListener("scroll", () => {
            if (((header.scrollHeight * 0.66) - navbar.scrollHeight) < window.scrollY) {
                navbar.classList.add("bg-full-dark")
                button.classList.add("text-light")
                logo.classList.remove("hidden")
                navbar.querySelectorAll(".nav-link").forEach(e => {
                    e.classList.add("text-secondary")
                    e.classList.remove("text-white")
                })
                navbar.querySelector(".active").classList.add("text-white")
                

            } else {
                logo.classList.add("hidden")
                navbar.classList.remove("bg-full-dark")
                button.classList.remove("text-light")
                navbar.querySelectorAll(".nav-link").forEach(e => {
                    e.classList.remove("text-secondary")
                })
                navbar.querySelector(".active").classList.remove("text-white")
            }
        })
    } else {
        document.addEventListener("scroll", () => {
            if (((header.scrollHeight * 0.66) - navbar.scrollHeight) < window.scrollY) {
                navbar.classList.add("bg-full-dark")
                button.classList.add("text-light")
                logo.classList.remove("hidden")

            } else {
                navbar.classList.remove("bg-full-dark")
                button.classList.remove("text-light")
                logo.classList.add("hidden")
            }
        })

    }
}

init()

window.addEventListener("resize", () => {
    document.removeEventListener("scroll", () =>{})
    init()
})
