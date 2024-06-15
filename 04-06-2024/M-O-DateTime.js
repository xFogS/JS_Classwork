let timeBD = {
    hour: 2,
    minute: 30,
    second: 0
}
function getFullTime(dtObj)
{
    let str = "";
    for (dt in dtObj)
        str += dt + ' ' + dtObj[dt] + '\n';
    return str;
}
//of course, it doesn't perfect
function setNewTimeOnlySecond(dtObj, sec)
{
   dtObj.second += sec;
   //take seconds, not minutes
   let endSecThoughPoint = (dtObj.second / 60).toString().split('.')[1];
   dtObj.minute += Number(dtObj.second / 60);
   console.log(dtObj.minute)


   if (dtObj.minute < 10) dtObj.minute = '0' + `${dtObj.minute}`;
   else if (dtObj.minute >= 60) {
       dtObj.hour += parseInt((dtObj.minute / 60), 0);
       dtObj.minute -= Number(parseInt(dtObj.second / 60, 0)); //sec need here
       if (dtObj.hour < 10)
           dtObj.hour = '0'+ `${dtObj.hour}`;
        }
    //set new second
    dtObj.second = Number(endSecThoughPoint);
    if (isNaN(dtObj.second) === true) dtObj.second = '00'; //if our Number(endSecThoughPoint) is NaN

    return dtObj.hour+':'+dtObj.minute+':'+dtObj.second;
}
function setNewTimeOnlyMinute(dtObj, min) { return setNewTimeOnlySecond(dtObj, min * 60); }
function setNewTimeOnlyHour(dtObj, hour) { return setNewTimeOnlySecond(dtObj, hour * 3600); }