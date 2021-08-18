// ********************************************__1__**********************************
let shopListArray = [];
const mission1Input = document.getElementById("mission1Input");
const mission1Btn = document.getElementById("mission1Btn");
mission1Btn.onclick = function () {
    shopListArray.push(mission1Input.value);
    console.log(shopListArray);
}
// ********************************************__1__**********************************


// ********************************************__2__**********************************
const mission2Input1 = document.getElementById("mission2Input1");
const mission2Input2 = document.getElementById("mission2Input2");
const mission2Btn = document.getElementById("mission2Btn");
mission2Btn.onclick = function () {
    let result = Number(mission2Input1.value) + Number(mission2Input2.value);
    return result;
}
// ********************************************__2__**********************************


// ********************************************__3__**********************************
const mission3Btn = document.getElementById("mission3Btn");
mission3Btn.onclick = function () {
    mission3Btn.innerText = Math.round(Math.random() * 100);
}
// ********************************************__3__**********************************


// ********************************************__4__**********************************
let numArray = [];
const mission4Input = document.getElementById("mission4Input");
const mission4Btn = document.getElementById("mission4Btn");
mission4Btn.onclick = function () {
    numArray.push(mission4Input.value);
    console.log(numArray);
}
// ********************************************__4__**********************************


// ********************************************__5__**********************************
const mission5P = document.getElementById("mission5P");
mission5P.onclick = function () {
    mission5P.innerText = Date();
}
// ********************************************__5__**********************************


// ********************************************__6__**********************************
const mission6P = document.getElementById("mission6P");
mission6P.onclick = function () {
    mission6P.innerText = new Date().getHours();
}
// ********************************************__6__**********************************


// ********************************************__7__**********************************
const mission7Btn = document.getElementById("mission7Btn");
mission7Btn.onclick = function () {
    mission7P.innerText = new Date().getFullYear() - mission7Input.value;
}
// ********************************************__7__**********************************


// ********************************************__8__**********************************
numbersArray = [1, 2, 3, 4, 5];
const mission8Btn = document.getElementById("mission8Btn");
mission8Btn.onclick = function () {
    for (let i = 0; i < numbersArray.length; i++) {
        if (mission8Input.value == numbersArray[i]) {
            mission8P.innerText = "your number is here"
            break;
        }
        else {
            mission8P.innerText = "your number is not here"
        }
    }
}
// ********************************************__8__**********************************


// ********************************************__9__**********************************
const mission9Btn = document.getElementById("mission9Btn");

mission9Btn.onclick = function () {
    mission9P1.innerText = mission9Input.value.substring(0, mission9Input.value.indexOf(" "));
    mission9P2.innerText = mission9Input.value.substring(mission9Input.value.indexOf(" "));
}
// ********************************************__9__**********************************


// ********************************************__10__**********************************
const mission10Btn = document.getElementById("mission10Btn");

mission10Btn.onclick = function () {
    if (mission10Input1.value.length > mission10Input2.value.length) {
        console.log(`${mission10Input1.value} is longer then ${mission10Input2.value}`);
    }
    else if (mission10Input1.value.length < mission10Input2.value.length) {
        console.log(`${mission10Input2.value} is longer then ${mission10Input1.value}`);
    }
    else {
        console.log("they the same");
    }
}
// ********************************************__10__**********************************


// ********************************************__12__**********************************
let clientsArray = [];
const mission12Btn = document.getElementById("mission12Btn");

mission12Btn.onclick = function () {
    let obj = {

    }
    obj.fullName = mission12Name.value;
    obj.email = mission12Email.value;
    obj.age = mission12Age.value;
    clientsArray.push(obj);
    console.log(clientsArray);
}
// ********************************************__12__**********************************
