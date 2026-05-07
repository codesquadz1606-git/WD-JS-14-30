let url="https://dummyjson.com/products?limit=500"
let products=[]

let main=document.querySelector("main")

fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    products=data.products
    // console.log(data.products)

    products.map((el)=>{
        console.log(el)

        let outerDiv=document.createElement("div")

        let heading=document.createElement("h2")
        let imgLink=document.createElement("a")
        let image=document.createElement("img")
        let des=document.createElement("p")

        let p_cart=document.createElement("div")

        let price=document.createElement("p")
        let addToCart=document.createElement("button")

        heading.innerText=el.title
        image.src=el.thumbnail
        des.innerText=`${el.description.slice(0,60)}...`
        price.innerText=`Rs ${Math.ceil(el.price*93)}/-`
        addToCart.innerText="Add To Cart"
        imgLink.href=`ProductDetail.html?id=${el.id}`

        price.classList.add("price")
        addToCart.classList.add("addtocart")
        p_cart.classList.add("p_cart")
        outerDiv.classList.add("outerdiv")
        addToCart.style.cursor="pointer"

        imgLink.append(image)
        p_cart.append(price,addToCart)
        outerDiv.append(heading,imgLink,des,p_cart)
        
        main.append(outerDiv)

        addToCart.addEventListener("click",()=>{
            window.location.href="Cart.html"

            let cart=JSON.parse(localStorage.getItem("mycart") || "[]")
            
            let existing=cart.find((item)=> item.id === el.id)
            
            if(existing){
                existing.qty+=1;
            }
            else{
                cart.push({...el,qty:1});
            }

            localStorage.setItem("mycart",JSON.stringify(cart));
        })
        
    })
})
.catch((err)=>{
    console.log(err)
})