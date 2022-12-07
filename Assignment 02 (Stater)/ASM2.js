'use strict';
// Đặt tên biến cho các from
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
//const tbodyEl = document.getElementById("tbody");
const content = document.getElementById("content");
const tableBodyEl =document.getElementById("tbody")
const dangerBtn = document.querySelector('.btn-danger')
var healthyPetArr = [];
const healthyBtn = document.getElementById("healthy-btn")
const CalculateBtn = document.getElementById("calculate-btn")
const sidebar = document.getElementById("sidebar")//Asm2
const sidebarTitle = document.getElementById('sidebar-title')
var showBMI = false;

//render pet stored in localStorage
renderTableData(petArr);

submitBtn.addEventListener('click', function (e,) {
    const data = {
        id: idInput.value,
        name: nameInput.value,
        age: parseInt(ageInput.value),
        type: typeInput.value,
        weight: parseInt(weightInput.value),
        
        height: parseInt(lengthInput.value),
        color: colorInput.value,
        breed: breedInput.value,
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked,

        date: new Date(),
 calculateBMI: function () {   
            if(this.type === 'Dog'){
                console.log(this.weight);
                return (this.weight * 703 / (this.height * this.height)).toFixed(2);
            }else{

               return (this.weight * 886 / (this.height * this.height)).toFixed(2);
            }
           
        }
    }
    //console.log(weightInput.value);
    //console.log(lengthInput.value);
    console.log(data);

// for(let i = 0;i < petArr.length; i++)
//     if(id[i] === petArr){
//        idInput('ID must unique!')
//     }

// Bổ sung Animation cho Sidebar ASM2
sidebar.onclick = function() {
    myfunctin ()
}
function myfunctin() {
    sidebarTitle.classList.toggle('show')
}
const validate = validateData(data);
console.log(validate);

if (validate) {
petArr.push(data);
console.log(petArr);
saveToStorage('petArr', petArr);
showBMI = false;
clearInput();
renderTableData(petArr)
}
// console.log(data)
});
CalculateBtn.addEventListener('click', function(e,){
    showBMI = true;
    renderTableData(petArr);
  })



// let id = idInput;
//  alert(id) = "ID must unique!";
//  alert(ageInput) = "Age must be between 1 and 15!";
// alert(weightInput) =  "Weight must be between 1 and 15!";
// alert(lengthInput) =  "Length must be between 1 and 100!";

function validateData(data){
    //Kiểm tra từng lỗi, nếu có lỗi thì thông báo và return false;
    if(data.id == ""){
        alert('Please input for id');
        return false;
    }
    for(let i = 0; i < petArr.length; i++){
        if(data.id === petArr[i].id){
            alert('ID must unique!');
            return false;
        }
    }
    if(data.name == ""){
        alert('Please input for name');
        return false;
    }
    if(data.age < 1 || data.age > 15){
alert(`Age must be between 1 and 15!`);
return false;
    }
    if(data.weight < 1 || data.weight > 15){
        alert(`Weight must be between 1 and 15!`);
        return false;
    }

    if(data.height <1 || data.height > 100){
        alert(`Length must be between 1 and 100!`);
        return false;
    }
    if(data.type === "Select Type"){
        alert(`Please select Type!`);
        return false;
    }
    if(data.breed === "Select Breed"){
        alert(`Please select Breed!`);
        return false;
    }
    //Trường hợp không còn lỗi nào
    return true;
}
// thực hiện xóa thông tin trên form
function clearInput(){
    idInput.value = '';
	typeInput.value = 'Select Type';
    vaccinatedInput.checked = false;
    nameInput.value = '';
    ageInput.value = '';
    weightInput.value ='';
    lengthInput.value = '';
    colorInput.value = '#000000';
    breedInput.value = 'Select Breed';
    vaccinatedInput.checked = false;
    sterilizedInput.checked = false;
    dewormedInput.checked = false;

}
// lưu thông tin từ form vào bảng

