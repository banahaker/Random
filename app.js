const generateBtn = document.getElementById('generateBtn');
const plusException = document.getElementById('plusException');
let count = 1;

generateBtn.addEventListener('click', ()=> {
    let max = parseInt(document.getElementById('max').value);
    max = max + 1;
    let min = parseInt(document.getElementById('min').value);
    let exceptions = [];
    let exc =  document.getElementById(`exc${count}`).value;    
    for(i = 1; i<=count; i++){
        exc = document.getElementById(`exc${i}`).value;
        exceptions.push(exc);
    }
    console.log(exceptions.length);
    let result = Math.floor(Math.random() * (max - min) + min);
    for(v = 0; v<exceptions.length; v++){
        if(min == exceptions[v]){
            min++;
            result = Math.floor(Math.random() * (max - min) + min);
        }
        if(result == exceptions[v]){
            result = result-2;
        }
        if(result < min){
            result++;
        }
    }
    const resultHTML = document.getElementById('result');
    resultHTML.innerHTML = `${result}`
});

plusException.addEventListener('click', () => {
    const exception = document.getElementById('allException');
    const exc = document.getElementById(`exc${count}`).value;
    if( exc === ""){
        alert('Please input the number in former input box\n請在前一個輸入框輸入數字')
    }else{
        count ++;
        let excIn = document.createElement('input');
        excIn.id = `exc${count}`;
        excIn.className = `exception`;
        excIn.placeholder = 'Num';
        exception.appendChild(excIn);
    }
});