// import { Router } from "@vaadin/router";
import { Router } from "@vaadin/router";

class HeaderComp extends HTMLElement {

    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {

        const headerEl = document.createElement("header");
        headerEl.className = "header";
        const headerStyle = document.createElement("style");

        const menuMobile = document.createElement("div");
        menuMobile.className = "menu-mobile";

        headerStyle.innerHTML = `
            .header {
                height: 50px;
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

            .close-icon {
                top: 20px;
                margin: 0px;
                right: 15px;
                display: none;
                cursor: pointer;
                font-size: 30px;
                position: fixed;
                text-underline-position: under;
                text-decoration: overline underline;
            }

            .menu-mobile {

                width: 100%;
                display: none;
                height: 100vh;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                background-color: darkkhaki;
            }

            .nav {
                gap: 20px;
                display: none;
                align-items: center;
                justify-content: center;
            }

            @media (max-width: 450px) {
                .item {
                    text-decoration: underline;
                }
            }

            .item:hover {
                cursor: pointer;
                text-decoration: underline;
            }
            
            .hamburger {
                gap: 4px;
                width: 40px;
                display: flex;
                border: none;
                flex-direction: column;
            }

            .bar {
                width: 100%;
                height: 6px;
                border: none;
                border-radius: 5px;
                background-color: #000;
                box-shadow: 1px 3px #888888;
            }

            @media(min-width: 450px) {

                .nav {
                    display: flex;
                }

                .hamburger {
                    display: none;
                }
            }
        `;

        headerEl.innerHTML = `
            <h3 class="icon"> ALVARO </h3>
            
            <nav class="nav">
                <p class="project item"> Proyectos </p>
                <p class="experience item"> Experiencia </p>
                <p class="contact item"> Contáctame </p>
                <p class="services item"> Servicios </p>
            </nav>

            <div class="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        `;

        menuMobile.innerHTML = `
            <h3 class="close-icon"> X </h3>

            <p class="project item"> Proyectos </p>
            <p class="experience item"> Experiencia </p>
            <p class="contact item"> Contáctame </p>
            <p class="services item"> Servicios </p>
        `;

        this.shadow.appendChild(headerEl);
        this.shadow.appendChild(menuMobile);
        this.shadow.appendChild(headerStyle);

        const project = this.shadow.querySelector(".project");
        const contact = this.shadow.querySelector(".contact");
        const services = this.shadow.querySelector(".services");
        const hamburger = this.shadow.querySelector(".hamburger");
        const closeMenu = this.shadow.querySelector(".close-icon");
        const experience = this.shadow.querySelector(".experience");

        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            menuMobile.style.display = "flex";
            closeMenu.style.display = "initial";
            headerEl.style.display = "none";
        });

        closeMenu.addEventListener('click', (e) => {
            e.preventDefault();
            menuMobile.style.display = "none";
            closeMenu.style.display = "none";
            headerEl.style.display = "flex";
        });

        project.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/projects");
        });

        experience.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/experience");
        });

        contact.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/contact");
        });

        services.addEventListener('click', (e) => {
            e.preventDefault();
            Router.go("/services");
        });
    }
}

customElements.define("header-comp", HeaderComp);