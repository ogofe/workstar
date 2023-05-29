import {useRef, useState} from 'react';


export const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const formRef = useRef();

    async function sendEmail(){
        if(name === ""){
            return alert("Please enter your name")
        }
        if(email === ""){
            return alert("Please enter your email")
        }
        if(subject === ""){
            return alert("Please type a subject")
        }
        if(message === ""){
            return alert("Please type your message")
        }

        
        try{
            
            const res = await fetch('https://workstar.pythonanywhere.com/api/contact-us/', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
                })
            })

            if (res.ok){
                setEmail(""); setMessage(""); setName(""); setSubject("")
                alert("Your message has been received! We'll get back to you soon.")
            }
        }

        // const formData = new FormData(formRef.current);
        // formData.append('name')
        // console.log("Form:", formData)
        // fetch('', {
        //     method: 'post',
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     },
        //     body: formData
        // })
    }

    return(
        <div>
            
            <div id="Hero" class="section page-header wf-section">
                <div class="container">
                    <div class="hero-info one">
                        <h1 class="big-headline">Contact us</h1>
                        <p class="big-paragraph">Contact us for a quote</p>
                    </div>
                    <div class="w-layout-grid image-header-grid">
                        <div class="image-header bigger"></div>
                        <div class="image-header"></div>
                    </div>
                </div>
            </div>

            <div class="section visible-overflow wf-section">
                <div class="container w-container">
                    <div class="contact-div-wrapper">
                        <div class="image-contact">
                            <div class="avatar top bottom"></div>
                            <div class="avatar top"></div>
                            <div class="avatar top bigger"></div>
                            <h2 class="white">
                                Easily get Registered Agents for your remote business.<br/>
                            </h2>
                            <h1 class="logo-head small">
                                Work<span class="logo">Star</span>
                            </h1>
                            <div class="avatar"></div>
                        </div>
                        <div class="contact-content">
                            <div class="form-div">
                                <div class="form-block w-form">
                                    <form ref={formRef} id="contact-form" onSubmit={(event) => {
                                        event.preventDefault();
                                    }}>
                                        <div>
                                            <label for="Name-7" class="field-text">Name:</label>
                                            <input onInput={ev => setName(ev.target.value)} value={name} type="text" class="text-field w-input" maxlength="256" name="Name" data-name="Name" placeholder="" id="Name" required=""/>
                                        </div>

                                        <div>
                                            <label for="Email-Address" class="field-text">Email address:</label>
                                            <input onInput={ev => setEmail(ev.target.value)} value={email} type="email" class="text-field w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="" id="Email-Address" required=""/>
                                        </div>

                                        <div>
                                            <label for="Subject" class="field-text">Subject:</label>
                                            <input onInput={ev => setSubject(ev.target.value)} value={subject} type="text" class="text-field w-input" maxlength="256" name="Subject" data-name="Subject" placeholder="" id="Subject"/>
                                        </div>

                                        <div>
                                            <label for="Message" class="field-text">Message:</label>
                                            <textarea onInput={ev => setMessage(ev.target.value)} value={message} id="Message" name="Message" data-name="Message" maxlength="5000" required="" placeholder="" class="message w-input"></textarea>
                                        </div>

                                        <div class="center-button-block">
                                            <button onClick={(ev) => {
                                                ev.preventDefault();
                                                sendEmail();
                                            }} type="submit" form='contact-form' data-wait="Please wait..." class="button w-button">Send Message</button>
                                        </div>
                                    </form>

                                    <div class="success-message w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div class="error-message w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactPage;