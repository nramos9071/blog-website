let userName = document.querySelector('#user-name')
let blogTitle = document.querySelector('#blog-title')
let blogPost = document.querySelector('#blog-post')
let submitbtn = document.querySelector('#submit-button')
const dark = document.querySelector('.dark')
let forms= document.getElementsByTagName('input')

let mode = 'dark'

lightMode.addEventListener('click', function () {

    if (mode === 'dark') {

    }
})

/*function sendAlert() {
    const labelName = 
}*/


submitbtn.addEventListener('click', function () {
    

    let blogSubmit = {
        userName: userName.value,
        blogTitle: blogTitle.value,
        blogPost: blogPost.value
    };

    localStorage.setItem('blogSubmit', JSON.stringify(blogSubmit));

  
    
    

})




