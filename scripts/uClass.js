class uClass {

    constructor(uClass) {
        this.uClass = uClass;

    }

    render = () => {
        let component = document.createElement('div');
        component.innerHTML = `
        <div class="classes__class" >
            <p class="classes__name">
                ${this.uClass.name}
            </p>

            <p class="classes__classID">
                ${this.uClass.classID}
            </p>
        </div>
        `;

        return component;

    }

}