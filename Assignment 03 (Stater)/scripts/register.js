'use strict'

const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

//bắt sự kiện nút nhấn Register
btnSubmit.addEventListener("click", function () {
    //lấy dữ liệu từ dữ liệu của người dùng nhập vào form
const user = new User (
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value,
);

const isValidate = validate(user);
console.log(isValidate)
if(isValidate) {
    // thêm user vào mảng userArr
    userArr.push(user)
    console.log(userArr)
    // sau đó lưu dữ liệu xuống localStorage
    saveToStoStorage("userArr", userArr);

    //điều hướng sang trang login
    window.location.href = '../pages/login.html';

}

})
//thực hiện đưa đk vào validate thỏa mãn khi người
//dùng nhập dữ liệu vào form
function validate(user) {
let isValidate = true;

//Không có trường nào bị bỏ trống.
if(user.firstname.trim().length === 0) {
    alert("vui lòng nhập firstname!")
    isValidate = false;
    console.log(user.firstname)
}
if(user.lastname.trim().length === 0) {
    alert("vui lòng nhập lastname!")
    isValidate = false;
    //console.log(lastname)
}
if(user.username.trim().length === 0) {
    alert("vui lòng nhập username!")
    isValidate = false;
    //console.log(username)
}

// phương thức trim() dùng để xóa hết all khoảng trắng ở đầu và cuối chuỗi,
// phần password khoảng trắng cho phép dùng nên không dùng trim() nữa.
if (user.password === ""){
    alert("Vui lòng nhập password!");
    isValidate = false
    console.log(user.password)
}

if (inputPasswordConfirm.value === ""){
    alert("Vui lòng nhập confirm password!");
    isValidate = false
    console.log(inputPasswordConfirm.value)
}

//Username không được trùng với Username của các người dùng trước đó.
for(let i = 0; i < userArr.length; i++){
    if(userArr[i].username === user.username){
        alert("Username đã tồn tại!")
       isValidate = false
       console.log(user.username)

    }
    break;

}

//Password và Confirm Password phải giống nhau.
if(user.password !== inputPasswordConfirm.value){
    alert("Password và confirm passwork phải giống nhau")
   isValidate = false
//console.log(user.password)
}

//Password phải có nhiều hơn 8 ký tự
 if(user.password.length <= 8) {
    alert("password phải từ 8 kí tự trở lên!")
   isValidate = false
   console.log(user.password)
 }
return isValidate
};
//validate()
//// 
//-dùng trim() nhớ .length
//- dùng === 0 khi dùng length
//- dùng === "" khi không có length
//- Nhớ thực hiện từ trên xuống , nếu code nhảy xuống
// hàng dưới không đọc code theo thứ tự từ trên xuống là code hàng trên có vấn đề 
//- thục hiện console.log() sau mỗi kết quả để xem xét lỗi 
