const darkBody = document.querySelector('.dark-body');
const darkHeader = document.querySelector('.dark-header');
const lightBody = document.querySelector('.light-body');
const lightHeader = document.querySelector('.light-header');
const lightMode = document.querySelector('#light-mode');
let blogSection = document.getElementById('blog-section');
const bringOver = JSON.parse(localStorage.getItem('blogSubmit'));



let mode = 'dark-body'

lightMode.addEventListener('click', function () {

    event.preventDefault();

    if (mode === 'dark-body') {
        mode = 'light-body'
        darkBody.setAttribute('class', 'light-body');
    } else {
        
        mode = 'dark-body'
        darkBody.setAttribute('class', 'dark-body');
    }


    
})

let mode1 = 'dark-header'

lightMode.addEventListener('click', function () {

    event.preventDefault();

    if (mode1 === 'dark-header') {
        mode1 = 'light-header'
        darkHeader.setAttribute('class', 'light-header');
    } else {
        
        mode1 = 'dark-header'
        darkHeader.setAttribute('class', 'dark-header');
    }


    
})





function working() {

    const newPost = document.createElement('section');
    const content = document.createElement('p');

    function addStyle() {
        blogSection.classList.add('main-section')
        newPost.classList.add('content-section1')
    }
   
    
    blogSection.appendChild(newPost);
    addStyle();
    newPost.appendChild(content);
    content.textContent = bringOver.userName;
    



    console.log(bringOver.userName);

    
}

function working2() {

    const newPost2 = document.createElement('section');    
    const content2 = document.createElement('p');

    function addStyle2() {
        newPost2.classList.add('content-section2')
    }
   
    blogSection.appendChild(newPost2);
    addStyle2();
    newPost2.appendChild(content2);
    content2.textContent = bringOver.blogTitle;
    
    console.log(bringOver.blogTitle);

       
}

function working3() {

    const newPost3 = document.createElement('section');
    const content3 = document.createElement('p');

    function addStyle3() {
        newPost3.classList.add('content-section3')
    }
   
    blogSection.appendChild(newPost3);
    addStyle3();
    newPost3.appendChild(content3);
    content3.textContent = bringOver.blogPost;
    
    console.log(bringOver.blogPost);



    
}

blogSection.addEventListener('load', working(), working2(), working3())
