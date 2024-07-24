let userName = document.querySelector('#user-name')
let blogTitle = document.querySelector('#blog-title')
let blogPost = document.querySelector('#blog-post')
let submitbtn = document.querySelector('#submit-button')
const darkBody = document.querySelector('.dark-body')
const darkHeader = document.querySelector('.dark-header')
const lightBody = document.querySelector('.light-body')
const lightHeader = document.querySelector('.light-header')
const lightMode = document.querySelector('#light-mode')
let forms= document.getElementsByTagName('input')

function validateForm() {
    if ((userName.value == null || userName.value == "") && (blogTitle.value == null || blogTitle.value == "") && (blogPost.value == null || blogPost.value == "")) {
        alert('Please fill out entire form.');
        return true;
    } else {
        return false;
    }
}

let mode = 'dark-body'

lightMode.addEventListener('click', function () {

    event.preventDefault();

    console.log('working');

    if (mode === 'dark-body') {
        mode = 'light-body'
        darkBody.setAttribute('class', 'light-body')
    } else {
        
        mode = 'dark-body'
        darkBody.setAttribute('class', 'dark-body')
    }


    
})

let mode1 = 'dark-header'

lightMode.addEventListener('click', function () {

    event.preventDefault();

    console.log('working');

    if (mode1 === 'dark-header') {
        mode1 = 'light-header'
        darkHeader.setAttribute('class', 'light-header')
    } else {
        
        mode1 = 'dark-header'
        darkHeader.setAttribute('class', 'dark-header')
    }


    
})




submitbtn.addEventListener('click', function () {
    

    let blogSubmit = {
        userName: userName.value,
        blogTitle: blogTitle.value,
        blogPost: blogPost.value
    };

   
        
    if (validateForm() === false) {
        localStorage.setItem('blogSubmit', JSON.stringify(blogSubmit));
        window.location.href="./blog.html";   
        }   
    
})




