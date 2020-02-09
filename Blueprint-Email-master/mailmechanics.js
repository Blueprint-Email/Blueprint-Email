
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

var data = {"1": {"body": "Email is too cluttered <br>All that text--can you even read anything?</br><br>Too many clicks</br>", "subject": "The Problem"}, "2": {"body": "Email with Tinder mechanics <br>Swipe to trash, reply, forward, or keep reading</br>", "subject": "Our Product"}, "3": {"body": "Python scraper <br>Web app</br>", "subject": "How It Works"}, "4": {"body": "Phone app <br>Images and attachments</br><br>UI + UX</br>", "subject": "The Future"}}
var subjects = [];
var bodies = [];
for (var email in data){
    subjects.push(data[email]["subject"])
    bodies.push(data[email]["body"])    
}
console.log(subjects)
console.log(bodies)

function loadMSG(index) {
    var subject = subjects[index];
    var bodtext = bodies[index];
    
    document.getElementById("body").innerHTML = bodtext;
    document.getElementById("subject").innerHTML = subject;

    

//var attachments;

}

function nextMail() {
    //if (!nextSee) { window.document.getElementById("next").style.visibility = "visible"; nextSee = true; }
    //else { window.document.getElementById("next").style.visibility = "hidden"; nextSee = false;}
    var nextIndex = (index + 1) % (bodies.length);
    loadMSG(nextIndex);
    index = nextIndex;
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