'use strict'

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");

const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout")

displayHome()

function displayHome() {
    // lúc đang đăng nhập 
    const currentUser = getFromStorage("currentUser")
    if(currentUser) {
        loginModal.style.display = "none";// ẩn 
        mainContent.style.display = "block"// hiển thị 
        welcomeMessage.textContent = `Welcome ${currentUser.firstname}`
    } // lúc chưa ai đăng nhập 
    else {
        loginModal.style.display = "block"; //hiển thị 
        mainContent.style.display = "none"; // ẩn
    }
    console.log(currentUser);
}

// bắt sự kiện nhấn vào nút logout 
btnLogout.addEventListener('click', function() {
    const signout = confirm('are you sure !');
    if(signout) {
        localStorage.removeItem("currentUser");
       // currentUser = null;

// cập nhập lại trang dưới localstorage
//saveToStoStorage("currentUser", userArr);
    // hiển thị trang ở trạng thái chưa có người dùng đăng nhập
    displayHome();
    }
    console.log(currentUser);
})
