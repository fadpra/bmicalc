const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
    const weight = document.querySelector(".weight").value
    const height = document.querySelector(".height").value
    const h1 = document.querySelector("h1")
    const bmi = (weight/(height*height)* 10000).toFixed(2)
    h1.innerHTML = bmi

    const h3 = document.querySelector("h3")
    if(bmi < 16) {
        h3.innerHTML = "You are severely thin"
        h3.style.color = "rgb(255,0,0)"
    } else if(bmi < 17) {
        h3.innerHTML = "You are thin"
        h3.style.color = "rgb(214,5,5)"
    } else if(bmi < 18.5) {
        h3.innerHTML = "You are kind of thin"
        h3.style.color = "rgb(167, 16, 46)"
    } else if(bmi < 25) {
        h3.innerHTML = "You have normal weight"
        h3.style.color = "green"
    } else if(bmi < 30) {
        h3.innerHTML = "You are overweight"
        h3.style.color = "rgb(167, 16, 46)"
    } else if(bmi < 40) {
        h3.innerHTML = "You are obese"
        h3.style.color = "rgb(214,5,5)"
    } else if(bmi > 40) {
        h3.innerHTML = "You are severely obese"
        h3.style.color = "rgb(255,0,0)"
    }
})