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
    console.log('courses is clicked');
    loadJsonData('http://localhost:3000/students');
    // loadHtmlFile('/public/courses/course.html');
    loadHtmlFile('/public/pages/courses/course.html');
});
home.addEventListener('click',e => {
    e.preventDefault();
    contaniner.innerHTML = '';
});

loginbtn.addEventListener('click',e => {
    e.preventDefault();
    loadHtmlFile("/public/pages/forms/login.html");
});

signupbtn.addEventListener('click', e => {
    e.preventDefault();
    loadHtmlFile("/public/pages/forms/signup.html");
})


links.forEach(e => {
    e.addEventListener('click',event => {
        event.preventDefault();
    });
});


function submitForm(event) {
    event.preventDefault();
    var formData = new FormData(document.getElementById('login'));
    fetch('http://localhost:3000/login',{
        method:'POST',
        headers: {

        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
    }).then(response => {
        if(!response.ok) console.error('response code : not okay');
        return response.json();
    }).then(data => {
        console.log(data);
    })
}

