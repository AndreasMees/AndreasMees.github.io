const api_URL = "https://cat-fact.herokuapp.com/facts/random?amount=1";

async function getMessages() {
     const response = await fetch(api_URL);
      const data = await response.json(); 
      return data;
     }

getMessages().then((fact) => {


    fetch('https://cat-fact.herokuapp.com/facts/random?amount=1')
    .then(response => response.json())
    .then(data => {
     const specificText = data.text;
     const paragraph = document.querySelector('p');
     paragraph.innerHTML = specificText;
    })

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

});
