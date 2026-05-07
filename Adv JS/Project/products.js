let data = new URLSearchParams(window.location.search)
let id = data.get("id")

let url = `https://dummyjson.com/products/${id}`

let slides = document.querySelector(".slides");
// let total=slides.children.length;
let main = document.querySelector("main")
fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let pdata = data
        console.log(pdata)
        let h1 = document.createElement("h1")
        h1.innerText = pdata.title
        let current = 0;
        
        pdata.images.map((el) => {
            let img = document.createElement("img")
            img.src = el
            img.style.width = "400px"
            slides.append(img)
            // console.log(total)
            let total = slides.children.length;
            
            let next=document.querySelector(".next")
            next.addEventListener("click",()=>{
                current = (current + 1) % total
                updateSlides()
            })
            function prev() {

            }

            function updateSlides() {
                slides.style.transform = `translateX(-${current * 400}px)`
            }

            console.log(total)
        })
        main.append(h1)
    })
