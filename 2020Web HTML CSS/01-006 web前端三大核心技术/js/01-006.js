
    let div = document.querySelector('div');
    let timer = null;
    let flag = true;
    div.onmouseover = function(){
        timer = setInterval(() => {
            if(flag){
                div.style.color = 'blue';
                div.style.fontStyle = 'normal';
            }else{
                div.style.color = 'red';
                div.style.fontStyle = 'italic';
            }
            flag = !flag;
        }, 100);
    };
    div.onmouseout = function(){
        clearInterval(timer);
    };
