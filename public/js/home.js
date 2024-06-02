const inputs = document.querySelectorAll(".contactFormT input");


document.addEventListener("DOMContentLoaded", ()=> {
    inputs.forEach(input => {
        input.addEventListener("focus", (e)=> {
            // console.log(e.target.previousElementSibling)
            e.target.previousElementSibling.style.top = "0px"
            e.target.previousElementSibling.style.left = "5px"
            e.target.previousElementSibling.style.fontSize = "13px"            
            e.target.previousElementSibling.style.color = "white"            
        })
    })
    inputs.forEach(input => {
        input.addEventListener("blur", (e)=> {
            // console.log(e.target.previousElementSibling)
            e.target.previousElementSibling.style.fontSize = "16px"
            e.target.previousElementSibling.style.color = "#457576"
            if(input.value === "") {
                e.target.previousElementSibling.style.top = "15px"
                e.target.previousElementSibling.style.left = "10px"
            }else {
                e.target.previousElementSibling.style.top = "5px"
                e.target.previousElementSibling.style.left = "5px"
            }
        })
    })
})
