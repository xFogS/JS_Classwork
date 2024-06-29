/*document.getElementById("listOfMovie").style.visibility = "hidden";
    document.getElementById("navigatorOfMovie").style.visibility = "hidden"
*/
//AJAX
let imgPoster, category, titleOfMovie, year;
let collectionOfMovies = []
document.getElementById("btnSendRequest").onclick = () =>
{
    indxOfSelectToType = document.getElementById("selectOfType").selectedIndex;
    category = document.getElementById("selectOfType")[indxOfSelectToType].text;

    const url = 'http://www.omdbapi.com/?'
    const apiKey = '&apikey=b307a83f'
    titleOfMovie = document.getElementById("inpTitleOfMovie").value
    fetch(url + 't=' + titleOfMovie + '&type=' + category.toString().toLowerCase() + apiKey)
        .then(request => {
            if (request.status === 200)
                return request.json()
        })
        .then(response =>
        {
            collectionOfMovies = response
            getInfoAboutSearch()
        })
}
function getInfoAboutSearch()
{
    console.log(collectionOfMovies)
    collectionOfMovies.forEach(response =>
    {
        imgPoster = response.Poster
        year = response.Year
    })
}