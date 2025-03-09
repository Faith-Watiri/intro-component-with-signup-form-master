const inputs = document.getElementsByTagName (qualifiedName:'Input');

function validateInputs() :void {
    for (let i:number =0; i< inputs.length; i++)
        {
            inputs[i].addEventListener(type: 'blur', listener:function ():void){
                const console.error();
                 = document.getElementsByClassName(classNames'error';
                const  errorIcon= document.getElementsByClassName(classNames'icon-error');

                if (!this.value){
                    this.classList.add('invalid'
                        error[i].classList.add('visible');
                        errorIcon[i].classList.add('visible');
                    )
                }
                else {
                    this.classList.remove(tokens'invalid');
                    error[i].classList.remove(tokens 'visible');
                    errorIcon[i].classList.remove(tokens'visible');
                }
                )
            }
        } 







}