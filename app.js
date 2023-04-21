// TASK 1

// var amount = prompt("Enter your Amount")
// var zakat = amount / 40
// alert(zakat)

// TASK 2:

// var FamilyMembers = prompt("Enter the total number of family members")
// var method = prompt("Fitrah Method: 1.Wheat=250, 2.Kishmish=320, 3.Dates=960")
// var wheat = 250 * FamilyMembers;
// var Kishmish = 320 * FamilyMembers
// var Dates = 960 * FamilyMembers;

// if (method == 1) {
//     alert("Amount Of Wheat is: " + wheat)
// }
// else if (method == 2) {
//     alert("Amount Of Kishmish is: " + Kishmish)
// }
// else if (method == 3) {
//     alert("Amount Of Dates is: " + Dates)
// } else {
//     alert("Invalid Option!")
// }

// TASK 3

// var secretNumber = prompt("enter a guess for the secret number")
// if (secretNumber == 5) {
//     alert("Congratulations! You guessed the secret number")
// }
// else if (secretNumber > 5) {
//     alert("The Guess is too High,Try Again!")
// } else if (secretNumber < 5) {
//     alert("The Guess is too Low,Try Again!")
// }

// TASK 4:


// var username = prompt("Enter your name")
// var first = username.charAt(0)
// var remaining = username.slice(1);
// var merge = first.toUpperCase() + remaining.toLowerCase()
// alert(merge)

// TASK 5:

// contactName = [];
// contactNumber = [];

// for (var i = 0; i < 3; i++) {
//     contactName.push(prompt("Enter your Contact Name:" + (i + 1)))
//     contactNumber.push(prompt("Enter your Contact Number: " + (i + 1)))
// }

// for (var j = 0; j < 3; j++) {
//     document.write("Name: " + contactName[j] + " Contact Number: " + contactNumber[j] + "<br>")
// }

// TASK 6:

// var products = ["(1): Biryani", "(2): Karahi", "(3): Zinger Roll", "(4): French Fries", "(5): Ice-Cream", "(6): Soft drink"]

// var productPrompt = "Which product do you want? Please enter item number \n"

// for (var index = 0; index < products.length; index++) {
//     productPrompt += products[index] + "\n"
// }
// var itemToRemove = +prompt(productPrompt) - 1
// console.log("User selected: " + products[itemToRemove])
// products = products.slice(0, itemToRemove).concat(products.slice(itemToRemove + 1));
// console.log("Remaining products: " + products.length + "\n" + products)

// TASK 7:

// var nationality = prompt("Enter your Nationality");
// var gender = prompt("Gender");
// var age = +prompt("Enter your Age");
// var martialStatus;

// if (nationality == "pakistani" || nationality == "Pakistani" || nationality == "Indian" || nationality == "indian") {
//     if (age >= 18 && gender == "male") {
//         alert("You are 18+,You are eligible for Vote");
//     }
//     else if (age >= 18 && gender == "female") {
//         martialStatus = prompt("Are you Married or Not")
//         if (martialStatus == "yes") {
//             alert("You are married and u r eligible for vote")
//         }


//         else {
//             alert("you are not Married Not eligible for vote");
//         }
//     }

//     else {
//         alert("you are Below 18,Not eligible for Vote");
//     }

// }

// else {
//     alert("you are not Pakistani or Indian");
// }

// TASK 8:

// var WorldCupSquad = ["Imam-ul-Haq", "Fakhar Zaman", "Shan Masood", "Babar Azam (c)", "Haris Sohail",
//     "Khushdil Shah", "Mohammad Rizwan (wk)", "Mohammad Haris", "Shadab Khan ", "Mohammad Nawaz",
//     "Agha Salman", "Iftikhar Ahmed", "Shaheen Shah Afridi", "Naseem Shah", "Haris Rauf",]

// document.write("<h1> WorldCup Squad(15):</h1>" + "<br><br>" + "<h2>" + WorldCupSquad + "</h2>" + "<br><br>")


// var finalTeamPlayers = WorldCupSquad.slice(0, 11)

// document.write("<h1>Selected Players(11):</h1>" + "<br><br>" + "<h2>" + finalTeamPlayers + "</h2>")
