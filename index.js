const namef = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const textpassword = document.getElementById('textpassword')
const reppassword = document.getElementById('reppassword')
const textreppassword = document.getElementById('textreppassword')
const namemessage = document.getElementById('namemessage')
const emailmessage = document.getElementById('emailmessage')
const passwordmessage = document.getElementById('passwordmessage')
const reppasswordmessage = document.getElementById('repmessage')
const continputname = document.getElementById('continputname')
const continputemail = document.getElementById('continputemail')
const continputpassword = document.getElementById('continputpassword')
const continputreppw = document.getElementById('continputreppw')
const submit = document.getElementById('submit')
const condition = document.getElementById('condition')
const seereppassword = document.getElementById('seereppassword')
const seepassword = document.getElementById('seepassword')
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var formatemail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var errorname = true
var erroremail = true
var errorpassword = true

// validation nome
namef.addEventListener("input", function(e) {

    if((format.test(e.target.value))||(e.target.value.length <=3)){
        namemessage.innerHTML = 'ce nom est invalide'
        namemessage.classList.add('error')
        continputname.classList.add('error_input_box')
        continputname.classList.remove('succes')
        namemessage.classList.remove('suseccspan')

    }else{
        namemessage.innerHTML = 'ce nom est valide'
        namemessage.classList.remove('error')
        namemessage.classList.add('suseccspan')
        continputname.classList.remove('error_input_box')
        continputname.classList.add('succes')
        errorname = false
    }
});
//validation email
email.addEventListener("input", function(e) {
    console.log( formatemail.test(e.target.value))
    if(!formatemail.test(e.target.value)){
        emailmessage.innerHTML = 'ce email est invalide'
        emailmessage.classList.add('error')
        continputemail.classList.add('error_input_box')
        continputemail.classList.remove('succes')
        emailmessage.classList.remove('suseccspan')
    }else{
        emailmessage.innerHTML = 'ce email est valide'
        emailmessage.classList.remove('error')
        emailmessage.classList.add('suseccspan')
        continputemail.classList.remove('error_input_box')
        continputemail.classList.add('succes')
        erroremail = false
    }
});

//validation mot de pass
password.addEventListener("input", function(e) {
textpassword.value = e.target.value

    if((e.target.value.length < 4)||(e.target.value.length > 6)){
        passwordmessage.innerHTML = 'le mot de passe doit comprendre entre 4 et 6 caractères'
        passwordmessage.classList.add('error')
        continputpassword.classList.add('error_input_box')
        continputpassword.classList.remove('succes')
        passwordmessage.classList.remove('suseccspan')
    }else{
        passwordmessage.innerHTML = 'bon mot de passe        '
        passwordmessage.classList.remove('error')
        passwordmessage.classList.add('suseccspan')
        continputpassword.classList.remove('error_input_box')
        continputpassword.classList.add('succes')
        errorpassword  = false
    }
});
textpassword.addEventListener("input", function(e) {
  password.value = e.target.value

  if((e.target.value.length < 4)||(e.target.value.length > 6)){
      passwordmessage.innerHTML = 'le mot de passe doit comprendre entre 4 et 6 caractères'
      passwordmessage.classList.add('error')
      continputpassword.classList.add('error_input_box')
      continputpassword.classList.remove('succes')
      passwordmessage.classList.remove('suseccspan')
  }else{
      passwordmessage.innerHTML = 'bon mot de passe        '
      passwordmessage.classList.remove('error')
      passwordmessage.classList.add('suseccspan')
      continputpassword.classList.remove('error_input_box')
      continputpassword.classList.add('succes')
      errorpassword  = false
  }
});
//validation de confirmation mot de pass
reppassword.addEventListener("input", function(e) {
textreppassword.value = e.target.value

    if(e.target.value != password.value){
        reppasswordmessage.innerHTML = 'les mots de passe ne correspondent pas'
        reppasswordmessage.classList.add('error')
        continputreppw.classList.add('error_input_box')
        continputreppw.classList.remove('succes')
        reppasswordmessage.classList.remove('suseccspan')
    }else{
        reppasswordmessage.innerHTML = 'mot de passe confirmé'
        reppasswordmessage.classList.remove('error')
        reppasswordmessage.classList.add('suseccspan')
        continputreppw.classList.remove('error_input_box')
        continputreppw.classList.add('succes')
        errorpassword = false
    }
});

