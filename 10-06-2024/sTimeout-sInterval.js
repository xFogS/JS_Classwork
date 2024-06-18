//*ALERT - CLEAR*/
let isShowAlert = false;
document.getElementById("alerts").onmouseover = () =>
{
    if (isShowAlert !== true)
    {
        alert("You can see the text here :&");
        isShowAlert = true;
    }
}
//if (document.getElementById("alerts").innerText > )
document.getElementById("btnClearChatAlerts").onclick = () => { document.getElementById("alerts").innerText = ""; };
/*don't repeat*/
function callGetElementByIdAndFunc(btnStr, func, message)
{
    try
    {
        document.getElementById(btnStr).onclick = () =>
            document.getElementById("alerts").innerText = func(prompt(`'${message}' 1. inp num: `))
    }
    catch (error)
    {
        return document.getElementById("alerts").innerText = error.message;
    }
}
//pow
callGetElementByIdAndFunc("btnPowNum", getPow, "Pow");
function getPow(num)
{
    if (num == 2) return num;
    return num * getPow(num - 1);
}
//NOD
callGetElementByIdAndFunc("btnNodNum", getNod, "Nod");
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
//maxDigit
callGetElementByIdAndFunc("btnMaxDigit", getMaxDigit, "MaxDigit");
function getMaxDigit(num)
{
   if (num < 10) return num;
   else
   {
       let max = getMaxDigit(Math.floor(num / 10));
       let last = num % 10;
       return Math.max(last, max);
   }
}
/*SimpleNum*/
callGetElementByIdAndFunc("btnSimpleNum", getSimpleNum, "SimpleNum")
function getSimpleNum(num, divisor = 2)
{
    if (num < 2) return false
    if (divisor == num) return true
    else if (num % divisor == 0) return false
    return getSimpleNum(num, divisor + 1)
}
//all multiply
callGetElementByIdAndFunc("btnAllMultiplyNum", getAllMultiply, "AllMultiply");
function getAllMultiply(num, startMultiply = 2)
{
    if (getSimpleNum(num) === true)
        return document.getElementById("alerts").innerText = "it's simple num"

    let i = startMultiply;
    if (i >= num)
        return document.getElementById("alerts").innerText = "Error/Change num"

    for (let j = 1; j <= i; ++j)
    {
        if ((i * j) == num)
            return
                document.getElementById("alerts").innerText = `${i} * ${j} = ${num}`
        for (let k = 1; k <= j; ++k)
        {
            if ((i * j * k) == num)
                return document.getElementById("alerts").innerText = `${i} * ${j} * ${k} = ${num}`
        }
    }
    return getAllMultiply(num, ++i)
}

callGetElementByIdAndFunc("btnFindFibonacciNum", getFibonacci, "Fibonacci")
function getFibonacci(num)
{
    let a1 = 0,
        a2 = 1,
        a3 = a1 + a2;
    while (a3 <= num)
    {
        if (a3 == num)
            return document.getElementById("alerts").innerText = `${a1} + ${a2} = ${a3}`;
        ++a2;
        a1 = a2; a3 = a1 + a2;
    }
    return -1;
}
