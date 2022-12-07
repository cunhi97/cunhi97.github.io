'use strict';

const inputBreed = document.querySelector("#input-breed");

const inputType = document.querySelector("#input-type");
const submitBtn  = document.getElementById("submit-btn");
const tableBodyEl =document.getElementById("tbody")



//const breedArr = [];

//renderBreedTable(breedArr); 
// const option = document.createElement('option')
// option.innerHTML = 
// breedInput.appendChild(option)

// ĐƯA SỰ KIỆN TYPE VÀO FUNCTION(SUBMITBTN) ĐỂ HIỂN THỊ CÁC  BREED THEO TYPE

submitBtn.addEventListener('click', function(e,) {
const data = {
   
    Breed: inputBreed.value,
    Type: inputType.value,
}
//console.log("data")
console.log(inputBreed)
console.log(inputType)
console.log(data)


    const validate = validateData(data);
    //console.log(validate); 
    if (validate) {
        breedArr.push(data);
        console.log(breedArr);
        saveToStorage('breedArr', breedArr);
        saveToStorage('petArr', petArr);
        // showBMI = false;
        // clearInput();
        renderBreedTable(breedArr);
        }
        

function validateData(data){
    //Kiểm tra từng lỗi, nếu có lỗi thì thông báo và return false;
    if(data.Breed == ""){
        alert('Please input for breed');
        return false;
    }
    if(data.Type === "Select Type"){
        alert(`Please select Type!`);
        return false;
    }
    return true;
       
};

});



//renderBreedTable(breedArr); 
// var id = Number('#');
// for(let i = 0; i < id.length; i++){
//    return id += id[i]
// }

function renderBreedTable(breedArr) {
    tableBodyEl.innerHTML = '';
    let html = "";
    for(let i = 0; i <breedArr.length; i++){
        html += `<tr>
        <th scope="row">${i+1}</th>
        <td>${breedArr[i].Breed}</td>
        <td>${breedArr[i].Type}</td>
        <td><button class="btn btn-danger" onclick="deleteBreed('${breedArr[i].Breed}')">Delete</button></td>
        </tr>`
    }
    tableBodyEl.innerHTML = html;

//     var id = Number('#');
// for(let i = 0; i < Breed.length; i++){
//    return id += Breed[i]
// }
}
renderBreedTable(breedArr); 

const deleteBreed = function (Breed)  {
       
    if (confirm('Are you sure?')){
    for(let i = 0; i < breedArr.length; i++){
        if(breedArr[i].Breed === Breed){
           breedArr.splice(i, 1);
            break;
        }
    }
    //Render lại table
   renderBreedTable(breedArr);
   //Cap nhat petArr vao localStorage
   saveToStorage('breedArr',breedArr);
}
}

//console.log(renderTableData);
//a = [11, 22, 31, 44, 224].each_with_index { |val, index| puts "index: #{index} for #{val}" }
