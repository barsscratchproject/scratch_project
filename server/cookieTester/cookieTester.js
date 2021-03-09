console.log('Script loaded!');

const inputButton = document.getElementById('inputButton');

inputButton.addEventListener('click', (e) => {
  const userNameInput = document.getElementById('userNameInput').value;
  const reqBody = { userName: userNameInput };

  fetch('api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqBody),
  })
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(data);
    });
});

// /Users/anthony/Documents/codesmith/Projects/scratch_project/scratch_project/server/cookieTester.js
// server/cookieTester.js
