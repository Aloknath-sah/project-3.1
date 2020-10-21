window.onload = ()=>{
    var res = JSON.parse(localStorage.getItem("mealData"))
    console.log(res )
    fetchData(res)
    
}

const fetchData =(res)=>{
    var result = document.getElementById("result")
    var div = document.createElement("div")
    var my_res = document.createElement("div")
    var hr = document.createElement("hr")

    var making_inst = document.createElement("h2")
    making_inst.textContent = "Making Instructions"
    making_inst.setAttribute("class","text-center")

    var div_inst = document.createElement("p")
    div_inst.append(res.strInstructions)
    div_inst.setAttribute("style", "font-size: 20px")
    my_res.setAttribute("class","m-3 text-center")

    var title = document.createElement("h1")
    title.setAttribute("class", "text-center")
    title.textContent = res.strMeal
    
    var img = document.createElement("img")
    img.setAttribute("src", res.strMealThumb)
    img.setAttribute("width", "300px")
    img.setAttribute("class","img-responsive center-block")

    my_res.append(title,img,making_inst,div_inst,hr)
    div.append(my_res)

    result.append(div)
}

