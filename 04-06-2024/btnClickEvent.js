/*ALERT - CLEAR*/
document.getElementById("alerts").onmouseover = () => alert("You can see the text here :&");
document.getElementById("btnClearChatAlerts").onclick = () => { document.getElementById("alerts").innerText = ""; };
/*Functions click*/
/*TRANSPORT*/
document.getElementById("btnAllCharacteristicModelByCar").onclick = () =>
{
    document.getElementById("alerts").innerText = getViewCharacteristicByTransport(transport);
}
document.getElementById("btnCountDistanceByCar").onclick = () =>
{
    let distance = prompt("input distance", "");
    document.getElementById("alerts").innerText = getCountTimeWithAmountSpeed(transport, distance);
}
/*Fraction*/
document.getElementById("btnAddFraction").onclick = () =>
{
    //let distance = prompt("input distance", "");
    document.getElementById("alerts").innerText = getAddFraction(fraction.valueFirst, fraction.valueSecond);
}
document.getElementById("btnMinusFraction").onclick = () =>
{
    //let distance = prompt("input distance", "");
    document.getElementById("alerts").innerText = getMinusFraction(fraction.valueFirst, fraction.valueSecond);
}
document.getElementById("btnMultiplyFraction").onclick = () =>
{
    //let distance = prompt("input distance", "");
    document.getElementById("alerts").innerText = getMultiplyFraction(fraction.valueFirst, fraction.valueSecond);
}
document.getElementById("btnDivideFraction").onclick = () =>
{
    //let distance = prompt("input distance", "");
    document.getElementById("alerts").innerText = getDivideFraction(fraction.valueFirst, fraction.valueSecond);
}
document.getElementById("btnAbbreviationFraction").onclick = () =>
{
    //let distance = prompt("input distance", "");
    document.getElementById("alerts").innerText = getAbbreviationFraction(fraction.valueFirst, fraction.valueSecond);
}
/*DateTime*/
document.getElementById("btnOutputDateTime").onclick = () =>
{
    document.getElementById("alerts").innerText = getFullTime(timeBD);
}
document.getElementById("btnChangeDTWithSeconds").onclick = () =>
{
    let vtimeSec = Number(prompt("input time in second(s)", ""));
    document.getElementById("alerts").innerText = setNewTimeOnlySecond(timeBD, vtimeSec);
}
document.getElementById("btnChangeDTWithMinutes").onclick = () =>
{
    let vtimeMin = Number(prompt("input time in Minute(s)", ""));
    document.getElementById("alerts").innerText = setNewTimeOnlyMinute(timeBD, vtimeMin);
}
document.getElementById("btnChangeDTWithHours").onclick = () =>
{
    let vtimeHour = Number(prompt("input time in Hour(s)", ""));
    document.getElementById("alerts").innerText = setNewTimeOnlyHour(timeBD, vtimeHour);
}