function renderTableData(petArr) {
    tableBodyEl.innerHTML = '';
    let html = "";
    for(let i = 0; i < petArr.length; i++){
        html += `<tr>
        <th scope="row">${petArr[i].id}</th>
        <td>${petArr[i].name}</td>
        <td>${petArr[i].age}</td>
        <td>${petArr[i].type}</td>
        <td>${petArr[i].weight} </td>
        <td>${petArr[i].height} </td>
        <td>${petArr[i].breed} </td>
        <td>
            <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
        </td>
        <td><i class="${petArr[i].vaccinated?'bi bi-check-circle-fill':'bi bi-x-circle-fill'}"></i></td>
        <td><i class="${petArr[i]. dewormed?'bi bi-check-circle-fill':'bi bi-x-circle-fill'}"></i></td>
        <td><i class="${petArr[i].sterilized?'bi bi-check-circle-fill':'bi bi-x-circle-fill'}"></i></td>
        ${showBMI ? `<td>${petArr[i].calculateBMI()}</td>` : `<td>?</td>`}
        <td>${new Date(petArr[i].date).toLocaleDateString()}</td>
        <td><button class="btn btn-danger" onclick="deletePet('${petArr[i].id}')">Delete</button></td>
    </tr>`

    }
   tableBodyEl.innerHTML = html;
   //<th scope="row">${petArr[i].id}</th>
}
// Xóa các pet mình muốn 
    const deletePet = function (id)  {
       
        if (confirm('Are you sure?')){
        for(let i = 0; i < petArr.length; i++){
            if(petArr[i].id === id){
                petArr.splice(i, 1);
                break;
            }
        }
        //Render lại table
        renderTableData(petArr);
        saveToStorage('petArr',petArr);
    }


 }
 // Chọn thú cưng đã tiêm 3 loại thuốc vào bảng khác
let healthyPet = false;
 healthyBtn.addEventListener('click', function (e) {
    healthyPet = !healthyPet;
  console.log(healthyPet);
    if(healthyPet){
        healthyBtn.innerText = 'Show All Pet';
        //Reset lại healthyPetArr
        healthyPetArr = [];
        for(let i = 0; i < petArr.length; i++){
            if(petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized)
            healthyPetArr.push(petArr[i]);
        }
        renderTableData(healthyPetArr);
    }
    else{
        healthyBtn.innerText = 'Show Healthy Pet';
        renderTableData(petArr);
    }    
})

typeInput.addEventListener('change',renderBreed);


function renderBreed() {
    breedInput.innerHTML = '';
  
var breedArrType = breedArr.filter(Breed => typeInput.value == Breed.Type)
console.log(breedArrType);
for(let i = 0; i < breedArrType.length; i++){
    const option = document.createElement('option')
    option.innerHTML = breedArrType[i].Breed;
    breedInput.appendChild(option)
}
}
/////////
// thực hiện tính BMI
// var CalculateBMI = Number("?");

// CalculateBtn.addEventListener('click', function (e) {
// console.log(CalculateBMI)
// if(CalculateBMI){
//     CalculateBtn.innerHTML = 'CalculateBtn';
// for( let i = 0; i < petArr.length; i++){
//     var weight = petArr[i].weight;
//     var height = petArr[i].height;
//     if(petArr[i] === cat){
//     BMI1 = (weight * 886) / height ** 2;
//     console.log(CalculateBMI(BMI1));
//     }else if(petArr[i] === dog){
//     BMI2 = (weight * 703) / height ** 2;
//     console.log(CalculateBMI(BMI2));
//     }}
//     }else {
//     BMI ='?';
//         consolee.log(CalculateBMI(BMI));
//     }
//     renderTableData(petArr);
// })

 //var showBMI = false;

// submitBtn.addEventListener('click', function (e,) {
//     const data = {
//         id: idInput.value,
//         name: nameInput.value,
//         age: parseInt(ageInput.value),
//         type: typeInput.value,
//         weight: parseInt(weightInput.value),
        
//         height: parseInt(lengthInput.value),
//         color: colorInput.value,
//         breed: breedInput.value,
//         vaccinated: vaccinatedInput.checked,
//         dewormed: dewormedInput.checked,
//         sterilized: sterilizedInput.checked,

//         date: new Date(),

//          calculateBMI: function () {   
//             if(this.type === 'Dog'){
//                 console.log(this.weight);
//                 return (this.weight * 703 / (this.height * this.height)).toFixed(2);
//             }else{

//                return (this.weight * 886 / (this.height * this.height)).toFixed(2);
//             }
           
//         }
        

//     }
//   console.log(data)
// }
// )
// CalculateBtn.addEventListener('click', function(e,){
//     showBMI = true;
//     renderTableData(petArr);
//   })

