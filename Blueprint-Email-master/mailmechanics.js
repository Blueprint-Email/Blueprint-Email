
/*
Blueprint Mail App
 */

var index = 0;
var nextSee = false; var deleteSee = false; var forwardSee = false; var replySee = false;

function choose(event){
    var key = event.which;
    switch (key) {
        case 37 : { deleteMail(); break; }
        case 38 : { forwardMail(); break; }
        case 39 : { nextMail(); break; }
        case 40 : { replyMail(); break; }
    }
}

window.document.addEventListener("keydown", choose); 

var data = {"1": {"body": "body1", "subject": "subject 1"}, "2": {"body": "body2", "subject": "subject 2"}, "3": {"body": "body3", "subject": "subject 3"}, "4": {"body": "body4", "subject": "subject 4"}}



function loadMSG(index) {
    var header;
    var body;
    for (var email in data){
        var subj = email["subject"];
        var bod = email["body"];
    }
    header = window.document.getElementById("body");
    body = window.document.getElementById("subject");

    header.innerHTML = "Hello";
    body.innerHTML = bod;
    

//var attachments;

}

function nextMail() {
    if (!nextSee) { window.document.getElementById("next").style.visibility = "visible"; nextSee = true; }
    else { window.document.getElementById("next").style.visibility = "hidden"; nextSee = false; }
    var nextIndex = (index + 1) % (9);
    loadMSG(nextIndex);
}

function deleteMail() {
    if (!deleteSee) { window.document.getElementById("trash").style.visibility = "visible"; deleteSee = true; }
    else { window.document.getElementById("trash").style.visibility = "hidden"; deleteSee = false; }
}

function replyMail() {
    if (!replySee) { window.document.getElementById("reply").style.visibility = "visible"; replySee = true; }
    else { window.document.getElementById("reply").style.visibility = "hidden"; replySee = false; }
}

function forwardMail() {
    if (!forwardSee) { window.document.getElementById("forward").style.visibility = "visible"; forwardSee = true; }
    else { window.document.getElementById("forward").style.visibility = "hidden"; forwardSee = false; }
}