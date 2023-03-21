const otpInput=document.querySelectorAll('.otp-card-input input');
const verifyBtn=document.querySelector('.otp-card button');
const toast=document.querySelector('#toast');


otpInput.forEach((input, index)=>{
    input.addEventListener('input', (e)=>{
        if(e.target.value.length===1){
            if(index<otpInput.length-1){
                otpInput[index+1].focus();
            }else{
                verifyBtn.removeAttribute('disabled');
            }
        }else{
            verifyBtn.setAttribute('disabled','disabled');
        }
    });
    verifyBtn.setAttribute('disabled','disabled');
});

verifyBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const otpCode=otpInput[0].value+otpInput[1].value+otpInput[2].value+otpInput[3].value+otpInput[4].value;
    if(otpCode==='12345'){
        showToast('OTP verified successfully!', true);
        otpInput.forEach(input => input.value='');
        if(index<otpInput.length-1){
            otpInput[index+1].focus();
        }
    }else{
        showToast('Incorrect OTP, please try again.', false);
        otpInput.forEach(input => input.value='');
        if(index<otpInput.length-1){
            otpInput[index+1].focus();
        }
    }
});

//show message
function showToast(message,success){
    toast.textContent=message;
    toast.style.opacity='1';
    if(success){
        toast.style.color='#00ff00';
        verifyBtn.setAttribute('disabled','disabled');
    }else{
        toast.style.color='#ff0000';
        verifyBtn.setAttribute('disabled','disabled');

    }
    setTimeout(() =>{
        toast.style.opacity='0';
    }, 5000); //it hide message after 5 sec.
}