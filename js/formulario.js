(function () {
    
    let propFormulario = {
    
    formulario: document.getElementById('formulario_contacto'),
    elementos: document.getElementById('formulario_contacto').elements,
    error: null,
    textoError: null,
    }
    
    let metFormulario = {
        
        inicio: function () {
            for (let i = 0; i < propFormulario.elementos.length; i++) {
            
                if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
                    
                    propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                    propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                } 
            };
    
            propFormulario.formulario.addEventListener('submit', metFormulario.validarInput);
        },
    
        focusInput: function () {
            this.parentElement.children[1].className = 'label active';
        },
    
        blurInput: function () {
    
            if (this.value == '') {
                this.parentElement.children[1].className = 'label';
            }
        },
    
        validarInput: function (e) {
            
            for (let i = 0; i < propFormulario.elementos.length; i++) {
    
                if (propFormulario.elementos[i].value == '') {
                    e.preventDefault();
    
                    if (propFormulario.elementos[i].parentElement.children.length < 3) {
                        
                        propFormulario.error = document.createElement('p');
                        propFormulario.textoError = document.createTextNode('Por favor completa el campo con tu ' + propFormulario.elementos[i].name);
                        propFormulario.error.appendChild(propFormulario.textoError);
                        propFormulario.error.className = 'error';
        
                        propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
                    }
                   
                } else {
                    if (propFormulario.elementos[i].parentElement.children.length >= 3) {

                        propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                        propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
                    }
                }
            }
        },
    }
    
    metFormulario.inicio();
    
    }())
        