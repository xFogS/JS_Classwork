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
    const apiKey = '&apikey=00000000' //here should was your api key
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
/*            console.log(response)*/
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
    let countOfCard = 1;
    collectionOfMovies.forEach(res =>
    {
        let cardBody = document.createElement("div")
        let image = document.createElement("img")
        let h = document.createElement("h5")
        let p = document.createElement("p")
        let alink = document.createElement("a")

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

        //alink.id = "aClickAboutInfoMovie"
        alink.className = "btn btn-warning"
        alink.style.marginLeft = "6em"
        alink.innerText = `Details № ${countOfCard}`

        cardBody.appendChild(h)
        cardBody.appendChild(p)
        cardBody.appendChild(alink)
        card.appendChild(image)
        card.appendChild(cardBody)

        ++countOfCard;
    })
    buildInfoOfMovie()
}

function buildInfoOfMovie()
{
    /*if (collectionOfMovies === null) return -1;
    let tempCallNum = document.getElementById("inpCallForNum")
    tempCallNum.style.visibility = 'visibility'
    while (!tempCallNum.onchange) {}
    tempCallNum.onchange = () =>
    {
        let numFromDetails =
            document.getElementById("aClickAboutInfoMovie")
            .innerText.split('№ ')[1]
        console.log(numFromDetails)
        if (tempCallNum.value > 0 && tempCallNum.value <= Number(numFromDetails)) {
            document.getElementById("detailPoster").innerText =
                collectionOfMovies[tempCallNum.value].Poster
            document.getElementById("detailTitle").innerText =
                collectionOfMovies[tempCallNum.value].Title
            document.getElementById("detailType").innerText =
                collectionOfMovies[tempCallNum.value].Type
            document.getElementById("detailYear").innerText =
                collectionOfMovies[tempCallNum.value].Year
            document.getElementById("detailImdbID").innerText =
                collectionOfMovies[tempCallNum.value].imdbID
        }

        document.getElementById("openDetailAboutMovie").style.visibility = 'visibility'
        while (!document.getElementById("btnCloseWindowDetails").onclose) {}
        document.getElementById("openDetailAboutMovie").style.visibility = 'hidden'

        tempCallNum.style.visibility = 'hidden'
    }*/
}
