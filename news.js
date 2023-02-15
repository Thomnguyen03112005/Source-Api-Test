fetch('./data.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

let news = [];

let btn = document.getElementsByClassName('btna')
function addshow(id) {
    fetch('./data.json')
       .then((response) => response.json())
       .then((data) => {
          // Tìm tin tức có id tương ứng
          const news = data.news.find((item) => item.id === id);
          
          // Hiển thị nội dung của tin tức
          const newsContainer = document.getElementById('news-container');
          newsContainer.innerHTML = `
             <h2>${news.title}</h2>
             <p>${news.content}</p>
          `;
       });
       //window.location.href = "./news.html"
 }
 