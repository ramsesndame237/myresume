class Content_information extends HTMLElement {
    constructor() {
        super()
        this.div = document.createElement('div')
        this.div.classList.add('d-flex', 'align-center', 'justify-center')
        this._icon = ''
        this._text = ''
    }

    connectedCallback() {
        const iconAtr = this.getAttribute('icon');
        const textAtr = this.getAttribute('text');
        if (iconAtr) {
            this._icon = iconAtr;
        }
        if (textAtr) {
            this._text = textAtr
        }

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'icon') {
            this._icon = newValue
        }
        if (name === 'text') {
            this._text = newValue
        }
    }

    render(){
        if(this._icon != '' || this._text!= ''){
            let divContent = document.createElement('div')
            divContent.classList.add('d-flex', 'align-center', 'justify-center')
            let iContent=document.createElement('i')
            iContent.classList.add('fa-solid', this._icon)
            divContent.appendChild(iContent)
            let spanContent = document.createElement('span')
            spanContent.appendChild(document.createTextNode(this._text))
            divContent.appendChild(spanContent)
        }

    }
}


export default Content_information