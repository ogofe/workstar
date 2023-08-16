import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom'

const countriesData = {
"us": [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
    "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
    "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
],
"canada": [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories",
    "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"
]
};
  

export const RecruitmentPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("us");
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
        try {

            const res = await fetch('https://workstar.pythonanywhere.com/api/work-for-us/', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    phone,
                    country,
                    state,
                    city,
                    zip,
                    address,
                })
            })
    
            if (res.ok){
                alert("Your details has been received! We'll get back to you soon.")
                router('/')
            }
        }catch(error){
            console.log("Error saving details...", error)
        }
    }

    function renderForm(){
        if (formStep === 1){
            return(
                <div>
                    <div>
                        <label for="fName" class="field-text">First Name:</label>
                        <input onInput={ev => setFirstName(ev.target.value)} value={firstName} type="text" class="text-field w-input" maxlength="256" name="fName" required=""/>
                    </div>

                    <div>
                        <label for="lName" class="field-text">Last Name:</label>
                        <input onInput={ev => setLastName(ev.target.value)} value={lastName} type="text" class="text-field w-input" maxlength="256" name="lName" required=""/>
                    </div>

                    <div>
                        <label for="email" class="field-text">Email address:</label>
                        <input onInput={ev => setEmail(ev.target.value)} value={email} type="email" class="text-field w-input" maxlength="256" name="email" required=""/>
                    </div>

                    <div>
                        <label for="phone" class="field-text">Phone Number:</label>
                        <input onInput={ev => setPhone(ev.target.value)} value={phone} type="tel" class="text-field w-input" maxlength="256" name="phone" id="phone" required=""/>
                    </div>

                </div>
            )
        }

        if (formStep === 2){
            return(
                <div>
                    <div>
                        <label for="state" class="field-text">Country of Residence:</label>
                        <select onInput={ev => setCountry(ev.target.value)} value={country} type="text" class="text-field w-input" maxlength="256" name="country" required="">
                            <option value={"us"}>United States of America</option>
                            <option value={"canada"}>Canada</option>
                        </select>
                    </div>

                    <div>
                        <label for="state" class="field-text">State of Residence:</label>
                        <select onInput={ev => setState(ev.target.value)} value={state} type="text" class="text-field w-input" maxlength="256" name="country" required="">
                            <option selected>Choose your state</option>
                            {countriesData[country].map((_state) => 
                                <option value={_state}>{_state}</option>
                            )}
                        </select>
                    </div>

                    <div>
                        <label for="city" class="field-text">City:</label>
                        <input onInput={ev => setCity(ev.target.value)} value={city} type="text" class="text-field w-input" maxlength="256" name="city" required=""/>
                    </div>

                    <div>
                        <label for="address" class="field-text"> Address:</label>
                        <input onInput={ev => setAddress(ev.target.value)} value={address} type="text" class="text-field w-input" maxlength="256" name="address" required=""/>
                    </div>

                    <div>
                        <label for="zip" class="field-text"> Zip Code:</label>
                        <input onInput={ev => setZip(ev.target.value)} value={zip} type="text" class="text-field w-input" maxlength="256" name="zip" data-name="zip" placeholder="" id="zip" required=""/>
                    </div>

                </div>
            )
        }

        if (formStep === 3){
            return(
                <div>
                    <div>
                        <h2> We've received your application, you'll hear from us soon! </h2>

                        <h5 className='text-black'> If you are not automatically redirected, please go to the Home link or close this tab.</h5>
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
                        <p class="big-paragraph">Work for us and join our network of hardworking individuals helping businesses thrive accross the US & Canada</p>
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
                                    <form method='post' ref={formRef} id="reg-form" onSubmit={(event) => {
                                        event.preventDefault();
                                    }}>
                                        {renderForm()}
                                        {
                                            formStep !== 3 && 
                                            <div class="center-button-block" style={{marginTop: '3rem'}}>
                                                <button onClick={(ev) => {
                                                    ev.preventDefault();
                                                    if(formStep === 2){
                                                        sendEmail();
                                                        setFormStep((3))
                                                    }else{
                                                        setFormStep((formStep+1))
                                                    }
                                                }}
                                                type="submit"
                                                class="button w-button"> Continue </button>
                                            </div>
                                        }
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
        const reader = new FileReader()
        reader.readAsDataURL(img)
        onInput(reader.result)
        // onInput(img)
    }


    return(
        <div>
            <input onInput={ev => uploadImage(ev)} accept='image/*' type='file' name={name} {...props} />
        </div>
    )
}

export default RecruitmentPage;