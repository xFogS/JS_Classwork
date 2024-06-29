/*document.getElementById("listOfMovie").style.visibility = "hidden";
    document.getElementById("navigatorOfMovie").style.visibility = "hidden"
*/
document.getElementById("txtSearch").innerText = "Search:"
//AJAX
let collectionOfMovies = []
document.getElementById("btnSendRequest").onclick = () => {
    indxOfSelectToType = document.getElementById("selectOfType").selectedIndex;
    let category = document.getElementById("selectOfType")[indxOfSelectToType].text;

    const url = 'http://www.omdbapi.com/?'
    const apiKey = '&apikey=b307a83f'
    /*let countOfPage = 1;
        while (countOfPage <= 10) {*/
    //let dt = new Date().getFullYear() - (new Date().getFullYear() % parseInt((Math.random() + 1) * 25))
    let titleOfMovie = document.getElementById("inpTitleOfMovie").value
    fetch(url + 's=' + titleOfMovie + '&type=' + category.toString().toLowerCase() + apiKey)
        .then(request => {
            if (request.status !== 200) return
            return request.json()
        })
        .then(response => {
            document.getElementById("txtFilms").innerText = "Films:"
            collectionOfMovies = response.Search
            getInfoAboutSearch()
        })
        .catch(err => err.message)
}
function getInfoAboutSearch()
{

    console.log(collectionOfMovies)

    /*document.getElementById("blockMovie").style.border = "black solid 1px"
    document.getElementById("blockMovie").style.borderRadius = "10px"
    document.getElementById("blockMovie").style.padding = "1em 1em"*/
    let card = document.getElementById("formCard")
    let countOfCard = 0;
    collectionOfMovies.forEach(res =>
    {
        /*

         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <button type="button" class="btn btn-outline-warning" style="margin-left: 6em">Details</button>

        * */
        let cardBody = document.createElement("div")
        let image = document.createElement("img")

        let h = document.createElement("h5")
        let p = document.createElement("p")
        let btn = document.createElement("button")

        cardBody.className = 'card-body'
        image.src = res.Poster
        if (res.Poster === 'N/A')
            image.src = "https://cdn1.iconfinder.com/data/icons/scenarium-silver-vol-8/128/044_error_not_found_page-1024.png"
        image.className = "card-img-top"

        //document.getElementById("formCard").appendChild(cardBody)
        cardBody.className = "card-body"
        h.className = "card-title"
        h.innerText = res.Type

        p.className = "card-text"
        p.innerText = res.Title

        btn.id = "btnClickAboutInfoMovie"
        btn.type = "button"
        btn.className = "btn btn-outline-warning"
        btn.style.marginLeft = "6em"
        btn.innerText = `Details-\`${countOfCard}\``

        cardBody.appendChild(h)
        cardBody.appendChild(p)
        cardBody.appendChild(btn)
        card.appendChild(image)
        card.appendChild(cardBody)

        ++countOfCard;
    })
}

document.getElementById("btnClickAboutInfoMovie").onclick = (ev) =>
{
    let indx = document.getElementById("btnClickAboutInfoMovie").innerText.split('-')[1]
    console.log(indx)
    let currentCollection = collectionOfMovies[Number(indx)]
    console.log(currentCollection)
}

/*
document.getElementById("btnCloseWindowDetails").onclick = () =>
{
    document.getElementById("openDetailAboutMovie").style.zIndex = "0"
    document.getElementById("openDetailAboutMovie").style.height = "500px"
    document.getElementById("openDetailAboutMovie").style.width = "500px"
}*/
