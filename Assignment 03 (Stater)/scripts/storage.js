'use strict'

// hàm lấy dữ liệu
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

//hàm lưu dữ liệu
function saveToStoStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// lấy dữ liệu userArr từ LocalStorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
console.log(users);

// chuyển đổi về dạng class Instance
const userArr = users.map((user) => parseUser(user));
console.log(userArr)


///////===================================//////////
// lấy dữ liệu user đang đăng nhập trong form login
const  currentUser = getFromStorage("currentUser") 
? parseUser(getFromStorage("currentUser")) : null;
//===>>>  dùng cho các mục đích tiếp theo để lấy dữ liệu từ đây đưa vào các phần dưới

function parseUser(userData) {
	const user = new User(
        userData.firstname, 
        userData.lastname, 
        userData.username, 
        userData.password
        );

	return user
}


