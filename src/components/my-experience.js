const cashflow = require("url:../assets/cashflow.png");
const innen = require("url:../assets/innen.png");
const m6 = require("url:../assets/m6.png");

class MyExperienceComp extends HTMLElement {

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

            .experience {

                display: flex;
                margin-top: 40px;
                align-items: center;
                flex-direction: column;
                justify-content: center;
            }

            .each-experience {

                display: flex;
                align-items: center;
                margin-bottom: 30px;
                flex-direction: column;
            }

            .experience-image-1 {
                width: 150px;
                height: 150px;
                border-radius: 10px;
            }

            .experience-image-3 {
                width: 300px;
                height: 150px;
                border-radius: 10px;
            }

            .experience-text {
                
                padding: 5px;
                max-width: 500px;
                text-align: center;
            }

            @media (max-width: 520px) {

                .experience-title {
                    text-align: center;
                }
                
                .experience-image {

                    width: 200px;
                    height: 100px;
                }

                .experience-text {
                    max-width: 300px;
                    text-align: center;
                }
            }

            @media (max-width: 450px) {
                
                .experience-image-3 {
                    width: 200px;
                    height: 100px;
                    border-radius: 10px;
                }
            }

            @media (min-width: 450px) {
                
                .experience {

                    display: grid;
                    justify-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
                }
            }
        `;

        tecnologiesContainer.innerHTML = `
            <section class="experience-section">

                <h2 class="title"> My experience </h2>
                <div class="experience">

                    <div class="each-experience">
                        <h4 class="experience-title"> Apx: Full stack Web Developer Career (May 2022 - Present) </h4>
                        <img class="experience-image-1" src="data:image/png;base64,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" alt="experience 1" />
                        <p class="experience-text"> I'm part of the Apx guides from the Apx FWD Career. I help answering questions and problems/bugs of the students throughout the career. </p>
                    </div>

                    <div class="each-experience">
                        <h4 class="experience-title"> Innen: Freelancer (August 2022 - Present) </h4>
                        <img class="experience-image-2" src="${innen}" alt="experience 1" />
                        <p class="experience-text"> I'm a freelancer for the Innen company. I help with all diferents types of tasks (FrontEnd and Backend).
                        Ex: Adding buttons to change the language of the page, and also add a function to change the language when this is requested (with react) </p>
                    </div>

                    <div class="each-experience">
                        <h4 class="experience-title"> Freelance Project (June 2022 - June 2022) </h4>
                        <img class="experience-image-3" src="${cashflow}" alt="experience 1" />
                        <p class="experience-text"> I did, as a freelancer, a landing page for a friend that was selling a Cashflow course tutorial. This project took me only a week. </p>
                    </div>

                </div>

            </section>
        `;

        this.shadow.appendChild(tecnologiesContainer);
        this.shadow.appendChild(tecnologiesContainerStyle);
    }
}

customElements.define("experience-comp", MyExperienceComp);