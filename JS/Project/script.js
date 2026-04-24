let ul=document.createElement("ul")
let btn=document.querySelector("button")
let input=document.querySelector("#todo")
let h1=document.querySelector("h1")
let date=document.querySelector("#date")

btn.addEventListener("click",()=>{
    if(input.value.trim()<=0){
        alert("Empty Input is not allowed")
    }
    else{

        let div=document.createElement("div")
        let li=document.createElement("li")
        let todo_store=document.createElement("span")
        let date_store=document.createElement("span")
        let del_btn=document.createElement("button")
        let rename=document.createElement("button")
        
        todo_store.innerText=input.value
        date_store.innerText=date.value

        date_store.style.marginLeft="40px"

        li.append(todo_store,date_store)

        del_btn.innerText="Delete TODO"
        rename.innerText="Rename TODO"
        
        div.append(li,del_btn,rename)
        ul.append(div)
        
        input.value=""
        
        todo_store.addEventListener("click",()=>{
            todo_store.classList.toggle("line")
        })
        
        del_btn.addEventListener("click",()=>{
            div.remove()
            h1.innerText=`${ul.childElementCount} Todo List`
        })
        
        rename.addEventListener("click",()=>{
            let newName=prompt("Update TODO")
            li.innerText=newName
        })
        
        h1.innerText=`${ul.childElementCount} Todo List`
        console.dir(date)
    }
    })

document.querySelector("body").append(ul)