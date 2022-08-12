document.addEventListener('DOMContentLoaded', function(){
    /* var btns = document.querySelectorAll("#book-list .delete");

    btns.forEach(function(btn) {
        btn.addEventListener("click", function(e){
            // we are targetting because of there are many elements inside of it
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        });
    }); */

    // delete books
    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', function(e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li)
        }
    });

    // add books

    // first select the form
    const addForm = document.forms['add-book'];

    // add an event listener
    addForm.addEventListener('submit', function (e) {
        // prevent the default action of a submit button, i.e to reload
        e.preventDefault();

        // obtain the value of the input text
        const value = addForm.querySelector('input[type="text"]').value;


        // creating elements and placing them in the DOM

        // create the li tag
        const li = document.createElement('li');

        // create the span tag for the book name 
        const bookName = document.createElement('span');

        // create the span tag for the delete button
        const deleteBtn = document.createElement('span');

        // adding text content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        // next we add the class to them
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // grabbing the li tag and adding it to the DOM
        li.appendChild(bookName);
        li.appendChild(deleteBtn);

        // Now appending to the document
        list.appendChild(li);
    });


    // hide books 
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e) {
        if (hideBox.checked) {
            list.style.display = 'none';
        } else {
            list.style.display = 'initial';
        }
    });


    // search filter for the books 
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){

        // get the word being searched for and convert to lowercase
        const term = e.target.value.toLowerCase();

        // get the books
        const books = list.getElementsByTagName('li');

        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;

            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });


    // tabbed content 
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');

    tabs.addEventListener('click', function(e){
        if(e.target.tagName == 'LI') {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel) {
                if (panel == targetPanel){
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        };
    });
})