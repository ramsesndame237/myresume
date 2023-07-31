class Content_information extends  HTMLElement{
    constructor() {
        super();
        this.div=document.createElement('div')
        this.div.classList.add('d-flex','align-center','justify-center')
        this.div.setAttribute('icon', this.getAttribute('icon'))
        const icon = this.getIcon()
        if(icon){
        let customIcon = document.createElement('i')
            customIcon.classList.add(icon)
            this.div.appendChild(customIcon)
        }
        const text = this.getText()
        if(text){
            let customText = document.createElement('span')
            customText.innerHTML(text)
            this.div.appendChild(customText)
        }
    }

    get getText(){
        return this.div.getAttribute('text')
    }
    set divTextContent(val){
        val != null ? this.div.setAttribute(val) : null
    }
    get getIcon(){
        return this.div.getAttribute('icon')
    }
    set divIcon(val){
        val != null ? this.div.setAttribute(val) : null
    }
}

export default  Content_information