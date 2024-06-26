/*document.getElementById("listOfMovie").style.visibility = "hidden";
    document.getElementById("navigatorOfMovie").style.visibility = "hidden"
*/
//AJAX
let imgPoster, category, titleMovie, year;
let collectionOfMovies = []
document.getElementById("btnSendRequest").onclick = function ()
{
    switch (document.getElementById("inputGroupSelect01").selectedIndex)
    {
        case 0: {category = 'Movie'; break;}
        case 1: {category = 'Series'; break;}
        case 2: {category = 'Episode'; break;}
    }

    fetch('',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    "Title": document.getElementById("inpTitleOfMovie").innerText,
                    "Type": category
                }
            )
        })
        .then(res => {
            if (res.status === 200)
                return res.json()
        })
        .then(response =>
        {
            collectionOfMovies = response;
            getInfoAboutSearch();
        })
        .catch(err => console.log(err.message))
}
function getInfoAboutSearch()
{
    collectionOfMovies.forEach(response =>
    {
        console.log(response)
    })
}