// import { Router } from "@vaadin/router";
import { Router } from "@vaadin/router";

class FooterComp extends HTMLElement {

    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {

        const footerEl = document.createElement("footer");
        footerEl.className = "footer";
        const footerStyle = document.createElement("style");

        footerStyle.innerHTML = `

            .footer {
                height: 150px;
                display: flex;
                padding: 10px;
                align-items: center;
                background-color: darkkhaki;
                justify-content: space-between;
            }

            .icon {
                cursor: pointer;
                text-underline-position: under;
                text-decoration: overline underline;
            }

            .social-media {

                gap: 20px;
                display: flex;
                align-items: baseline;
                flex-direction: column;
            }

            .social-media-label {

                gap: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row-reverse;
            }

            .social-media-image {
                width: 30px;
                height: 30px;
            }

            .link {

                color: black;
                cursor: pointer;
                text-decoration: none;
            }

            @media(max-width: 400px) {
                
                .footer {
                    height: 250px;
                    flex-direction: column;
                }

                .social-media {
                    margin-top: 5px;
                    margin-bottom: 20px;
                }
            }

            @media(min-width: 450px) {
                
                .footer {
                    height: 250px;
                    flex-direction: row;
                }

                .footer {
                    font-size: 24px;
                }

                .link {
                    font-size: 24px;
                }

                .link:hover {
                    text-decoration: underline black;
                }

                .social-media-image {
                    width: 40px;
                    height: 40px;
                }
            }
        `;

        footerEl.innerHTML = `
            <h3 class="icon"> ALVARO </h3>

            <div class="social-media">

                <label class="social-media-label">
                    <a class="link linkedin" href="https://www.linkedin.com/in/%C3%A1lvaro-bast%C3%ADa-820929224/"> Linkedin </a>
                    <img class="social-media-image" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="social-media-image" />
                </label>

                <label class="social-media-label">
                    <a class="link github" href="https://github.com/Alvax10"> Github </a>
                    <img class="social-media-image" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="social-media-image" />
                </label>

                <label class="social-media-label">
                    <a class="link apx-profile" href="https://apx.school/profile/5d690dea-727e-4f75-848d-baa9f031a073"> Apx profile </a>
                    <img class="social-media-image" src="https://res.cloudinary.com/apx/image/upload/v1653410500/profile-apx/icon_apx.png" alt="social-media-image" />
                </label>

            </div>
        `;

        this.shadow.appendChild(footerEl);
        this.shadow.appendChild(footerStyle);
    }
}

customElements.define("footer-comp", FooterComp);