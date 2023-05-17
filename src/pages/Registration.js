import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom'

export const RecruitmentPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [idType, setIdType] = useState("");
    const [idImageFront, setIdImageFront] = useState(null);
    const [idImageBack, setIdImageBack] = useState(null);
    const [formStep, setFormStep] = useState(1);
    
    const router = useNavigate()
    const formRef = useRef();

    async function sendEmail(){
        if(firstName === ""){
            return alert("Please enter your first name")
        }
        if(email === ""){
            return alert("Please enter your email")
        }
        if(lastName === ""){
            return alert("Please enter your last name")
        }
        if(phone === ""){
            return alert("Please type your message")
        }
        
        const formData = new FormData(formRef.current);
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('email', email)
        formData.append('state', state)
        formData.append('city', city)
        formData.append('zip', zip)
        formData.append('idType', idType)
        formData.append('address', address)
        formData.append('idImageFront', idImageFront)
        formData.append('idImageBack', idImageBack)
        console.log("Form:", formData)
        const res = await fetch('https://workstar.pythonanywhere.com/api/work-for-us/', {
            method: 'post',
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        })

        if (res.ok){
            alert("Your details has been received! We'll get back to you soon.")
            router('/')
        }
    }

    function renderForm(){
        if (formStep === 1){
            return(
                <div>
                    <div>
                        <label for="Name-7" class="field-text">First Name:</label>
                        <input onInput={ev => setFirstName(ev.target.value)} value={firstName} type="text" class="text-field w-input" maxlength="256" name="Name" data-name="Name" placeholder="" id="Name" required=""/>
                    </div>

                    <div>
                        <label for="Name-7" class="field-text">Last Name:</label>
                        <input onInput={ev => setLastName(ev.target.value)} value={lastName} type="text" class="text-field w-input" maxlength="256" name="Name" data-name="Name" placeholder="" id="Name" required=""/>
                    </div>

                    <div>
                        <label for="Email-Address" class="field-text">Email address:</label>
                        <input onInput={ev => setEmail(ev.target.value)} value={email} type="email" class="text-field w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="" id="Email-Address" required=""/>
                    </div>

                    <div>
                        <label for="Email-Address" class="field-text">Phone Number:</label>
                        <input onInput={ev => setPhone(ev.target.value)} value={phone} type="email" class="text-field w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="" id="Email-Address" required=""/>
                    </div>

                </div>
            )
        }

        if (formStep === 2){
            return(
                <div>
                    <div>
                        <label for="Name-7" class="field-text">State of Residence:</label>
                        <input onInput={ev => setState(ev.target.value)} value={state} type="text" class="text-field w-input" maxlength="256" name="Name" data-name="Name" placeholder="" id="Name" required=""/>
                    </div>

                    <div>
                        <label for="Name-7" class="field-text">City:</label>
                        <input onInput={ev => setCity(ev.target.value)} value={city} type="text" class="text-field w-input" maxlength="256" name="Name" data-name="Name" placeholder="" id="Name" required=""/>
                    </div>

                    <div>
                        <label for="address" class="field-text"> Address:</label>
                        <input onInput={ev => setAddress(ev.target.value)} value={address} type="text" class="text-field w-input" maxlength="256" name="address" data-name="Email Address" placeholder="" id="Email-Address" required=""/>
                    </div>

                    <div>
                        <label for="zip" class="field-text"> Zip Code:</label>
                        <input onInput={ev => setZip(ev.target.value)} value={zip} type="text" class="text-field w-input" maxlength="256" name="zip" data-name="Email Address" placeholder="" id="Email-Address" required=""/>
                    </div>

                    <div>
                        <label for="id-type" class="field-text">Id Type:</label>
                        <select onInput={ev => setIdType(ev.target.value)} value={idType} class="text-field w-input" maxlength="256" name="id-type" data-name="Email Address" placeholder="" id="Email-Address" required="">
                            <option disabled> Select Id Type </option>
                            <option> Driver's License </option>
                            <option> International Passport </option>
                            <option> Voter's Card </option>
                        </select>
                    </div>

                    <div>
                        <label for="id-image-front" class="field-text">Id Front Image:</label>
                        <ImageUploaderField onInput={(img) => setIdImageFront(img)} name="id-image-front" />
                    </div>

                    <div>
                        <label for="id-image-back" class="field-text">Id Back Image:</label>
                        <ImageUploaderField onInput={(img) => setIdImageBack(img)} name="id-image-back" />
                    </div>

                </div>
            )
        }
    }

    return(
        <div>
            <div id="Hero" class="section page-header wf-section">
                <div class="container">
                    <div class="hero-info one">
                        <h1 class="big-headline">Join us</h1>
                        <p class="big-paragraph">Work for us and join our network of hardworking individuals helping businesses thrive in the US</p>
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
                                Work remotely for remote businesses.<br/>
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
                                        {renderForm()}
                                        <div class="center-button-block" style={{marginTop: '3rem'}}>
                                            <button onClick={(ev) => {
                                                ev.preventDefault();
                                                if(formStep === 3){
                                                    // sendEmail();
                                                }else{
                                                    setFormStep((formStep+1))
                                                }
                                            }} type="submit" form='contact-form' data-wait="Please wait..." class="button w-button"> Continue </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ImageUploaderField = ({ onInput, name, ...props }) =>{
    function uploadImage(ev){
        const img = ev.target.files[0]
        onInput(img)
    }


    return(
        <div>
            <input onInput={ev => uploadImage(ev)} accept='image/*' type='file' name={name} {...props} />
        </div>
    )
}

export default RecruitmentPage;