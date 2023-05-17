const frequentQuestions = [
    {
        question: "Do you provide financial assistance?",
        answer: "Yes. Together with forwarding your legal documents, we can help you  handle taxes, banking, cheques and payrolls so you can focus on what matters to your business."
    },
    {
        question: "How will I get my documents?",
        answer: `Your documents and files will be scanned and emailed to you. However, if you 
        require the original copies, they can be airmailed to your postal address for a small fee.`
    },
    {
        question: "What is the benefit of a Registered Agent?",
        answer: "A registered agent is required by the US government for businesses incorporated in the US from another country. WorkStar provides you with vetted Agents, Assistants, Tax Accountants and Lawyers. We're here to help you grow your business and scale easily. Leave the paperwork to us."
    },
    {
        question: " Can i have feedback on the fly?",
        answer: "Yes! You get notified by email and Slack when anything happens, so you're always updated, and we provide support when you need it."
    },
]

const reversedQuestions = frequentQuestions;

export const FaqsPage = () => {
    return(
        <div>
            <div id="Hero" class="section page-header color wf-section">
                <div class="container">
                    <div class="hero-info one">
                        <h1 class="big-headline white">F.A.Q </h1>
                        <p class="big-paragraph white">
                            Frequently asked questions<br/>
                        </p>
                    </div>
                    <div class="w-layout-grid image-header-grid">
                        <div data-w-id="5743a873-3836-4b17-7984-38ee0b16fb20" style={{opacity:0}} class="image-header bigger"></div>
                        <div data-w-id="5743a873-3836-4b17-7984-38ee0b16fb21" style={{opacity:0}} class="image-header"></div>
                    </div>
                </div>
            </div>

            <div class="section visible-overflow color wf-section">
                <div class="container">
                    <div class="w-layout-grid grid-scale asimetric">
                        <div class="block-color right-side-block color"></div>
                        <div class="w-layout-grid double-image-grid">
                            <div class="grid-column-wrapper top-margin">
                                <div class="double-image one"></div>
                                <div class="double-image empty-box"></div>
                            </div>
                            <div id="w-node-_1fbefe18-2bb5-848b-395b-66b52dfc54dd-1276bda8" class="grid-column-wrapper end">
                                <div class="double-image two"></div>
                            </div>
                        </div>
                        <div id="w-node-_6addec16-af02-9db2-3f06-93bef39cca87-1276bda8" class="side-text-info margin full-size">
                            <div class="header-section">
                                <h2 class="white-heading">
                                    Frequently asked questions<br/>
                                </h2>
                            </div>
                            <div>
                                <div>
                                    {
                                        frequentQuestions.map(faq => 
                                            <div class="toogle-wrapper">
                                                <div data-w-id="6addec16-af02-9db2-3f06-93bef39cca8f" class="toogle-questions">
                                                    <h6 class="toogle-title">{faq.question}</h6>
                                                    <div class="toogle-icon">
                                                        <div class="minus"></div>
                                                        <div style={{
                                                            "-webkit-transform" : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)",
                                                            "-moz-transform" : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)",
                                                            "-ms-transform" : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)",
                                                            transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)"
                                                        }} class="plus"></div>
                                                    </div>
                                                </div>
                                                <div style={{opacity:0, height: "0px", display:"none"}} class="toogle-answer">
                                                    <div class="toogle-info">
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section blue wf-section">
                <div class="container">
                    <div class="header-section center">
                        <h2 class="white">
                            Frequently asked questions<br/>
                        </h2>
                    </div>
                    <div class="width">
                        {reversedQuestions.reverse().map(faq => 
                            <div class="toogle-wrapper">
                                <div data-w-id="6addec16-af02-9db2-3f06-93bef39cca8f" class="toogle-questions">
                                    <h6 class="toogle-title">{faq.question}</h6>
                                    <div class="toogle-icon">
                                        <div class="minus"></div>
                                        <div style={{
                                            "-webkit-transform" : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)",
                                            "-moz-transform" : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)",
                                            "-ms-transform" : "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)",
                                            transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90DEG) skew(0, 0)"
                                        }} class="plus"></div>
                                    </div>
                                </div>
                                <div style={{opacity:0, height: "0px", display:"none"}} class="toogle-answer">
                                    <div class="toogle-info">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div class="testimonial-block-color blue left"></div>
            </div>

            <div class="section blue wf-section">
                <div class="testimonial-block-color blue"></div>
                <div class="container">
                    <div class="form-card">
                        <div class="header-section center">
                            <h2 class="white">Let &#x27;s stay in touch</h2>
                            <p class="white">Receive news, special offers and stay updated</p>
                        </div>
                        <div class="form-card left">
                            <div class="form-block w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="position-block">
                                    <div class="form-contact">
                                        <input type="email" class="input w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="Your email address" id="Email-Address" required=""/>
                                        <input type="submit" value="Subscribe" data-wait="Please wait..." class="button form-button w-button"/>
                                    </div>
                                    <div class="top-margin-small">
                                        <label class="w-checkbox checkbox-field">
                                            <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" class="w-checkbox-input checkbox"/>
                                            <span class="checkbox-label white w-form-label" for="checkbox">
                                                I agree to the <a href="/company/privacy-policy">Privacy policy</a>
                                            </span>
                                        </label>
                                    </div>
                                </form>
                                <div class="success-message w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div class="error-message w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default FaqsPage;