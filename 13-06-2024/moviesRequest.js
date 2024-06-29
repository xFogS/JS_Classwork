/*document.getElementById("listOfMovie").style.visibility = "hidden";
    document.getElementById("navigatorOfMovie").style.visibility = "hidden"
*/
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
            collectionOfMovies = response.Search
            getInfoAboutSearch()
        })
        .catch(err => err.message)
}
function getInfoAboutSearch() {

    //document.getElementById("listOfMovie").clear()
    //<img src="" className="card-img-top" alt="..." style="display: inline-flex"/>
    //console.log("im here")
    console.log(collectionOfMovies)
    collectionOfMovies.forEach(res =>
    {
        let imgPoster = document.createElement("img")
        imgPoster.src = res.Poster
        imgPoster.className = 'card-img-top'
        imgPoster.style = "inline-flex"
        document.getElementById("listOfMovie").appendChild(imgPoster)
    })
}