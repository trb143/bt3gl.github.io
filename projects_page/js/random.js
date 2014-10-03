// Javascript message by array
var message = new Array();
local_message = "Hello visitor"// from "+geoplugin_city()+", "+geoplugin_countryName() + "!";
message[0] = "<h2>..::--- <u>" + local_message + "</a></u>  ---::..</h2>";
message[1] = "<font color='54C571'>The random page is just a random page.</font><br> Everything is random there...<font color='54C571'> are you sure you can handle the random???</font><br><br>Well... then you should go ahead...</font>";
message[2] = "<font color='54C571'><a href='http://dev.mariwahl.us/html_files/byte.html'><h1>Enter the Random</h1></a></font>";

// variables
var MSG1 = message[0].split("");
var MSG2 = "";
var MSG3 = "";
var CT1 = 0;
var CT2 = 0;
var TIMEOUT = 30;


function writeMessage() {
    MSG2 = MSG3 + "<font color='#66FF33>" + MSG1[CT1] + "</font>";
    MSG3 += MSG1[CT1];
    document.all["nothing"].innerHTML = MSG2;

    if (CT1 < MSG1.length - 1) {
        CT1++;
        setTimeout('writeMessage()', TIMEOUT);
    } else {
        CT1 = 0;
        if (CT2 != 15) {
            CT2++;
            MSG3 += "<p>";
            MSG1 = eval('message[' + CT2 + '].split("")');
            setTimeout('writeMessage()', TIMEOUT);
        }
    }
}

