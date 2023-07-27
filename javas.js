
function addData() {
  
   const userid = document.getElementById("userid").value;
   const name = document.getElementById("name").value;
   const age = document.getElementById("age").value;
   const url = document.getElementById("url").value;
   const designation = document.getElementById("designation").value;
   const gender = document.getElementById("gender").value;


   
   document.getElementById("id_error").innerText = "";
   document.getElementById("name_error").innerText = "";
   document.getElementById("age_error").innerText = "";
   document.getElementById("url_error").innerText = "";
   document.getElementById("des_error").innerText = "";

   let isValid = true; // Flag 
   const allids = JSON.parse(localStorage.getItem('enterIDs'));

    if (allids.some(item => item == userid)) {
        document.getElementById("id_error").innerHTML = "This ID is already exist";
        isValid = false;
  }
   if (userid.trim() === "") {
       document.getElementById("id_error").innerText = "ID is required";
       isValid = false;
   } else if (!isValidId(userid)) {
       document.getElementById("id_error").innerText =
           "ID must contain only digits.";
       isValid = false;
   }

   if (name.trim() === "") {
       document.getElementById("name_error").innerText = "Name is required";
       isValid = false;
   } else if (!isValidName(name)) {
       document.getElementById("name_error").innerText =
           "Name must contain only alphabets";
       isValid = false;
   }

   if (age.trim() === "") {
      document.getElementById("age_error").innerText = "Age is required";
      isValid = false;
  } else if (!isValidAge(age)) {
      document.getElementById("age_error").innerText =
          "Enter a valid age (between 18 and 60).";
      isValid = false;
  }

   if (url.trim() === "") {
       document.getElementById("url_error").innerText = "URL is required";
       isValid = false;
   } else if (!isValidUrl(url)) {
       document.getElementById("url_error").innerText = "Enter a valid URL";
       isValid = false;
   }

   if (designation.trim() === "") {
       document.getElementById("des_error").innerText = "Designation is required";
       isValid = false;
   }

   if (isValid) {
       // If all validations pass, save data to local storage
       const dataObj = {
           userid: userid,
           name: name,
           age: age,
           url: url,
           designation: designation,
           gender: gender
       };
       const allids = JSON.parse(localStorage.getItem('enterIDs')) || []
       allids.push(userid);
       localStorage.setItem('enterIDs', JSON.stringify(allids));

       const dataStored = JSON.parse(localStorage.getItem("userData")) || [];
       
       dataStored.push(dataObj);
       const jsonData = JSON.stringify(dataStored);
       
       localStorage.setItem("userData", jsonData);

       console.log("Data added to local storage:", dataObj);

      
       window.location.href = "table.html";
   } else {
       console.log("Form submission prevented. Please check the input fields.");
   }
}



function isValidId(userid){
   //Expression to check is id contain only numbers.
   const idRegx = /^\d+$/;
   return idRegx.test(userid);
}

function isValidName(name){
   // Expression to check is name contain only alphabets.
   const nameRegx = /^[a-zA-Z\s]+$/;
   return nameRegx.test(name);
}

function isValidAge(age) {
   const ageNumber = parseInt(age);
   return !isNaN(ageNumber) && ageNumber >= 18 && ageNumber <= 60;
}

function isValidUrl(url){
   //Expression to check is URL correct
   const urlRegx = /^(ftp|http|https):\/\/[^ "]+$/;
   return urlRegx.test(url);
}


