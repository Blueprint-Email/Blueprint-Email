
/*
Blueprint Mail App
 */

var index = 0;
var nextSee = false; var deleteSee = false; var forwardSee = false; var replySee = false;

document.addEventListener("keydown", event => {
    var key = event.which;
    switch (key) {
        case 37 : { deleteMail(); break; }
        case 38 : { forwardMail(); break; }
        case 39 : { nextMail(); break; }
        case 40 : { replyMail(); break; }
    }
    document.getElementById("demo").innerHTML = "The Unicode KEY code is: " + key;
});

function loadMSG(index) {
var header;
var body;
var attachments;

}

function nextMail() {
    if (!nextSee) { document.getElementById("delete").style.visibility = "visible"; nextSee = true; }
    else { document.getElementById("delete").style.visibility = "hidden"; nextSee = false; }
    var nextIndex = (index + 1) % (PUT HERE: num of emails);
    loadMSG(nextIndex);
}

function deleteMail() {
    if (!deleteSee) { document.getElementById("delete").style.visibility = "visible"; deleteSee = true; }
    else { document.getElementById("delete").style.visibility = "hidden"; deleteSee = false; }
}

function replyMail() {
    if (!replySee) { document.getElementById("delete").style.visibility = "visible"; replySee = true; }
    else { document.getElementById("delete").style.visibility = "hidden"; replySee = false; }
}

function forwardMail() {
    if (!forwardSee) { document.getElementById("delete").style.visibility = "visible"; forwardSee = true; }
    else { document.getElementById("delete").style.visibility = "hidden"; forwardSee = false; }
}