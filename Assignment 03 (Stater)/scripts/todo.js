'use strict'
// phải được đăng nhập 
if(currentUser){
    const todoList = document.getElementById("todo-list");
    const btnAdd = document.getElementById("btn-add");
    const inputTask = document.getElementById("input-task");
    
    displayTodoList();
    
    // hàm hiển thị thông tin todo list js cho form checked html
    function displayTodoList() {
        let html = "";
        // từ mảng todoArr lọc ra các todo(task) là của user đang đăng nhập vào checked 
        todoArr
        .filter((todo) => todo.owner === currentUser.username)
        .forEach(function (todo) {
            html +=`
            <li class=${todo.isDone ? "checked" : ""} >${todo.task}
            <span class="close">x</span>
            </li>
            `;
        });
        todoList.innerHTML = html;
    
        eventToggleTasks();
        eventDeleteTasks();
    
    }

    // bắt sự kiẹn vào add để thêm vào task 
    btnAdd.addEventListener('click', function () {
        if(inputTask.value.trim().length ===0) {
            alert("vui lòng đăng nhập!");
        }else {
            const todo = new Task(inputTask.value, currentUser.username, false);

            // thêm task mới vào mảng todoArr
            todoArr.push(todo);

            // lưu vào todoArr
            saveToStoStorage("todoArr", todoArr)
             // hiển thị lại ds các nhiệm vụ 
            displayTodoList();

            // reset dữ liệu từ from nhập
            inputTask.value = "";
            }
    });

    // hàm bắt sự kiện toggle Tasks
    function eventToggleTasks() {
        //lấy tất cả các phần tử của li có trong id="todo-list" 
        // chứa thông tin của các task và bắt sự kiện click lên từng phần tử li này.
        document.querySelectorAll("#todo-list li").forEach(function (liEl) {
            liEl.addEventListener('click', function(e) {
                // tránh nút delete ra để không bị chồng sự kiện khi nhấn nút delete
                if(e.target !== liEl.children[0]){
                    // toggle class checked , xem trong classlist liEl đã checked hay chưa 
                    liEl.classList.toggle("checked");
                    //tìm task vưa click vào (toggle)
                    const todo = todoArr.find(
                        (todoItem) => 
                        todoItem.owner === currentUser.username &&// method slice() để lấy list task theo username
                        todoItem.task === liEl.textcontent.slice(0, -1) // lấy nội dung text chứa task , loại bỏ dấu x.

                    )
                // sau đó thay đổi thuộc tính isDone của nó 
                todo.isDone = liEl.classList.contains("checked") ? true : false;
                // cập nhập lại xuống local storage
                saveToStoStorage("todoArr", todoArr);
                }
            })
        })
        
    }

    // bắt sự kiện delete xóa các task 
    function eventDeleteTasks() {
        document.querySelectorAll("#todo-list .close").forEach(function (closeEl)  {
            closeEl.addEventListener('click', function() {
                // xác nhận xóa
                const isDelete = confirm("Bạn có muốn xóa không ?")
                if(isDelete) {
                    // tìm vị trí của task được ấn xóa trong mảng todoArr
                    const index = todoArr.findIndex(
                        (item) =>
                        item.owner === currentUser.username && // xác đinhj tên usser và task 
                        item.task === closeEl.parentElement.textContent.slice(0, -1)// dùng để xác định tên task và so sánh 
                    
                    )
                // xóa task ra khỏi mảng todoArr
                todoArr.splice(index, 1);
                // cập nhập lại xuống local storage 
                saveToStoStorage("todoArr", todoArr);
                // hiển thị lại list todo
                displayTodoList();
                };
            });
        });

    }
}else {
    alert('please login and degister!')
    window.location.assign("../index.html")
}


