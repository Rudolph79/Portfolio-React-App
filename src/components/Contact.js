import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_FBYWtjNU7R27ACAUxIGBw";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        // e.preventDefault();

        emailjs.send(serviceID, templateID, variables, userID)
            .then((result) => {
                setSuccessMessage("Form sent successfully ! I'll contact You as soon as possible.");
            }).catch(err => console.log(`Something went wrong ${err}`));
    }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Please fill out and describe your project needs I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" id="name"
                                       placeholder="Name" name="name"
                                       {
                                           ...register
                                           ("name",
                                               {
                                                   required: "Please enter Your name",
                                                   maxLength: {
                                                       value: 20,
                                                       message: "Please enter a name with fewer than 20 characters"
                                                   },
                                               })
                                       }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" id="phone"
                                       placeholder="Phone Number (ex: + 33 7 55 55 55 55)" name="phone"
                                       {
                                           ...register
                                           ("phone",
                                               {
                                                   required: "Please enter Your phone number",
                                               })
                                       }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="email" id="email"
                                       placeholder="Email" name="email"
                                       {
                                           ...register
                                           ("email",
                                               {
                                                   required: "Please provide Your email",
                                                   maxLength: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                       message: "Invalid email"
                                                   },
                                               })
                                       }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" id="subject"
                                       placeholder="Your subject" name="subject"
                                       {
                                           ...register
                                           ("subject",
                                               {
                                                   required: "OOPS, you forget to add the subject."
                                               })
                                       }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION INPUT */}
                            <div className="text-center">
                            <textarea className="form-control" id="description"
                                      placeholder="Please describe shortly your project..." name="description"
                                      {
                                          ...register
                                          ("description",
                                              {
                                                  required: "Please describe shortly your project needs ..."
                                              })
                                      }>
                            </textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">
                                Contact me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
