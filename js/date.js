//Covert datetime by GMT offset 
//If toUTC is true then return UTC time other wise return local time
function convertLocalDateToUTCDate(raw_date, toUTC) {
    date = new Date(raw_date);
    //Local time converted to UTC
    //console.log("Raw: " + raw_date);
    //console.log("Time: " + date);
    var localOffset = date.getTimezoneOffset() * 60000;
    var localTime = date.getTime();
    if (toUTC) {
        date = localTime + localOffset;
    } else {
        date = localTime - localOffset;
    }
    date = new Date(date);
    //console.log("Converted time: " + date);
    return date;
}


function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    var month = date.getMonth()+1;
    return date.getFullYear() + '-' + month + "-" + date.getDate() + ' ' + strTime;
    //return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}


function find(){
	var x = document.getElementsByClassName("utc_datetime");
	var i;
	for (i = 0; i < x.length; i++) {
	    x[i].innerHTML = formatDate(convertLocalDateToUTCDate(x[i].textContent, false));
	}
}

