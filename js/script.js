function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_rjrbklj";
    const templateID = "template_ooo31vj";


    emailjs.send(serviceID, templateID, params)
        .then(res => {
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            console.log(res);
            alert("Your message was sent successfully!!");
        })
        .catch(err => console.log(err));

}

let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}