import validator from 'validator';
export function emailValidation(email , label){
    let valid = validator.isEmail(email.value);
  if (valid) {
    email.classList.remove('input_error')
    label.classList.remove('color_error')
    email.classList.add('input_success')
    label.classList.add('color_success')
  }
  else{
    email.classList.remove('input_success')
    label.classList.remove('color_success')
    email.classList.add('input_error')
    label.classList.add('color_error')
  }
}