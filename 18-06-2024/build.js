function buildOfRegion(slcRegion, arr)
{
    slcRegion.innerText = ''
    arr.forEach(res =>
    {
        let op = document.createElement('option')
        op.value = res.Ref
        op.dataset.AreasCenter = res.AreasCenter
        op.innerText = res.Description
        slcRegion.appendChild(op)
    })
}
//city and post я міг скоротити. але не бачу сенсу тут
function buildOfCity(slcCity, arr)
{
    slcCity.innerText = ''; slcCity.style.visibility = 'visible'
    arr.forEach(res =>
    {
        let op = document.createElement("option")
        op.value = res.Ref
        op.innerText = res.Description
        slcCity.appendChild(op)
    })
}
function buildOfPostOffice(slcPostOffice, arr)
{
    slcPostOffice.innerText = ''; slcPostOffice.style.visibility = 'visible'
    arr.forEach(res =>
    {
        let op = document.createElement("option")
        op.value = res.Ref
        op.innerText = res.Description
        slcPostOffice.appendChild(op)
    })
}