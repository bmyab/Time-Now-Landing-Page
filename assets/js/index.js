
const formulario = document.querySelector('#formulario')
const btnSubmit  = document.querySelector("button[type=submit]")

console.log(formulario)
console.log(btnSubmit)


formulario.addEventListener('submit' ,(e)=>{
  e.preventDefault();

  const email  = formulario['email'].value;
  console.log(email)
  console.log(error)
  
  
  if(email === ''){
    const error =  document.querySelector('#error');
    error.style.opacity = '1';

  }else{
    error.style.opacity = '0';
  }
})