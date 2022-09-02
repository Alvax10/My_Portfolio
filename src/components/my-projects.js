const m6 = require("url:../assets/m6.png");
const m7 = require("url:../assets/m7.png");
const m8 = require("url:../assets/m8.png");
const m10 = require("url:../assets/m10.png");
const m11 = require("url:../assets/m11.png");

class MyProjectsComp extends HTMLElement {

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

            .projects {

                display: flex;
                margin-top: 40px;
                align-items: center;
                flex-direction: column;
                justify-content: center;
            }

            .each-project {

                display: flex;
                align-items: center;
                margin-bottom: 30px;
                flex-direction: column;
            }

            .project-image {
                width: 400px;
                height: 200px;
                border-radius: 10px;
                border: 1px solid darkkhaki;
            }

            .link {
                margin-top: 20px;
                color: darkkhaki;
            }

            @media (max-width: 520px) {

                .project-title {
                    text-align: center;
                }
                
                .project-image {

                    width: 200px;
                    height: 100px;
                }
            }

            @media (min-width: 450px) {

                .projects {

                    display: grid;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
                }
            }
        `;

        tecnologiesContainer.innerHTML = `
            <section class="projects-section">

                <h2 class="title"> My projects </h2>
                <div class="projects">

                    <div class="each-project">
                        <h4 class="project-title"> Rock, paper, scissors (One player) </h4>
                        <img class="project-image" src="${m6}" alt="project 1" />
                        <a class="link" href="https://github.com/Alvax10/Rock_paper_scissors"> Link to github repository </a>
                    </div>

                    <div class="each-project">
                        <h4 class="project-title"> Rock, paper, scissors (online) </h4>
                        <img class="project-image" src="${m6}" alt="project 1" />
                        <a class="link" href="https://github.com/Alvax10/Rock_paper_scissors_online"> Link to github repository </a>
                    </div>

                    <div class="each-project">
                        <h4 class="project-title"> Lost pets webapp </h4>
                        <img class="project-image" src="${m7}" alt="project 1" />
                        <a class="link" href="https://github.com/Alvax10/Lost_pets-webapp"> Link to github repository </a>
                    </div>

                    <div class="each-project">
                        <h4 class="project-title"> Lost pets webapp (react) </h4>
                        <img class="project-image" src="${m8}" alt="project 2" />
                        <a class="link" href="https://github.com/Alvax10/Lost_pets_react"> Link to github repository </a>
                    </div>

                    <div class="each-project">
                        <h4 class="project-title"> E-commerce (FrontEnd) </h4>
                        <img class="project-image" src="${m10}" alt="project 3" />
                        <a class="link" href="https://github.com/Alvax10/e-commerce_frontend"> Link to github repository </a>
                    </div>

                    <div class="each-project">
                        <h4 class="project-title"> E-commerce (BackEnd) </h4>
                        <img class="project-image" src="${m10}" alt="project 3" />
                        <a class="link" href="https://github.com/Alvax10/e-commerce_backend"> Link to github repository </a>
                    </div>

                    <div class="each-project">
                        <h4 class="project-title"> Catalogue MVP (Scrum) </h4>
                        <img class="project-image" src="${m11}" alt="project 4" />
                        <a class="link" href="https://github.com/Alvax10/e-commerce_Scrum"> Link to github repository </a>
                    </div>
                </div>

            </section>
        `;

        this.shadow.appendChild(tecnologiesContainer);
        this.shadow.appendChild(tecnologiesContainerStyle);
    }
}

customElements.define("projects-comp", MyProjectsComp);