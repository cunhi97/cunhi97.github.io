'use strict'
if(currentUser){
    const inputPageSize = document.getElementById("input-page-size");
    const inputCategory = document.getElementById("input-category");
    const btnSubmit = document.getElementById("btn-submit");
    
    
    btnSubmit.addEventListener('click', function() {
        if(validate()) {
            // cập nhập lại currentUser
            currentUser.pageSize = Number.parseInt(inputPageSize.value);
           // console.log(currentUser.pageSize)
            currentUser.category = inputCategory.value;
           // console.log(currentUser.category)
            saveToStoStorage("currentUser", currentUser); 
           // console.log(currentUser)
           // cập nhập lại mảng userArr
            const index = userArr.findIndex(
                (userItem) => userItem.username === currentUser.username 
              
           );
            console.log(currentUser.username)
            
            userArr[index] = currentUser;
            //console.log(index)
            saveToStoStorage("userArr", userArr) 
            // reset lại form nhập và thông báo thành công 
            alert("cài đặt thành công ");
            inputPageSize.value = "";
            inputCategory.value = "General";

            
        }
        
        
            
        
    });
// hàm validate dữ liệu nhập vào của người dùng
    function validate() {
        let isValidate = true;

//  kiểm tra trong inputPageSize
    if(Number.isNaN(Number.parseInt(inputPageSize.value))) {
        alert("News per page không hợp lệ")
        isValidate = false;
    } 
    
    // kiểm tra inputCategory
    // if(inputCategory.value === "") {
    //     alert("Vui lòng đăng nhập vào !")
    //     isValidate = false;
    // }
    return isValidate
    }
}else {
    alert('please login and degister!')
    window.location.assign("../index.html")
}
