window.onload = ()=>{
    var btn = document.getElementById("btn")
    btn.addEventListener("click", handleClick)

    getMealData()
}


const handleClick=()=>{
    var name = document.getElementById("name").value
    var xhr = new XMLHttpRequest()
    xhr.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s="+name)
    xhr.send()
    xhr.onload=()=>{
        if(xhr.status == 200){
            localStorage.setItem("datas", xhr.response)
            location = "page3.html"
        }
    }
}

const getMealData=()=>{
    var xhr = new XMLHttpRequest()
    xhr.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s=")
    xhr.send()
    xhr.onload=()=>{
        if(xhr.status == 200){
            var res = (JSON.parse(xhr.response))
            console.log(res)
            fetchData(res)
        }
    }
}

const fetchData = (res)=>{
    var card = document.getElementById("card")
    var div = document.createDocumentFragment()
    //div.setAttribute("class", "ml-5")
    
    for(var i=0; i < res.meals.length; i++){

        var meals=createCard(res.meals[i])
        div.append(meals)
    }
    card.append(div)
}

function createCard(data){
    
    var my_card = document.createElement("div")
    
    my_card.setAttribute("class","ml-4 pl-2 float-left")
    
    var title = document.createElement("h2")
    title.textContent =  data.strMeal
    var img = document.createElement("img")
    
    img.setAttribute("src", data.strMealThumb)
    img.setAttribute("width", "300px")
    my_card.append(title,img)
    
    console.log(data)
    my_card.addEventListener('click',function(e){
    
        localStorage.setItem('mealData',JSON.stringify(data))
        getInstructions(e.target)
    })
        

        return  my_card
}

function getInstructions(){
    location.href="page1.html"
}

