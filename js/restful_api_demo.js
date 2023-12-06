"use strict";
(()=>{
    fetch("http://localhost:3000/books").then(resp =>resp.json()).then(data =>console.log(data));
    fetch("http://localhost:3000/books/4").then(resp =>resp.json()).then(data => fetch("http://localhost:3000/authors/" + data.authorId)).then(resp => resp.json()).then(data => console.log(data));

    // you can leave out the parentheses in async function and it will work
    const createBook = async (book) => {
        try{
            const url = "http://localhost:3000/books";
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            };
            const resp = await fetch(url, options);
            const newBook = await resp.json();
            return newBook;
        } catch (error) {
            console.error(error);
        }

    }

    //creating a book

    const newBook= {
        "title": "Garfield at Large",
        "authorId": 4,
        "publishedYear": 1980,
        "genre": "Daily Comics",
        "summary": "The epic tale of a fat cat and his cartoonist owner Jon",
        "ISBN": "9780345320131"
    }
    //createBook(newBook).then(() => fetch("http://localhost:3000/books")).then(resp =>resp.json()).then(data => console.log(data));

    const createAuthor = async (author) => {
        try {
            const url = "http://localhost:3000/authors";
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(author)
            };
            const resp = await fetch(url, options);
            const newAuthor = await resp.json();
            return newAuthor;
        } catch (error) {
            console.error(error);
        }
    }
    const editBook =  async (id,book) => {
        try{
            const url = `http://localhost:3000/books/${id}`;
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            };
            const resp = await fetch(url, options);
            const newBook = await resp.json();
            return newBook;
        } catch (error) {
            console.error(error);
        }

    }


    const jimDavis = {
        "name": "Jim Davis",
        "birthYear": 1945,
        "deathYear": null,
        "nationality": "American"
    }
    editBook(5, {"authorId": 5})
    //createAuthor(jimDavis)
    //createBook(newBook).then(() => fetch("http://localhost:3000/books")).then(resp =>resp.json()).then(data => console.log(data));

    function populateDropdown(){
        fetch("http://localhost:3000/books").then(resp => resp.json()).then(data => {
            console.log(data);
            const dropDown = document.getElementById("edit-select");
            for(let book of data){
                const option = document.createElement("option");
                option.value = book.id;
                option.innerText= book.title;
                dropDown.appendChild(option);
            }
        })
    }
    populateDropdown();
    document.querySelector("#edit-select").addEventListener("change", (e)=>{
        const bookId = e.target.value;
        fetch("http://localhost:3000/books/" + bookId).then(resp => resp.json()).then(book =>{
            document.querySelector('#edit-title').value =book.title;
            document.querySelector('#edit-genre').value =book.genre;
            document.querySelector('#edit-isbn').value =book.ISBN;
            document.querySelector('#edit-summary').value =book.summary;
            document.querySelector('#edit-publisher').value = book.publishedYear;
        })
    })

    document.forms.editForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        let id = document.querySelector('#edit-select').value;
        let title= document.querySelector('#edit-title').value;
        let genre =document.querySelector('#edit-genre').value;
        let ISBN =document.querySelector('#edit-isbn').value;
        let summary =document.querySelector('#edit-summary').value;
        let publishedYear =document.querySelector('#edit-publisher').value;
        editBook(id, {title,ISBN,genre,publishedYear,summary})

    })
    fetch("http://localhost:3000/books/5/",{method: "DELETE"});
})();