textreppassword.addEventListener("input", function(e) {
  reppassword.value = e.target.value

  if(e.target.value != password.value){
      reppasswordmessage.innerHTML = 'les mots de passe ne correspondent pas'
      reppasswordmessage.classList.add('error')
      continputreppw.classList.add('error_input_box')
      continputreppw.classList.remove('succes')
      reppasswordmessage.classList.remove('suseccspan')
  }else{
      reppasswordmessage.innerHTML = 'mot de passe confirmé'
      reppasswordmessage.classList.remove('error')
      reppasswordmessage.classList.add('suseccspan')
      continputreppw.classList.remove('error_input_box')
      continputreppw.classList.add('succes')
      errorpassword = false
  }
});
//soumettre les informations
submit.addEventListener("click", function(e) {

e.preventDefault();
    if(errorpassword || erroremail || errorname || !condition.checked){
        alert("L'information que vous avez entré est invalide");
    }else{
          alert("L'information que vous avez entré est valide");
    }
});

//changer le type d'input lorsque l'utilisateur clique sur l'icône
seereppassword.addEventListener("click", function(e) {

    if(seereppassword.classList.contains("fa-eye")){
    seereppassword.classList.remove('fa-eye')
    seereppassword.classList.add('fa-eye-slash')
textreppassword.style.display = "flex"
reppassword.style.display = "none"

    }else{
    seereppassword.classList.add('fa-eye')
      seereppassword.classList.remove('fa-eye-slash')
      textreppassword.style.display = "none"
      reppassword.style.display = "flex"


    }
});
//changer le type d'input lorsque l'utilisateur clique sur l'icône
seepassword.addEventListener("click", function(e) {
    if(e.target.classList.contains("fa-eye")){
      e.target.setAttribute('class', 'far fa-eye-slash')
      textpassword.style.display = "flex"
      password.style.display = "none"

    }else{
      e.target.setAttribute('class', 'far fa-eye')

      textpassword.style.display = "none"
      password.style.display = "flex"
    }
});


textpassword.addEventListener("input", function(e) {
  password.value = e.target.value

  if((e.target.value.length < 4)||(e.target.value.length > 6)){
      passwordmessage.innerHTML = 'le mot de passe doit comprendre entre 4 et 6 caractères'
      passwordmessage.classList.add('error')
      continputpassword.classList.add('error_input_box')
      continputpassword.classList.remove('succes')
      passwordmessage.classList.remove('suseccspan')
  }else{
      passwordmessage.innerHTML = 'bon mot de passe        '
      passwordmessage.classList.remove('error')
      passwordmessage.classList.add('suseccspan')
      continputpassword.classList.remove('error_input_box')
      continputpassword.classList.add('succes')
      errorpassword  = false
  }
});
textreppassword.addEventListener("input", function(e) {
  reppassword.value = e.target.value

  if(e.target.value != password.value){
      reppasswordmessage.innerHTML = 'les mots de passe ne correspondent pas'
      reppasswordmessage.classList.add('error')
      continputreppw.classList.add('error_input_box')
      continputreppw.classList.remove('succes')
      reppasswordmessage.classList.remove('suseccspan')
  }else{
      reppasswordmessage.innerHTML = 'mot de passe confirmé'
      reppasswordmessage.classList.remove('error')
      reppasswordmessage.classList.add('suseccspan')
      continputreppw.classList.remove('error_input_box')
      continputreppw.classList.add('succes')
      errorpassword = false
  }
});
