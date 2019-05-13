var form = document.querySelector('form');
var form_showing = false;
var correctPin = "957";


// Show/hide/toggle form div itself
var showForm = function() {
    document.getElementById("pinEnter").style.display = "block";
    form_showing = true;
}

var hideForm = function() {
    document.getElementById("pinEnter").style.display = "none";
    form_showing = false;
}

var toggleForm = function() {
    if (form_showing)
        hideForm()
    else
        showForm()
}

// Show/hide/toggle the bocker and the form - to be used when interacting with the fuse box
var showPinEnter = function() {
    blocker.style.display = 'block';
    document.getElementById('instructions').style.display = 'none';
    showForm();
}

var hidePinEnter = function() {
    blocker.style.display = 'none';
    hideForm();
}

var togglePinEnter = function() {
    if (form_showing)
        hidePinEnter()
    else
        showPinEnter()
}

// Callback function to check that the pin is correct
var checkPin = function() {
    const formData = new FormData(form);
    let pin = formData.get("pin");
    console.log("Submitted pin: " + pin);

    if (pin === correctPin) {
        console.log("Correct pin!");
        document.getElementById("correctPinMsg").style.display = "block";
        form.style.display = "none";
        fuseBoxUnlocked = true;
    }
}

var updateInstructions = function(htmlString) {
    document.getElementById("instructions").innerHTML = htmlString;
}

var showFuseActivated = function() {
    console.log("showFuseActivated called")
    var hintText = "The fuse box has been fixed! The room's security system is now activated."
    blocker.style.display = 'block';
    updateInstructions(hintText);
    document.getElementById('instructions').style.display = '';
    hideForm();
}
var showFuseStillBroken = function() {
    console.log("showFuseStillBroken called")
    var hintText = "Fuse box is still broken! You can't use the sensor yet."
    blocker.style.display = 'block';
    updateInstructions(hintText);
    document.getElementById('instructions').style.display = '';
    hideForm();
}
var showDoorUnlocked = function() {
    console.log("showDoorUnlocked called")
    var hintText = "The door has been unlocked and Prof. Finkelstein is inside!"
    blocker.style.display = 'block';
    updateInstructions(hintText);
    document.getElementById('instructions').style.display = '';
    hideForm();
}
var showCongratulations = function() {
    var hintText = "Congratulations! You have solved the puzzle!<br><br> You successfully escaped Firestone and found Professor Finkelstein. <br><br> He gave you an A+ on the Graphics final project!"
    blocker.style.display = 'block';
    updateInstructions(hintText);
    document.getElementById('instructions').style.display = '';
    hideForm();
}
var showElevatorButton = function() {
    var hintText = "The elevator seems to be broken... You can't use it."
    blocker.style.display = 'block';
    updateInstructions(hintText);
    document.getElementById('instructions').style.display = '';
    hideForm();
}

var showHint = function() {
    var hintText = "<img id=\"hint\" src=\"img/scrap_hint1.png\">";

    blocker.style.display = 'block';
    updateInstructions(hintText);
    document.getElementById('instructions').style.display = 'block';
    hideForm();
}

var showRRR = function() {
    var imgHtml = "<img id=\"RRR\" src=\"img/rrr_book.png\">"

    blocker.style.display = 'block';
    updateInstructions(imgHtml);
    document.getElementById('instructions').style.display = 'block';
    hideForm();
}

var showCheck = function() {
    var imgHtml = "<br><br><br><br><br> You have found a check from the Housing Office!<br><br> Are you a senior in the bottom quarter of your class?<br><br><br><br>"
    imgHtml += "<img id=\"checkImg\" src=\"img/housing_check.png\">";

    blocker.style.display = 'block';
    updateInstructions(imgHtml);
    document.getElementById('instructions').style.display = 'block';
    hideForm();
}

var showPhone = function() {
    var imgHtml = "<img id=\"phoneImg\" src=\"img/message.png\">";

    blocker.style.display = 'block';
    updateInstructions(imgHtml);
    document.getElementById('instructions').style.display = 'block';
    hideForm();
}

var showInstructions = function() {
    var instrHtml = "<span style=\"font-size:40px\">Looking for Finkelstein?</span>"
    instrHtml += "<br /><br>"
    instrHtml += "Welcome to Firestone!<br><br>"
    instrHtml += "You need to submit your 426 Dean's Date assignment but you can't find your Graphics professor! Gather clues to find him. <br><br>"
    instrHtml += "Special objects you collect will appear in your inventory at the bottom of the screen. You may select them to use them on other objects in the scene, as appropriate.<br><br>"
    instrHtml += "Move forward and backward with Up and Down keys. Rotate views with your mouse.<br><br>"
    instrHtml += "Press Enter to toggle between walking mode and cursor mode. <br><br>"
    instrHtml += "Press H to view these instructions again. <br> <br>"
    instrHtml += "Click anywhere to continue."

    blocker.style.display = 'block';
    updateInstructions(instrHtml);
    document.getElementById('instructions').style.display = '';
    hideForm();
}

var hideInstructions = function() {
    blocker.style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    hideForm();
}
