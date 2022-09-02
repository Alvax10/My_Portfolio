// import { Router } from "@vaadin/router";

class HomePage extends HTMLElement {

    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {

        const divEl = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `

            .about-me-section {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .about-me {
                display: flex;
                padding: 0px 20px;
                align-items: center;
                flex-direction: column;
            }

            .text {
                margin: 0px;
                max-width: 500px;
            }

            .profile-picture {
                margin: 20px;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                box-shadow: 2px 4px 2px goldenrod;
            }
            
            .each-tecnology {

                display: flex;
                align-items: center;
                flex-direction: column-reverse;
            }

            @media (max-width: 450px) {

                .about-me-section {
                    display: flex;
                    align-items: center;
                    flex-direction: column-reverse;
                }

                .profile-picture {
                    width: 180px;
                    height: 180px;
                }

                .text {
                    text-align: center;
                }
            }

            @media (min-width: 450px) {

                .services-section {
                    display: inherit;
                }

                .about-me {
                    display: flex;
                    align-items: start;
                    flex-direction: column;
                }
            }
        `;

        divEl.innerHTML = `
            <header-comp></header-comp>

            <section class="about-me-section">

                <div class="about-me">
                    <h2> About me </h2>
                    <p class="text"> With only 19 years old i am already looking forward to work as a Software Developer in the Tech Industry. Passionate, fast learner and  considarate are some of the characteristics that I think define myself. </p>
                </div>

                <img class="profile-picture" src="https://media-exp1.licdn.com/dms/image/C5603AQEIwu3Tsrpskw/profile-displayphoto-shrink_200_200/0/1641903363331?e=1667433600&v=beta&t=L3bcbp-riNDiRM_3ONRu9btSe9mA4_n5y_PwmHc0KrY" alt="my-picture" />
            </section>

            <!-- MAIN BODY -->

            <tecnologies-comp></tecnologies-comp>
            <projects-comp></projects-comp>
            <experience-comp></experience-comp>
            <contact-comp></contact-comp>

            <!-- FOOTER -->
            <footer-comp></footer-comp>
        `;

        this.shadow.appendChild(divEl);
        this.shadow.appendChild(style);
    }
}

customElements.define("home-page", HomePage);