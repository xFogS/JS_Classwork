document.getElementById("selectedOption").onclick = () =>
{
    switch (document.getElementById("selectedOption").value)
    {
        case "1":
        {
            let numbers = prompt(`${document.getElementById("selectedOption").value}:` + "Input two numbers through ','", "");
            document.getElementById("alerts").innerText = getCompareNumbers(numbers.split(',')[0], numbers.split(',')[1]);
            break;
        }
        case "2":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input one number", "");
            document.getElementById("alerts").innerText = getFactorialNumber(value);
            break;
        }
        case "3":
        {
            let numbers = prompt(`${document.getElementById("selectedOption").value}:` + "Input three numbers through ','", "");
            document.getElementById("alerts").innerText = getIntegerNumber(
                Number(numbers.split(',')[0]),
                Number(numbers.split(',')[1]),
                Number(numbers.split(',')[2])
            );
            break;
        }
        case "4":
        {
            let numbers = prompt(`${document.getElementById("selectedOption").value}:` + "Input two numbers through ',' 1.length, 2.width::", "");
            if (numbers.split(',')[0] != null && numbers.split(',')[0] != null)
            {
                document.getElementById("alerts").innerText = getRectangle(
                    numbers.split(',')[0],
                    numbers.split(',')[1],
                );
            }
            else
            {
                if (numbers.split(',')[0] != null && numbers.split(',')[1] == null) {
                    document.getElementById("alerts").innerText = getRectangle(numbers.split(',')[0], null);
                }
                else if (numbers.split(',')[1] != null && numbers.split(',')[0] == null){
                    document.getElementById("alerts").innerText = getRectangle(null, numbers.split(',')[1]);
                }
                else
                    document.getElementById("alerts").innerText = getRectangle(null, null);
            }
            break;
        }
        case "5":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input num", "");
            document.getElementById("alerts").innerText = getPerfectNumber(value);
            break;
        }
        case "6":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input range start and finish through ','", "");
            getRangeOfThePerfectNumber(
                value.split(',')[0],
                value.split(',')[1]);
            break;
        }
        case "7":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input Datetime format(h,m,s) through ','", "");
            document.getElementById("alerts").innerText = getDatetimeFormat(
                value.split(',')[0],
                value.split(',')[1],
                value.split(',')[2],
            );
            break;
        }
        case "8":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input Datetime format(h,m,s) through ','", "");
            document.getElementById("alerts").innerText = getSecondsFromDateTime(
                value.split(',')[0],
                value.split(',')[1],
                value.split(',')[2]
            );
            break;
        }
        case "9":
        {
            let value = prompt(`${document.getElementById("selectedOption").value}:` + "Input second", "");
            document.getElementById("alerts").innerText = getDateTimeFromCountSeconds(value);
            break;
        }
        case "10":
        {
            document.getElementById("alerts").innerText = "None"
        }
    }
};
//document.getElementById("selectedOption").onclose = () => { document.getElementById("selectedOption").value = -1; }
document.getElementById("btnClearChatAlerts").onclick = () => { document.getElementById("alerts").innerText = ""; };

function getCompareNumbers(num1, num2)
{
    if (num1 == num2) return `${num2} == ${num1} = 0`;
    return num1 < num2 ? `${num2} > ${num1} = -1` : `${num1} > ${num2} = 1`;
}
function getFactorialNumber(value)
{
    if (value == 2) return value;
    return value * getFactorialNumber(value - 1);
}
function getIntegerNumber(num1, num2, num3) {
    // console.log(typeof(num1), typeof(num2), typeof(num3))
    return num1 * 100 + num2 * 10 + num3;
}
function getRectangle(length, width)
{
    if (length == null && width == null) return 0;
    else if (length != null && width != null) return length * width;
    return length != null && width == null ? length * length : width * width;
}
function getPerfectNumber(value)
{
    let sum = 0;
    for (let i = 1; i <= parseInt(value/2, 0); ++i) {
        if (value % i == 0) sum += i;
    }
    //if (sum == null) return 0;
    if (sum == value) return `${value} - The perfect number`;
    return `${value} - isn't perfect number`;
}
function getRangeOfThePerfectNumber(start, finish)
{
    if (/*start != null && finish != null && */start > finish)
    {
        let temp = start;
        start = finish;
        finish = temp;
    }

    for (let i = start; i <= finish; ++i){
        document.getElementById("alerts").innerText += getPerfectNumber(i) + '\n'
    }
    return document.getElementById("alerts").innerText;
}
function getDatetimeFormat(hour, min, sec)
{
    if (hour != null)
    {
        if (min == null) min = "00"
        if (sec == null) sec = "00";
    }
    return `${hour}:${min}:${sec}`;
}
function getSecondsFromDateTime(hour, min, sec)
{
    if (hour != null && min != null && sec != null) {
        let hHour = Number(hour),
            mMin  = Number(min),
            sSec  = Number(sec);
        return hHour * 3600 + mMin * 60 + sSec;
    }
}
function getDateTimeFromCountSeconds(value)
{
    let dt = Number(value);
    let hHour = parseInt(dt / 3600, 0);
    let mMin = parseInt(dt  / 60, 0);
    return hHour + ":" + mMin + ":" + dt;
}