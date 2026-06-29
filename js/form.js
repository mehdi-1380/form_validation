let boolian = false;

function validation(event){

    let input = event.target;

    let span = input.parentElement.lastElementChild;


    let rules = input.dataset.bsValid.split(",");


    for(let item of rules){
       switch (item){
        case 'empty' : empty(span,input);
            break;
         case 'email' : if(input.value != ''){emailcheck(span,input)};
        break ;
        case 'number' : number(span,input);
            break;

       
       
    }

}
}

function emailcheck(span,input){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    if(!(emailRegex.test(input.value))){
        invalid(span,"لطفا ایمیل را درست وارد کنید");
    }else if(input.value != '' && emailRegex.test(input.value)){
        valid(span);
    }

}



function empty(span,input){

    if(input.value == ''){
        invalid(span,"لطفا فیلد را پر کنید");
        
    }else if(input.value != ''){
        valid(span);
        
    }
}


function valid(span){
    span.innerHTML = '' ;
    
}

function invalid(span,msg){
    span.innerHTML = msg;
    span.className = "error";
    boolian = true;
}








function number(span,input){
    if(isNaN(input.value)){
        invalid(span,"لطفا عدد وارد کنید");
    }else if(input.value != '' && !isNaN(input.value)){
        valid(span);
    }
}


function checkAll(event){

    boolian = false ;
    
    let inputs = document.querySelectorAll('input');


    for(let item of inputs){
        let parent = item.parentElement;
        let span = parent.lastElementChild;
        if(item.value == ''){
            invalid(span,"لطفا فیلد را پر کنید");
        }
    }
    if(boolian){
        event.preventDefault();
    }
}