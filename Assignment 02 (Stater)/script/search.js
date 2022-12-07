'use strict';

const findBtn = document.getElementById("find-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
//const content = document.getElementById("content");
const tableBodyEl =document.getElementById("tbody")
//const dangerBtn = document.querySelector('.btn-danger')
//renderTableData(petArr);

//Hien tất cả pet
renderTableData(petArr);

//Xử lý tìm kiếm
findBtn.addEventListener('click', function (e)  {
    const data = {
        id: idInput.value,
        name: nameInput.value,
        type: typeInput.value,
        breed: breedInput.value,
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked,

        date: new Date(),
    }
    console.log(data)

let searchResult = petArr;
//Nếu người dùng có nhập id thì lọc theo id
if(data.id != "")
searchResult = searchResult.filter(pet => {
    return pet.id.includes(data.id);
})
//Nếu người dùng có nhập name thì lọc theo name
if(data.name != "")
searchResult = searchResult.filter(pet => {
    return pet.name.includes(data.name);
} )

//Nếu người dùng có chọn type thì lọc theo type
if(data.type != "")
searchResult = searchResult.filter(pet => {
    return pet.type.includes(data.type);
} )

if(data.breed != "")
searchResult = searchResult.filter(pet => {
    return pet.breed.includes(data.breed);  // bao gồm breed trong data của pet
} )

if(data.vaccinated)
searchResult = searchResult.filter(pet => {
    return pet.vaccinated;
} )

if(data.dewormed)
searchResult = searchResult.filter(pet => {
    return pet.dewormed;
} )

if(data.sterilized)
searchResult = searchResult.filter(pet => {
    return pet.sterilized;
} )

renderTableData(searchResult);
});
// function validateData(data){
//     //Kiểm tra từng lỗi, nếu có lỗi thì thông báo và return false;
//     if(data.id == ""){
//         alert('Please input for id');
//         return false;
//     }
//     if(data.name == ""){
//         alert('Please input for name');
//         return false;
//     }
    
//     if(data.type === "Select Type"){
//         alert(`Please select Type!`);
//         return false;
//     }
//     if(data.breed === "Select Breed"){
//         alert(`Please select Breed!`);
//         return false;
//     }
//     //Trường hợp không còn lỗi nào
//     return true;

// }
// typeInput.addEventListener('change',renderpetArr);
// function renderpetArr() {
//    idInput.innerHTML = '';
  
// //var petArrType = petArr.filter(id => idInput.value == id.petArr && breed => breedInput.value == breed.petArr)
// console.log(petArrType);
// // for(let i = 0; i <petArrType.length; i++){
// //     const option = document.createElement('option')
// //     option.innerHTML = petArrType[i].Breed;
// //     breedInput.appendChild(option)
// // }
// }

//Load all breed
for(let i = 0; i < breedArr.length; i++){
    const option = document.createElement('option')
    option.innerHTML = breedArr[i].Breed;
    breedInput.appendChild(option)
}


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
        <td>${new Date(petArr[i].date).toLocaleDateString()}</td>
        <td><button class="btn btn-danger" onclick="deletePet('${petArr[i].id}')">Delete</button></td>
    </tr>`

    }
   tableBodyEl.innerHTML = html;
};
