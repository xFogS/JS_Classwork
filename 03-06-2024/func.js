document.getElementById("selectedOption").onclick = () =>
{
    switch (document.getElementById("selectedOption").value)
    {
        case "1":
        {
            let numbers = prompt(`${document.getElementById("selectedOption").value}:` + "Input two numbers through ','", "");
            document.getElementById("alerts").innerText = GetCompareNumbers(numbers.split(',')[0], numbers.split(',')[1]);
            break;
        }
        case "2":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input one number", "");
            document.getElementById("alerts").innerText = GetFactorialNumber(value);
            break;
        }
        case "3":
        {
            let numbers = prompt(`${document.getElementById("selectedOption").value}:` + "Input three numbers through ','", "");
            document.getElementById("alerts").innerText = GetIntegerNumber(
                parseInt(numbers.split(',')[0]),
                parseInt(numbers.split(',')[1]),
                parseInt(numbers.split(',')[2])
            );
            break;
        }
        case "4":
        {
            let numbers = prompt(`${document.getElementById("selectedOption").value}:` + "Input two numbers through ',' 1.length, 2.width::", "");
            document.getElementById("alerts").innerText = GetRectangle(
                parseInt(numbers.split(',')[0]),
                parseInt(numbers.split(',')[1]),
            );
            break;
        }
    }
};
//document.getElementById("selectedOption").onclose = () => { document.getElementById("selectedOption").value = -1; }
document.getElementById("btnClearChatAlerts").onclick = () => { document.getElementById("alerts").innerText = ""; };

function GetCompareNumbers(num1, num2)
{
    if (num1 == num2) return `${num2} == ${num1} = 0`;
    return num1 < num2 ? `${num2} > ${num1} = -1` : `${num1} > ${num2} = 1`;
}
function GetFactorialNumber(value)
{
    if (value == 2) return value;
    return value * GetFactorialNumber(value - 1);
}
function GetIntegerNumber(num1, num2, num3) {
    // console.log(typeof(num1), typeof(num2), typeof(num3))
    return num1 * 100 + num2 * 10 + num3;
}
function GetRectangle(length, width)//fix tomorrow
{
    console.log(length, width);
    if (length == null && width == null) return 0;
    else if (length != null && width != null) return length * width;
    return length != null && width == null ? Math.sqrt(length) : Math.sqrt(width);
}