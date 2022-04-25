//const btn = document.createElement('button');
export function createModal(btn) {
    

    const divModal = document.createElement('div');
    document.body.appendChild(divModal);
    divModal.className = 'modal';
    
    const divModalContent = document.createElement('div');
    divModalContent.className = 'divmodalContent';
    divModal.appendChild(divModalContent);

    const close = document.createElement('span');
    close.className = 'close';
    close.innerHTML = '&times';
    divModalContent.appendChild(close);
 
    
    btn.onclick = () => divModal.style.display = "block";
    close.onclick = () => divModal.style.display = "none";
    window.onclick = function(event) {
        if (event.target == divModal) {
            divModal.style.display = "none";
        }
    }
   
    
    const inputContainer = document.createElement('div');
    inputContainer.id = 'input-container';
    divModalContent.appendChild(inputContainer);

    const name = createElement('input', 'name');
    inputContainer.appendChild(name);

    const price = createElement('input', 'price');
    inputContainer.appendChild(price);

    const description = createElement('input', 'description');
    inputContainer.appendChild(description);

    
    const itemsAvailable = createElement('input', 'items available')
    inputContainer.appendChild(itemsAvailable);
}

function createElement(className, placeholder) {
    const input = document.createElement('input');
    input.className = className;
    input.placeholder = placeholder;

    return input;
}