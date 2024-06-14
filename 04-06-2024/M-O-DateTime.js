let timeBD = {
    hour: 20,
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
function setNewTimeOnlySecond(dtObj, sec)
{
    dtObj.second = sec;
    if (dtObj.second >= 60) {

        //take seconds, not minutes
        let endSecThoughPoint = (dtObj.second / 60).toString().split('.')[1];
        dtObj.minute += parseInt((dtObj.second / 60), 0);
        //set new second
        dtObj.second = Number(endSecThoughPoint);
        if (dtObj.minute >= 60) {
            dtObj.hour += parseInt((dtObj.minute / 60), 0); dtObj.minute = 0
            if (dtObj.hour >= 24)
                dtObj.hour = 0;

        }
    }
    return dtObj.hour+':'+dtObj.minute+':'+dtObj.second;
}
function setNewTimeOnlyMinute(dtObj, min) { return undefined; }
function setNewTimeOnlyHour(dtObj, hour) { return undefined; }