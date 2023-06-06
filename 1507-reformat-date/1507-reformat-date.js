/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let splitDate = date.split(' ');
    const months = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
    }
    let res = [ splitDate[2], months[splitDate[1]] ];
    if (splitDate[0].length === 4) {
        res.push(splitDate[0].slice(0, splitDate[0].length-2))
    } else {
        res.push('0' + splitDate[0].slice(0, splitDate.length-2))
    }
    return res.join('-');
};