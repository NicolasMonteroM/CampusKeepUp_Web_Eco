class uClass {

    constructor(uClass) {
        this.uClass = uClass;

    }

    render = () => {

        let component = document.createElement('div');
        const url = `uClass.html?${this.uClass.classID}`;
        component.setAttribute('href', url);

        component.innerHTML = `
        <div class="classes__class" >
            <p class="classes__name">
            <a href="${url}">
            ${this.uClass.name}
            </a>
            </p>

            <p class="classes__classID">
                ID de la clase: <strong>${this.uClass.classID}</strong>
            </p>
        </div>
        `;

        return component;

    }

}