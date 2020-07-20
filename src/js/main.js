const checkbox = document.getElementById('checkbox');
const rowMonth = document.getElementsByClassName('month');
const rowYear = document.getElementsByClassName('year');

checkbox.addEventListener('change',(e) =>{
  if(e.target.checked){
    for(let price of rowMonth){
      price.style.display = 'inline';
    }
    for(let price of rowYear){
      price.style.display = 'none';
    }
  }else{
    for(let price of rowMonth){
      price.style.display = 'none';
    }
    for(let price of rowYear){
      price.style.display = 'inline';
    }
  }
})