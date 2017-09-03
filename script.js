/* ---------- Create an array to store each Radio Input ---------- */
var radioItem = [];
radioItem[0] = document.getElementsByName("radioBox").item(0);
radioItem[1] = document.getElementsByName("radioBox").item(1);
radioItem[2] = document.getElementsByName("radioBox").item(2);

/* ---------- Create an array to store the section of the Text Fields ---------- */
var inputBox = [];
inputBox[0] = document.getElementById("inputBox1");
inputBox[1] = document.getElementById("inputBox2");
inputBox[2] = document.getElementById("inputBox3");

/* ---------- Create an array to store each Text Fields ---------- */
var inputItem = [];
inputItem[0] = document.getElementById("input1");
inputItem[1] = document.getElementById("input2");
inputItem[2] = document.getElementById("input3");

/* ---------- This function is to check which Radio Input is checked and return the Input Text Fields, if user input somethings and chang the Radio Input, the Text Box will be set to empty ---------- */
function checkRadio() {
    //If the user change the Radio Input, clear the Text Fields
    for(var i=0; i<inputItem.length; i++) {
        inputItem[i].value = "";
    }
    //If the user selects the first Radio Input, do this
    if(radioItem[0].checked == true) {
            inputBox[0].style.display="block";
            inputBox[1].style.display="block";
            inputBox[2].style.display="none";
            document.getElementById("inputLabel1").innerHTML = "Username";
            if(inputItem[0].value != "") {
                document.getElementById("loginBox").style.display = "block";
            }   
            else{
                document.getElementById("loginBox").style.display = "none";
            }
    }
    
    //If the user selects the second Radio Input, do this
    if(radioItem[1].checked == true) {
            inputBox[0].style.display="block";
            inputBox[1].style.display="block";
            inputBox[2].style.display="block";
            document.getElementById("inputLabel1").innerHTML = "New Username";
            if(inputItem[0].value == "") {
                document.getElementById("loginBox").style.display = "none";
            }   
            else if(inputItem[0].value != ""){
                document.getElementById("loginBox").style.display = "block";
            }
    }
    
    //If the user selects the third Radio Input, do this
    if(radioItem[2].checked == true) {
            inputBox[0].style.display="none";
            inputBox[1].style.display="none";
            inputBox[2].style.display="none";
            document.getElementById("loginBox").style.display = "block";
    }
}

/* ---------- This function is to show the Submit button while the Text Fields is not empty ---------- */
function showLogin() {
    //User have to type something into the two required fields to show up the Submit button
    if(radioItem[0].checked == true) {
        if(inputItem[0].value != "" && inputItem[1].value != "") {
            document.getElementById("loginBox").style.display = "block";
        }   
        else{
            document.getElementById("loginBox").style.display = "none";
        }
    }
    //User have to type something into the three required fields to show up the Submit button
    if(radioItem[1].checked == true) {
        if(inputItem[0].value != "" && inputItem[1].value != "" && inputItem[2].value != "") {
            document.getElementById("loginBox").style.display = "block";
        }   
        else{
            document.getElementById("loginBox").style.display = "none";
        }
    }
}

/* ---------- This function is to check whether the Text Fields are empty, if so, return a Request Box to the user, otherwise, hide the Radio Box & Text Fields and show the welcome text according to the Radio Checked ---------- */
function inputEmpty() {
    if(radioItem[0].checked == true) {
            document.getElementById("radioContainer").style.display = "none";
            document.getElementById("inputContainer").style.display = "none";
            document.getElementById("loginBox").style.display = "none";
            var welcome = document.getElementById("welcome");
            welcome.style.display = "block";
            welcome.innerHTML = "<h2>Welcome Back" + ", " + inputItem[0].value + "!" + "</h2>" ;
    }
    else if(radioItem[1].checked == true) {
        if(checkPassword() == true) {
            document.getElementById("radioContainer").style.display = "none";
            document.getElementById("inputContainer").style.display = "none";
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("changeBox").style.display = "block";
            
            //If the password less than 5 characters, show the Caution
            if(inputItem[1].value.length < 5) {
                document.getElementById("caution").style.display = "block";
            }
            else {
                document.getElementById("caution").style.display = "none";
            }
            var welcome = document.getElementById("welcome");
            welcome.style.display = "block";
            welcome.innerHTML = "<h2>Welcome" + ", " + inputItem[0].value + "!" + "</h2>" ;
        }
    }
    
    else if(radioItem[2].checked == true) {
        document.getElementById("radioContainer").style.display = "none";
        document.getElementById("inputContainer").style.display = "none";
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("createBox").style.display = "block";
        var welcome = document.getElementById("welcome");
        welcome.style.display = "block";
        welcome.innerHTML = "<h2>Welcome, Guest!</h2>" ;
    }
}

