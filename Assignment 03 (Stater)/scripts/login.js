'use strict'

const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

// sự kiện submit login
btnSubmit.addEventListener('click', function() {
    
    const isValidate = validate();
console.log(isValidate)
if(isValidate) {
    const user = userArr.find(
        (item) =>
        (item).username === inputUsername.value &&
        (item).password === inputPassword.value
    );
//====>>>>>>> tìm trong mảng userArr khi giá trị user password
// của người nhập trong form login = cả 2 giá trị user password 
// của Register 
    if(user) {
        alert("Đăng nhập thành công !")
    
    // sau đó lưu dữ liệu xuống localStorage
    saveToStoStorage("currentUser", user);
    // ===>> lưu user vào trong localstorage

    window.location.href = '../index.html';
}else {
    alert("Tài khoản không hợp lệ, vui lòng đăng nhập  !")
}
}
});

function validate() {
    let isValidate = true;

    // không bỏ trống from
    if(inputUsername.value === "") {
        alert("vui lòng nhập username!")
        isValidate = false;
        //console.log(user.username)
    }

    if (inputPassword.value === ""){
        alert("Vui lòng nhập password!");
        isValidate = false
        console.log(user.password)
    }
    return isValidate
}