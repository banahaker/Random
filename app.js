const generateBtn = document.getElementById('generateBtn');
const plusException = document.getElementById('plusException');
let count = 1;
console.log('Welcome to Random Number console!!');
console.log('Let\'s fun');
console.log('You can look for bug in this app');
console.log('If it has bug please contact me:');
console.log('My Email:');
console.log('pn0818x@outlook.com');

generateBtn.addEventListener('click', ()=> {
    let max = parseInt(document.getElementById('max').value);
    max += 1;
    
    let min = parseInt(document.getElementById('min').value);
    let exceptions = [];  
    for(i = 1; i <= count; i++){
        exc = parseInt(document.getElementById(`exc${i}`).value);
        exceptions.push(exc);
    }
    
    exceptions.sort(function(a, b) {
        return a - b;
    });

    let last = exceptions[exceptions.length-1];
    if (max-1 == last) {
        max--;
    }

    let result = Math.floor(Math.random() * (max - min) + min);
    for(v = 0; v < exceptions.length; v++){
        if(min == exceptions[v]){
            min ++;
            result = Math.floor(Math.random() * (max - min) + min);
        }
        if(result == exceptions[v]){
            result  ++;
        }
    }
    
    if(result > max){
        alert('Please check your exception numbers\nYou may exclude all possibility');
        result = 'please check your numbers';
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
        excIn.autocomplete = 'off';
        exception.appendChild(excIn);
    }
});