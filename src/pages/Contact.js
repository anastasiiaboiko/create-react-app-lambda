import React from "react";
import { ActiveCampaignInputs, handleActiveCampaignSubmit } from 'active-campaign-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const formId = '_form_1_';
    let navigate = useNavigate(); 

    const onSubmit = async (data) => {
        handleActiveCampaignSubmit(data, 'anastaciaboiko', formId);
        navigate("/");
    }

    return (
        <div className="page">
            <h1>Contacts</h1>
            <p>This is the contact page.</p>

            <p>Subscribe to our newsletter:</p>
            <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
                <ActiveCampaignInputs formId={formId} />

                <input placeholder="Name" name="name" id="name" {...register('name', { required: true })} />
                <input placeholder="Email" name="email" type="email" id="email" {...register('email', { required: true })} />

                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default Contact;