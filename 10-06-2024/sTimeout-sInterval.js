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
    if (x == null || y == null) return -1;
    let r = x % y;
    if (r == 0)
        return y; // we find Nod
    x = y; y = r;
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

    return getSimpleNum(num, ++divisor)
}
//all multiply
callGetElementByIdAndFunc("btnAllMultiplyNum", getAllMultiply, "AllMultiply");
function getAllMultiply(num, startMultiply = 2)
{
    if (getSimpleNum(num) === true)
        return "it's a simple num"

    let i = startMultiply;
    if (i >= num)
        return "Error/Change num"

    for (let j = 1; j <= i; ++j)
    {
        if ((i * j) == num)
            return `${i} * ${j} = ${num}`
        for (let k = 1; k <= j; ++k)
        {
            if ((i * j * k) == num)
                return `${i} * ${j} * ${k} = ${num}`
        }
    }
    return getAllMultiply(num, ++i)
}

callGetElementByIdAndFunc("btnFindFibonacciNum", getFibonacci, "Fibonacci")
function getFibonacci(num, a1 = 0, a2 = 1, a3 = 1)
{
    if (a3 > num) return `${num}\nnot fibonacci`

    if (a3 == num)
        return `${a1} + ${a2} = ${a3}\nit fibonacci`;
    return getFibonacci(num, a1 = a2, a2 = a3, a3 = a1 + a2)
}
