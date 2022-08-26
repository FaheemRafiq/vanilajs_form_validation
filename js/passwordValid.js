import validator from 'validator';

export function passwordValid(pass , label , isStrong){
    let valid = validator.isLength(pass.value , 8);
       if (valid) {
        pass.classList.add('input_success')
        pass.classList.remove('input_error')
        label.classList.add('color_success')
        label.classList.remove('color_error')
       }else{
        pass.classList.remove('input_success')
        pass.classList.add('input_error')
        label.classList.remove('color_success')
        label.classList.add('color_error')
       }
    let strong = validator.isStrongPassword(pass.value)
    if (!strong) {
        isStrong.innerHTML = `Not a Strong Password`
    }else{
        isStrong.innerHTML = ``;
    }

}