function displayKeyCode(e){
    const body = document.querySelector('body');
    const footer = document.querySelector('.footer');

    body.textContent = '';

    const div = document.createElement('div');
    div.className = 'container_items';

    const keyCodes = {
        'event.key': e.key === ' ' ? 'Space' : e.key,
        'event.keyCode': e.keyCode,
        'event.code': e.code, 
    };  

    for(let key in keyCodes){

        const item = document.createElement('div');
        item.className = 'item';

        const span = document.createElement('span');

        const itemValue = document.createElement('div');
        itemValue.className = 'item-value';
        
        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);
        
        span.appendChild(keyText);
        itemValue.appendChild(valueText);
        
        item.appendChild(span);
        item.appendChild(itemValue);
        div.appendChild(item);
    }

    body.appendChild(div);

    footer.innerHTML = 'Designed by <a href="https://github.com/bakna2t" target="_blank">_&#216;k</a>';
    footer.className = 'footer';
    body.appendChild(footer);
}

//Remove heading text on page
function removeHeading(){
    const heading  = document.querySelector('.heading');
    if(heading === 'heading'){
        heading.remove('heading');
    }
}

//Random change background color
function changeBgColor(){
    document.body.style.backgroundColor =
    'rgb(' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) + 
        ',' + Math.round(Math.random() * 255) + ')';
    document.body.style.transition = 'all 1s ease-in-out';
}

window.addEventListener('keydown', displayKeyCode);
window.addEventListener('keydown', removeHeading);
window.addEventListener('keydown', changeBgColor);