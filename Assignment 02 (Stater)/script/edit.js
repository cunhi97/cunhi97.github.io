'use strict';

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
const tableBodyEl =document.getElementById("tbody")

renderTableData(petArr);

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
        <td><button class="btn btn-danger" onclick="editPet('${petArr[i].id}')">Edit</button></td>
    </tr>`

    }
   tableBodyEl.innerHTML = html;
   //<th scope="row">${petArr[i].id}</th>
}
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

function editPet(idPet){
    //Từ idPet tìm indexPet -> tương tự deletePet
        let indexPet;
        for(let i = 0; i < petArr.length; i++){
            if(petArr[i].id === idPet){
                indexPet = i;
                break;
            }
        }
        // console.log(indexPet);
    //Từ indexPet lấy data và đưa vào form
        let data = petArr[indexPet];
        // console.log(data);
        idInput.value = data.id;
        nameInput.value = data.name;
        ageInput.value = data.age;
        typeInput.value = data.type;
        weightInput.value = data.weight;
        lengthInput.value = data.height;
        colorInput.value = data.color;
        renderBreed();
        breedInput.value = data.breed;
        vaccinatedInput.checked = data.vaccinated;
        dewormedInput.checked = data.dewormed;
        sterilizedInput.checked = data.sterilized;
    //Show form ra
    document.getElementById('container-form').classList.remove('hide');
}
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

}
console.log(data)
const validate = validateData(data);
if (validate) {
    let indexPet = petArr.findIndex(pet => pet.id == data.id);//Cách gọn hơn
    petArr.splice(indexPet,1,data);
    console.log(petArr);
    saveToStorage('petArr', petArr);
    renderTableData(petArr);
    document.getElementById('container-form').classList.add('hide');
}

})
function validateData(data){
    //Kiểm tra từng lỗi, nếu có lỗi thì thông báo và return false;
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