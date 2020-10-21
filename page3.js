window.onload = ()=>{
    var res = JSON.parse(localStorage.getItem("datas"))
    console.log(res.meals[0].strInstructions)
    fetchData(res)
    fetchData1(res)
}

const fetchData =(res)=>{
    console.log(res)
    var result = document.getElementById("result")
    var div = document.createElement("div")
    var my_res = document.createElement("div")

    var making_inst = document.createElement("h2")
    making_inst.textContent = "Making Instructions"
    making_inst.setAttribute("class","text-center p-2")

    var div_inst = document.createElement("p")
    div_inst.append(res.meals[0].strInstructions)
    div_inst.setAttribute("style", "font-size: 20px")
    my_res.setAttribute("class","m-3 text-center")

    var title = document.createElement("h1")
    title.setAttribute("class", "text-center")
    title.textContent = res.meals[0].strMeal
    
    var img = document.createElement("img")
    img.setAttribute("src", res.meals[0].strMealThumb)
    img.setAttribute("width", "300px")
    img.setAttribute("class","img-responsive center-block")

    

    my_res.append(title,img,making_inst,div_inst)
    div.append(my_res)

    result.append(div)
}

const fetchData1= (res)=>{
    var result1 = document.getElementById("result1")
    var div = document.createElement("h3")
    div.textContent = "INGREDIENTS LIST"
    div.setAttribute("class","text-center text-primary")
    var ingredients = document.createElement("h4")
    ingredients.textContent = "1."+res.meals[0].strIngredient1

    var ingredients1 = document.createElement("h4")
    ingredients1.textContent = "2."+res.meals[0].strIngredient2

    var ingredients2 = document.createElement("h4")
    ingredients2.textContent = "3."+res.meals[0].strIngredient3

    var ingredients3 = document.createElement("h4")
    ingredients3.textContent = "4."+res.meals[0].strIngredient4

    var ingredients4 = document.createElement("h4")
    ingredients4.textContent = "5."+res.meals[0].strIngredient5
    result1.append(div,ingredients,ingredients1,ingredients2,ingredients3,ingredients4)
}
