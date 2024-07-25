const darkBody = document.querySelector('.dark-body');
const darkHeader = document.querySelector('.dark-header');
const lightBody = document.querySelector('.light-body');
const lightHeader = document.querySelector('.light-header');
const lightMode = document.querySelector('#light-mode');
let blogSection = document.getElementById('blog-section');
/*const bringOver = JSON.parse(localStorage.getItem('blogSubmit'));*/
let bringOver = localStorage.getItem('blogSubmit')


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
   
    
    blogSection.appendChild(newPost);
    newPost.appendChild(content);
    content.textContent = bringOver;
    console.log(bringOver)

  

   
  
   
    
}

blogSection.addEventListener('load', working())
