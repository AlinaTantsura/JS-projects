const container = document.querySelector('.container');
const count = document.querySelector('.js-count');


    container.addEventListener('click', handleClickNumber);
function handleClickNumber(event){
    if(event.currentTarget === event.target){
        return;
    }
    let num = event.target.textContent;
    let firstNum = num;
   
        firstNum.padEnd(i, num);
        console.log(firstNum);
 
    count.textContent = firstNum;
    
}