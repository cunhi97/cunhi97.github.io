'use strict'

// khi đăng nhập vào mới được phép xem tin tức 
 if(currentUser) {
    const btnPrev = document.getElementById("btn-prev");
    const pageNum = document.getElementById("page-num");
    const btnNext = document.getElementById("btn-next");
    const newsContainer = document.getElementById("news-container");
    console.log(currentUser.category);
    console.log(currentUser.pageSize);

    //biến này để tính số News tối đa trả về API
    let totalResults = 0;
    
    getDataNews("us",currentUser.category, currentUser.pageSize, 1);
   
    //hàm lấy dữ liệu Data news từ API và hiển thị list News ra ứng dụng
    async function getDataNews(country, category, pageSize, page) {
        
        try {
            //kết nối với API và lấy data 
            const res = await fetch(
               ` https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=3ab0f3abb7d547a694aa88e9c887bdd2`
            );
           console.log(res)
            const data = await res.json();
            console.log(data);
            // check lỗi quá 100 lần request trong ngày (kết nối đến API > 100 lần/ngày)
            if (data.status === "error" && data.code === "rateLimited") {
                throw new Error(data.message);
            }

            //gọi hàm để hiển thị danh sách News
            displayNewList(data);
            // lấy giá trị trong API đưa ra 1 chuỗi string  = page 
            pageNum.textContent = page;

        } //Bắt lỗi 
        catch(err) {
            //báo lỗi 
            alert("Error :"  + err.message)
        }
    }

// hàm asyns await dùng trong bất đồng bộ 
// dùng try cath để hiển thị lỗi  

///////************************************ **///////
//Yêu cầu số 7 
// thực hiện qua trang , ẩn nút nhấn Prev khi đag ở page 1
// thực hiện gọi hàm hiện ẩn nút nhấn 
function checkBtnPrev() {
    
// nếu pageNum === 1 ẩn nút nhấn Prev đi
if(pageNum.textContent == 1) {
    btnPrev.style.display = "none";// ẩn 
}else {
    btnPrev.style.display = "block";// hiện
}
}


//checkBtnPrev() 


function checkBtnNext() {
  //  let pageSize = 5;
    let pageText = Math.ceil(totalResults / currentUser.pageSize);//Math. ceil() làm tròn một số đến số nguyên lớn nhất tiếp theo
   console.log(pageText)
   //console.log(getDataNews(pageSize))
   
   
    // Ta thực hiện ẩn nút Next 
    if(pageNum.textContent == pageText){
    // ====>>> dùng Math.ciel để làm tròn lên số trang(pageSize) khi page cuối không = pageSize 
    btnNext.style.display = "none";
    }else {
        btnNext.style.display = "block";
    }
  
}
//checkBtnNext()

// bắt sự kiện click vào nút Prev
//let NumberpageNum = Number(pageNum.textContent);
//console.log(NumberpageNum)
btnPrev.addEventListener('click', function() {
    // khi ckick vào Prev thì trang sẽ lùi lại 1 trang 
    getDataNews ("us",currentUser.category, currentUser.pageSize, --pageNum.textContent);// nhớ truyền đủ tham số 
    });

// Bắt sự kiện click vào nút Next 
btnNext.addEventListener('click', function() {
    getDataNews ("us",currentUser.category, currentUser.pageSize, ++pageNum.textContent);
});



// Hàm hiển thị danh sách News trên trang 
function displayNewList(data) {

// lấy giá trị cho biến totalResult
totalResults = data.totalResults;
console.log(totalResults)
checkBtnPrev();
checkBtnNext();
let html = "";
// tạo các code HTML News để hiển thị 
data.articles.forEach(function (article) {
    html += `
    <div class= "new-content">
    <div class="img-banner">
    <img src=${
        article.urlToImage
        ? article.urlToImage
        : "../image/icon-png-image.jpg"
    } alt ="img"  style="width: 50%"/>
    </div>

    <div class="content">
    <h4>${article.title}</h4>
    <button><a href=${article.url} target="_blank">View</a></button>
    <p>${article.description}</p>
    </div>
    </div>
    `;
});

newsContainer.innerHTML = html;
//getDataNews("us","Technology", 5, 1);
}
} else {
    alert(" Vui lòng đăng nhập/ đăng kí để truy cập ứng dụng")
    window.location.assign("../index.html");
}
//getDataNews("us","Technology", 5, 1);