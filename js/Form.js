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
    console.log( "Submitted pin: " + pin)

    if (pin === correctPin) {
        console.log("Correct pin!");
        document.getElementById("correctPinMsg").style.display = "block";
        fuseBoxUnlocked = true;
    }
}