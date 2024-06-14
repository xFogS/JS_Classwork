//JS - Model Object Transport

let transport = {
    manufacturer: "Mercedes",
    model: "Mercedes-Benz SL 60 AMG",
    year: "1993–1998",
    amountSpeed: "125"
};
function getViewCharacteristicByTransport(transportObj)
{
    let str = "";
    for (characteristic in transportObj)
        str +=  characteristic +' --- '+ transportObj[characteristic] + '\n'
    return str;
}
function getCountTimeWithAmountSpeed(transportObj, distance)
{
    //t? t = d/s | time = distance/speed
    let t = distance / transportObj.amountSpeed;
    return ((t%4 == 0)? (t/4 | 0) - 1: t/4| 0) + t;
}