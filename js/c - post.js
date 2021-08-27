const BASE_URL = 'http://localhost:4040';

const newBook = {
    
    "title": "Тестовая книга по CSS",
    "author": "Я",
    "genres": [ "CSS" ],
    "rating": 9,
};

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newBook),
};


function addBook(book) {

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books`, options).then(res => res.json());

 }

 addBook ({
    "title": "Тестовая книга по HTML",
    "author": "Я",
    "genres": [ "HTML" ],
    "rating": 8,
 }).then(renderBook)

  addBook ({
    "title": "Тестовая книга по C++",
    "author": "Я",
    "genres": [ "C++" ],
    "rating": 7.7,
}).then(renderBook)
 
function renderBook(book) {
    console.log('Пришёл ответ от бекенда, можно рисовать');
     console.log(book);
}