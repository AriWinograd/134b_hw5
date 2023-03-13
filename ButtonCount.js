export function init(){
    class ButtonCount extends HTMLElement{
        constructor(){
            super();

            let clickCounter = 0;
            let btn = document.createElement('button');
            btn.innerHTML = `Times Clicked: ${clickCounter}`;

            btn.addEventListener('click', () => {btn.innerHTML = `Times Clicked: ${++clickCounter}`});

            this.attachShadow({mode: 'open'});
            this.shadowRoot.append(btn);
        }
    }
    customElements.define('button-count', ButtonCount);
}