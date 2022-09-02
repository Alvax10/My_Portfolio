
class TecnologiesComp extends HTMLElement {

    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {

        const tecnologiesContainer = document.createElement("div");
        tecnologiesContainer.className = "header";
        const tecnologiesContainerStyle = document.createElement("style");

        tecnologiesContainerStyle.innerHTML = `

            .title {
                margin-top: 50px;
                text-align: center;
                text-decoration: overline underline goldenrod;
            }

            .tecnologies {

                display: flex;
                margin-top: 40px;
                align-items: center;
                flex-direction: column;
            }

            .each-tecnology {

                display: flex;
                align-items: center;
                flex-direction: column-reverse;
            }

            .tecnology-image {
                width: 150px;
                height: 80px;
                border-radius: 10px;
            }

            @media (min-width: 450px) {

                .tecnologies {
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                }
            }
        `;

        tecnologiesContainer.innerHTML = `
            <section class="tecnologies-section">

                <h2 class="title"> Tecnologies </h2>
                <div class="tecnologies">

                    <div class="each-tecnology">
                        <h4> Next.js </h4>
                        <img class="tecnology-image" src="https://i.imgur.com/V64B49d.png" alt="my-picture" />
                    </div>

                    <div class="each-tecnology">
                        <h4> Node.js </h4>
                        <img class="tecnology-image" src="https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png" alt="my-picture" />
                    </div>

                    <div class="each-tecnology">
                        <h4> Typescript </h4>
                        <img class="tecnology-image" src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png" alt="my-picture" />
                    </div>

                    <div class="each-tecnology">
                        <h4> React </h4>
                        <img class="tecnology-image" src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" alt="my-picture" />
                    </div>
                </div>

            </section>
        `;

        this.shadow.appendChild(tecnologiesContainer);
        this.shadow.appendChild(tecnologiesContainerStyle);
    }
}

customElements.define("tecnologies-comp", TecnologiesComp);