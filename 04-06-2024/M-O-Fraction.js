// Model Object Fraction

let fraction = {
    valueFirst: 46,
    valueSecond: 74
}
function getAddFraction(numerator, denominator)
{
    if (numerator != null && denominator != null
        && numerator < denominator)
        return numerator + denominator;
}
/*. Функция вычитания 2-х объектов-дробей.*/
function getMinusFraction(numerator, denominator)
{
    if (numerator != null && denominator != null
        && numerator < denominator)
        return numerator - denominator;
}
function getMultiplyFraction(numerator, denominator)
{
    if (numerator != null && denominator != null
        && numerator < denominator)
        return numerator * denominator;
}
function getDivideFraction(numerator, denominator)
{
    if (numerator != null && denominator != null
        && numerator < denominator)
        return numerator / denominator;
}
function getAbbreviationFraction(numerator, denominator)
{
    let str = `${numerator}/${denominator}`;
    while (true)
    {
        if (numerator % 2 == 0 && denominator % 2 == 0)
        {
            numerator /= 2;
            denominator /= 2;
            str += ` = ${numerator}/${denominator}`
        }
        else return str += ` = ${numerator/denominator}`;
    }
}