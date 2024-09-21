import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <form action="https://getform.io/f/bnlegnyb" method="POST">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message"  rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Submit</button>
            </form>
          </div>
          <div className="col-md-6 text-center" >
            <h4>Phone</h4>
            <p>(+92) 343-605-9243</p>
            <h4>Email</h4>
            <p>info@fullwebprogrammer.netlify.app</p>
            <h4>Address</h4>
            <p>56300 Main Street, Okara, PAKISTAN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
