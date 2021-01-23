import React from 'react'
import Footer from './../Footer/Footer'
import {ContactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail, InputFullWidth, Textarea, InputSubmit} from './ContactStyle.js'

const Contact = () => {
    return(
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputFullWidth type="text" className="sub" placeholder="Your Subject" />
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    )
}

export default Contact