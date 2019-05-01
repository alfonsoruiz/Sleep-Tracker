class Dropdown {
    constructor(element) {
        this.element = element;
        this.menu = this.element.querySelector('.menu');
        this.content = this.element.querySelector('.dropdown-content');
        this.closeMenu = this.element.querySelector('.close-menu');
        this.menu.addEventListener('click', () => this.toggleContent());
        this.closeMenu.addEventListener('click', () => this.toggleContent())
    }

    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));