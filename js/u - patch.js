const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(update)
        }
    return fetch (`${BASE_URL}/books/${bookId}`, options).then(res => res.json())
}
 

updateBookById({title: 'Тестовая книга по Phyton'}, 28);
updateBookById({genres: 'Phyton'}, 28);
updateBookById({ rating: 9.9 }, 28);
