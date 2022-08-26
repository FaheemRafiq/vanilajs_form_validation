import './style.css';
import { emailValidation } from './js/emailValid';
import { passwordValid } from './js/passwordValid';

document.querySelector('#app').innerHTML = `
  <div id="main">
    <div class="imgcontainer">
      <img src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/free-Whatsapp-Dp-Boys-Stylish-Girls-Cute-Images-pics.jpg" alt="Avatar" class="avatar">
    </div>
  
    <form action="https://www.google.com/signin" method="post">
        <h2>Login Form</h2>

        <div class="data">
              <label id="email_label" for="email"><b>Email Or Username</b></label>
              <input type="text" class="email_error" id="email" placeholder="Enter email or username" name="email" required>

              <label id="password_label" for="psw"><b>Password</b></label>
              <input type="password" id="password" placeholder="Enter Password" name="psw" required>
                <span id="isStrong" style="color:red;"></span>
              <div id="reveal">
                  <input type="checkbox" name="showpassword" id="show_password" value="Show Password"><h3>Show Password</h3>      
              </div>
              <button id="submit" type="submit">Login</button>
              <div id="reveal">
                  <input type="checkbox" name="showpassword" id="show_password" value="Show Password"><h3>Remember me</h3>      
              </div>
        </div>
        <div class="special">
              <span class="psw">Forgot <a href="#">password?</a></span>
              <button type="button" class="cancelbtn">Cancel</button>
        </div>
  </form>
  </div>
`



// Email Validation
var email = document.querySelector('#email')
email.addEventListener('keyup', ()=>{
  let elabel = document.querySelector('#email_label')
  emailValidation(email , elabel)
})
// Password Validation
var password = document.querySelector('#password')
password.addEventListener('keyup' , ()=>{
  let isStrong = document.querySelector('#isStrong')
  let plabel = document.querySelector('#password_label')
  passwordValid(password , plabel , isStrong)
})
// Show Password
var checkbox =document.querySelector('#show_password')
checkbox.addEventListener('click' , ()=>{
  if (checkbox.checked == true) {
   password.type = "text";
  }
  else{
    password.type = "password";
  }
})



