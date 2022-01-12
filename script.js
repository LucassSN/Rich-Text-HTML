
const btns = document.querySelectorAll('.btn')

btns.forEach(btns => {
    btns.addEventListener('click',()=>{
        let command = btns.dataset['element'];
        if(command == 'createLink'){
            let url = prompt('Insert Link:', 'https://')
        document.execCommand(command,false,url);
    }else{
        if(command == "insertImage"){
            let url = (prompt('Insert Link:'))
            document.execCommand(command,false,url);

        }else{
            document.execCommand(command,false,null)
        }
    }
    })

})


