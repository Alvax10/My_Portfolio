import { state } from "../state";
import swal from "sweetalert";

class ContactMeComp extends HTMLElement {

    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {

        const contactMeContainer = document.createElement("div");
        contactMeContainer.className = "header";
        const contactMeContainerStyle = document.createElement("style");

        contactMeContainerStyle.innerHTML = `

            .title {
                margin-top: 20px;
                text-align: center;
                text-decoration: overline underline goldenrod;
            }

            .contact-form {
                display: flex;
                margin-bottom: 50px;
                align-items: center;
                flex-direction: column;
            }

            .input-form {
                width: 250px;
                height: 30px;
                padding: 10px;
                border-radius: 6px;
                margin-bottom: 10px;
                border: 1px solid gray;
            }

            .textarea-form {
                width: 250px;
                height: 60px;
                padding: 10px;
                border-radius: 6px;
                border: 1px solid gray;
            }

            .button {
                width: 250px;
                height: 45px;
                border: none;
                margin-top: 20px;
                border-radius: 6px;
                background-color: gold;
            }

            @media (max-width: 450px) {
                .input-form {
                    width: 200px;
                    height: 25px;
                    padding: 5px;
                    border-radius: 6px;
                    border: 1px solid gray;
                }
    
                .textarea-form {
                    width: 200px;
                    height: 60px;
                    padding: 5px;
                    border-radius: 6px;
                    border: 1px solid gray;
                }

                .button {
                    width: 200px;
                    height: 40px;
                    border: none;
                    margin-top: 20px;
                    border-radius: 6px;
                    background-color: gold;
                }
            }
        `;

        contactMeContainer.innerHTML = `
            <section class="contact-me-section">

                <h2 class="title"> Reach me out! </h2>
                <form class="contact-form">

                    <label>
                        <p> Your Name or Company Name </p>
                        <input class="input-form" placeholder="Ex: Alvaro" name="name" />
                    </label>

                    <label>
                        <p> Email </p>
                        <input class="input-form" placeholder="Ex: alvaro695547@gmail.com" name="email" />
                    </label>

                    <label>
                        <p> Description </p>
                        <textarea class="textarea-form" placeholder="A little description of what would you like to say to me :D" name="description" ></textarea>
                    </label>

                    <button class="button"> Send ! </button>

                </form>

            </section>
        `;

        this.shadow.appendChild(contactMeContainer);
        this.shadow.appendChild(contactMeContainerStyle);

        const form = this.shadow.querySelector(".contact-form");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const target = e.target;

            const data = {
                name: target["name"].value,
                email: target["email"].value,
                description: target["description"].value
            };

            state.getDataFromForm(data, () => {
                swal({ title: "Alright!", text: "Email succesfully sent :D", icon: "success" });
            });

        });
    }
}

customElements.define("contact-comp", ContactMeComp);