import Content_information from "./content_information.js";

class User_information extends HTMLElement {
    static get observedAttributes() {
        return ['user-data']
    }

    constructor() {
        super();
        this.div = document.createElement('div');
        this.div.classList.add('user_contact_link_container', 'd-flex');
        this._user_data = {};
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
        this.innerHTML = ''
        if (this._user_data.hasOwnProperty('personal')) {
            console.log(this._user_data.personal)
            Object.keys(this._user_data.personal).forEach((element)=>{
            var customElement = document.createElement('custom-content')
                customElement.setAttribute('icon', element.icon)
                customElement.setAttribute('text', element.text)
                this.appendChild(customElement)
            })
        }
    }


}

export default User_information