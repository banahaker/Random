const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', ()=> {
    const max = parseInt(document.getElementById('max').value);
    const min = parseInt(document.getElementById('min').value);
    const result = Math.floor(Math.random() * (max - min) + min);
    const resultHTML = document.getElementById('result');
    console.log(resultHTML);
    resultHTML.innerHTML = `${result}`
});