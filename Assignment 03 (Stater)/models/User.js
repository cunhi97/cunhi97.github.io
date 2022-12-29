'use strict'
// 1. tạo class usser trường constructor;
class User {
    constructor (
        firstname,
        lastname,
        username,
        password,

         //  phần 9 setting
         // gán mặt định cho News số tin trên 1 trang là 10 và chủ đề là business
         pageSize = 10,
         category = "business"
         
    ) 
    
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;

    //  phần 9 setting
        this.pageSize = pageSize;
        this.category = category;
    }
    };
    //const page = this.pageSize
    //const cate = this.category
//console.log(page, cate)

// mục 8: sử dụng class task để chứa thông tin về task trong todo list

class Task {
    constructor (
        task,
        owner,
        isDone
    ) {
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
    
}