const btn = document.createElement('button');
export function createModalBoxButton() {
    document.body.appendChild(btn);
    const pencil = document.createElement('span');
    pencil.className = 'pencil';
    pencil.innerHTML ='&#9998;';
    btn.appendChild(pencil);

}


export function createModal() {
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
    const name = document.createElement('input');
    name.className = 'input';
    name.placeholder = 'name';
    inputContainer.appendChild(name);

    const price = document.createElement('input');
    price.className = 'input';
    price.placeholder = 'price';
    inputContainer.appendChild(price);

    const description = document.createElement('input');
    description.className = 'input';
    description.placeholder = 'description';
    inputContainer.appendChild(description);
    
    const itemsAvailable = document.createElement('input');
    itemsAvailable.className = 'input';
    itemsAvailable.placeholder = 'items available';
    inputContainer.appendChild(itemsAvailable);
}