/* ---------- This function is to check whether the password is matched ---------- */
function checkPassword() {
        if(inputItem[1].value != "" && inputItem[2].value != "" && inputItem[1].value != inputItem[2].value) {
            document.getElementById("notMatch").style.display = "block";
            return false;
        }
        else {
            document.getElementById("notMatch").style.display = "none";
            return true;
        }
}

/* ---------- This is the Bonus Parts for 5b ---------- */

/* ---------- Create an array to store each Text Fields in the Bonu Part ---------- */
inputItem[3] = document.getElementById("input1_bonus");
inputItem[4] = document.getElementById("input2_bonus");
inputItem[5] = document.getElementById("input3_bonus");

/* ---------- If the user chooses to change password, change to a new form ---------- */
function changePassword() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box_bonus").style.display = "block";
    document.getElementById("loginBox_bonus").style.display = "none";
}

/* ---------- If the user chooses not to change password, hide the buttons ---------- */
function noChangePassword() {
    document.getElementById("changeBox").style.display = "none";
}

/* ---------- This function is to show the Submit button while the Text Fields is not empty ---------- */
function showLogin_bonus() {
    //User have to type something into the three required fields to show up the Submit button
        if(inputItem[3].value != "" && inputItem[4].value != "" && inputItem[5].value != "") {
            document.getElementById("loginBox_bonus").style.display = "block";
        }   
        else{
            document.getElementById("loginBox_bonus").style.display = "none";
        }
}

/* ---------- This function is to check whether the password is matched ---------- */
function checkPassword_bonus() {
        if(inputItem[4].value != "" && inputItem[5].value != "" && inputItem[4].value != inputItem[5].value) {
            document.getElementById("notMatch_bonus").style.display = "block";
        }
        else {
            document.getElementById("notMatch_bonus").style.display = "none";
        }
}

/* ---------- This function is to check the whether the Old Passwords match ---------- */
function samePassword() {
    console.log(inputItem[1].value);
    console.log(inputItem[3].value);
    
    //If the Old Passwords match, show a message to tell user the password is changed
    if(inputItem[1].value == inputItem[3].value) {
        document.getElementById("inputContainer_bonus").style.display = "none";
        document.getElementById("loginBox_bonus").style.display = "none";
        var welcome = document.getElementById("welcome_bonus");
        welcome.style.display = "block";
        welcome.innerHTML = "<h2>Your password has been changed.</h2>" ;
        //If the password less than 5 characters, show the Caution
        if(inputItem[4].value.length < 5) {
            document.getElementById("caution_bonus").style.display = "block";
        }
        else {
            document.getElementById("caution_bonus").style.display = "none";
        }
    }
    
    //If the Old Passwords don't match, show a error message to the user
    else {
        document.getElementById("wrongPassword_bonus").style.display = "block";
    }
}

/* ---------- This is the Bonus Parts for 5c ---------- */

/* ---------- If the user chooses to create a new account, brings back up the original login/new account screen  ---------- */
function createAccount() {
    //Set the default selected Radio button to "New Account"
    radioItem[0].checked = false;
    radioItem[1].checked = true;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("createBox").style.display = "none";
    document.getElementById("radioContainer").style.display = "block";
    document.getElementById("inputContainer").style.display = "block";
    //calls the checkRadio function
    checkRadio();
}

/* ---------- If the user chooses not to create a new account, hide the buttons ---------- */
function noCreateAccount() {
    document.getElementById("createBox").style.display = "none";
}
