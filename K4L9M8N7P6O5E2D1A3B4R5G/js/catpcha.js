const termsContent = document.getElementById('terms-content');
const acceptBtn = document.getElementById('accept-btn');
const backBtn = document.getElementById('back-btn');
const captchaQuestion = document.getElementById('captcha-question');
const captchaInput = document.getElementById('captcha-input');

let captchaAnswer;
let termsRead = false;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = num1 + num2;
    captchaQuestion.textContent = `¿Cuánto es ${num1} + ${num2}?`;
}

function checkAcceptConditions() {
    acceptBtn.disabled = !(termsRead && captchaInput.value == captchaAnswer);
}

termsContent.addEventListener('scroll', function() {
    if (termsContent.scrollHeight - termsContent.scrollTop === termsContent.clientHeight) {
        termsRead = true;
        checkAcceptConditions();
    }
});

captchaInput.addEventListener('input', checkAcceptConditions);

acceptBtn.addEventListener('click', function() {
    window.location.href = './Formb7K2mN3pQ5rS8tU1vW4xY6z.html';
});

backBtn.addEventListener('click', function() {
    window.location.href = 'https://coopcartera.github.io/certisaldos/';//colocar URL a pagina de inicio
});

generateCaptcha();
feather.replace();
