let url = 'https://api.novaposhta.ua/v2.0/json/'
let apiKey = ''

let arrOfRegion = []
let arrOfCity = []
/*function createElementForNP(prop, arrOf, func)
{*/

/*}*/
function buildFetchOfRegion()
{
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(
            {
                "apiKey": apiKey,
                "modelName": "AddressGeneral",
                "calledMethod": "getAreas",
                "methodProperties":
                    {
                        /*"AreaRef" : prop.AreaRef,
                        "Ref" : prop.Ref*/
                    }
            }
        )})
        .then(request => { return request.json() })
        .then(response => { arrOfRegion = response.data; buildOfRegion() })
        .catch(err => console.log(err.message))
}

document.getElementById("slcRegion").onchange = () =>
{
    let ref = document.getElementById("slcRegion").value
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(
            {
                "apiKey": apiKey,
                "modelName": "AddressGeneral",
                "calledMethod": "getAreas",
                "methodProperties": { }
            }
        )})
        .then(request => { return request.json() })
        .then(response => { arrOfCity = response.data; console.log(arrOfCity) })
        .catch(err => console.log(err.message))
}

function buildOfRegion()
{
    let select = document.getElementById("slcRegion")
    select.innerText = ''
    arrOfRegion.forEach(res =>
    {
        let op = document.createElement('option')
        op.value = res.Ref
        op.dataset.AreasCenter = res.AreasCenter
        op.innerText = res.Description

        select.appendChild(op)
    })
}

//createElementForNP(document.getElementById("slcRegion"), arrOfRegion, buildOfRegion)
buildFetchOfRegion()

function buildDivOfCity()
{

}