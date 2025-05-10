"use strict";

{
  const contactSubmit = document.querySelector('.contact-button #submit');

  contactSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const contactButtonP = document.querySelector('.contact-button p');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      contactButtonP.textContent = '送信しました。';
      contactButtonP.style.display = 'block';
      contactButtonP.style.borderColor = 'greenyellow';
      setTimeout(() => {
        contactButtonP.textContent = '';
        contactButtonP.style.display = 'none';
      }, 3000);
    } else {
      contactButtonP.textContent = '必須項目を入力してください。';
      contactButtonP.style.display = 'block';
      contactButtonP.style.borderColor = 'red';
      setTimeout(() => {
        contactButtonP.textContent = '';
        contactButtonP.style.display = 'none';
      }, 3000);
    }
  });
}