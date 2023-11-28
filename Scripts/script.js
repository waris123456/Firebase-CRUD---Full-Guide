import { app, appDatabase, ref, set, get, child, remove, usersRef, dbRef } from "../Firebase/firebaseConfig.js";

var cnic = document.getElementById("cnic")
var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")

var addUserBtn = document.getElementById("addUserBtn")
var retriveUserBtn = document.getElementById("retriveUserBtn")
var updateUserBtn = document.getElementById("updateUserBtn")
var deleteUserBtn = document.getElementById("deleteUserBtn")
var fileInput = document.getElementById("fileInput")
var uploadButton = document.getElementById("uploadButton")


// Add User
function addUsers(fname, lname, cnic, email) {
    set(ref(appDatabase, "users/" + cnic.value), {
        name: {
            firstName: fname.value,
            lastName: lname.value
        },
        email: email.value,
    }).then((result) => {
        console.log("User Added Succesfully")
    }).catch((error) => {
        console.error("Error", error)
    })
}

// Update User Data
function updateUserData(fname, lname, cnic, email) {
    set(ref(appDatabase, "users/" + cnic.value), {
        name: {
            firstName: fname.value,
            lastName: lname.value
        },
        email: email.value,
    }).then((result) => {
        console.log("User Added Succesfully")
    }).catch((error) => {
        console.error("Error", error)
    })
}

// Retriving User Data
function retriveUserData(cnic) {
    get(child(dbRef, `users/${cnic.value}`)).then((snapshot) => {
        if (snapshot.exists()) {
            var userData = snapshot.val()
            fname.value = userData.name.firstName
            lname.value = userData.name.lastName
            email.value = userData.email
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

// Deleting User Data
function deleteUserData(cnic) {
    set(ref(appDatabase, "users/" + cnic.value), {
        name: {
            firstName: null,
            lastName: null
        },
        email: null,
    }).then((result) => {
        console.log("Data Removed Successfully")
    }).catch((error) => {
        console.error("Error", error)
    })
}

// Adding Event Listener
addUserBtn.addEventListener('click', function () {
    addUsers(fname, lname, cnic, email);
})
retriveUserBtn.addEventListener('click', function () {
    retriveUserData(cnic)
})
updateUserBtn.addEventListener('click', function () {
    updateUserData(fname, lname, cnic, email)
})
deleteUserBtn.addEventListener('click', function () {
    deleteUserData(cnic)
})