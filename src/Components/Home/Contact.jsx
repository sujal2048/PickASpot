import emailjs from "@emailjs/browser";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "../../Css/contact.css"

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e);

    emailjs.sendForm('service_favm3gd', 'template_k9ambrs', e.target, 'dGHtBMcN3yrh1fo-W')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        toast("Thank you for your interest! We will reach out to you with further details soon!", {
            className:"custom-style",
                      progressClassName:"custom-progress",
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
            });
      
           
    }

    return(
        <div className="conatainer" id="contact">
            <div className="contact-form border-info">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form onSubmit={sendEmail}>
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your name *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" className="form-control" placeholder="Your Email *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" className="form-control" placeholder="Your Phone Number *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject *" name="subject"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="message" className="form-control" placeholder="Your Message *" style={{width:"100%", height:" 150px"}}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                </div>
            </form>

            <ToastContainer />
</div>
        </div>
    )
}