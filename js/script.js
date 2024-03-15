var links = document.querySelectorAll('a');



const contaniner = document.getElementById('container');
const loginform = document.getElementById('login');
const signupform = document.getElementById('signup');
const loginbtn = document.querySelector('.login-btn');
const signupbtn = document.querySelector('.signup-btn');
const home = document.querySelector('.home');
const courses = document.querySelector('.courses');

function loadJsonData(url) {
    fetch(url).then(response => {
        if(!response.ok) {
            console.log('status code is not okay');
        }
        return response.json();
    }).then(courses => {
        console.log(courses);
    }).catch(err => console.error(err));
}

function loadHtmlFile(url) {
    fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("Status code is not okay");
        }
        return response.text();
    }).then(html =>  {
        contaniner.innerHTML = html;
    }).catch(e => {
        console.error('file not present');
    })
}
courses.addEventListener('click', e => {
    e.preventDefault();
    console.log('buttton is clicked');
    loadJsonData('http://localhost:3000/students');

});
home.addEventListener('click',e => {
    e.preventDefault();
    contaniner.innerHTML = '';
});

loginbtn.addEventListener('click',e => {
    e.preventDefault();
    loadHtmlFile("/forms/login.html");
});

signupbtn.addEventListener('click', e => {
    e.preventDefault();
    loadHtmlFile("/forms/signup.html");
})


links.forEach(e => {
    e.addEventListener('click',event => {
        event.preventDefault();
    });
});