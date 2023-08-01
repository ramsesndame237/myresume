class HeaderRusume extends HTMLElement {

    constructor() {
        super();
        this.header = document.createElement('header')
        this.header.classList.add('resume_header')
        this.appendChild(this.header);
        this.div = document.createElement('div')
        this.div.classList.add('resume_header_content', 'd-flex', 'justify-content', 'flex-colum', 'align-center')
        this.header.appendChild(this.div)
        this._user_data = {}
    }

    connectedCallback() {
        const userDataAtr = this.getAttribute('user-data');
        if (userDataAtr) {
            this._user_data = JSON.parse(userDataAtr);
        }
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'user-data') {
            this._user_data = JSON.parse(newValue)
            this.render()
        }
    }

    render() {
       if(Object.keys(this._user_data).length >0){
           const  divNameElement = document.createElement('div')
           divNameElement.classList.add('name_of_the_user')
           const h1Element = document.createElement('h1')
           h1Element.appendChild(document.createTextNode(this._user_data.name))
           divNameElement.appendChild(h1Element)
           this.div.appendChild(divNameElement)
           const  divJobElement = document.createElement('div')
           divJobElement.classList.add('job_title_user')
           const h2Element = document.createElement('h2')
           h2Element.appendChild(document.createTextNode(this._user_data.job_title))
           divJobElement.appendChild(h2Element)
           this.div.appendChild(divJobElement)
           const userDisplay = document.createElement('user-display')
           userDisplay.setAttribute('user-data', this._user_data)
           this.div.appendChild(userDisplay)
       }
    }

}

export default HeaderRusume
