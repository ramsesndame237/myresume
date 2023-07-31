class HeaderRusume extends  HTMLElement{

    constructor() {
        super();
        this.header = document.createElement('header')
        this.header.classList.add('resume_header')
        this.appendChild(this.header);


    }


}
export default HeaderRusume
