function valid(event){

    let input = event.target;

    let span = input.parentElement.lastElementChild;


    let rules = input.dataset.bsValid.split(",");


    for(let item of rules){
       switch (item){
        case 'emphty' : if(input.value == ''){
            validation(span,input);
            break;
        }
        case 'number' : if(isNaN(input.value)){
            number(span,input);
            break;
        }
       }
    }

}




function validation(span,input){

    if(input.value == ''){
    span.innerHTML = 'لطغا فیلد را پر کنید';
    }else if(input.value != ''){
        span.innerHTML = '';
    }
}

function number(span,input){
    if(isNaN(input.value)){
        span.innerHTML = 'لطغا عدد وارد کنید';
    }else if(!isNaN(input.value)){
        span.innerHTML = '';
    }
}