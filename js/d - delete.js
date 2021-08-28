const BASE_URL = 'http://localhost:4040';

function removeBook(bookId) {
    const options = {
        method: "DELETE",
    };

    return fetch(`${BASE_URL}/books/${bookId}`,  options).then(res => res.json());
}


removeBook (38);
removeBook (39);