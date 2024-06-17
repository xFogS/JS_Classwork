/*ALERT - CLEAR*/
document.getElementById("alerts").onmouseover = () => alert("You can see the text here :&");
document.getElementById("btnClearChatAlerts").onclick = () => { document.getElementById("alerts").innerText = ""; };

//pow
document.getElementById("btnPowNum").onclick = () =>
{
    document.getElementById("alerts").innerText = getPow(Number(prompt("inp num: ")))
}
function getPow(num)
{
    if (num == 2) return num;
    return num * getPow(num - 1);
}
//NOD
document.getElementById("btnNodNum").onclick = () =>
{
    document.getElementById("alerts").innerText = getNod(prompt("1. inp num: "), prompt("2. inp num: "))
}
function getNod(x, y)
{
    console.log(x + ' ' + y)
    if (x == null || y == null) return -1;
    let r = x % y;
    if (r == 0)
        return y;
    x = y; y = r;
    console.log(x + ' ' + y)
    return getNod(x, y)
}
// Написать функцию для поиска максимальной цифры в числе.
document.getElementById("btnMaxNum").onclick = () =>
{
    document.getElementById("alerts").innerText = getMaxNum(prompt("1. inp num: "))
}
function getMaxNum(num)
{
    let arrNum = num.toArray();
    for (let i = 0; i < arrNum.length; ++ i)
    {
        document.getElementById("alerts").innerText += arrNum[i];
    }
}