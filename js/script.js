var links = document.querySelectorAll('a');



const contaniner = document.getElementById('container');
const loginform = document.getElementById('login');
const signupform = document.getElementById('signup');
const loginbtn = document.querySelector('.login-btn');
const signupbtn = document.querySelector('.signup-btn');


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