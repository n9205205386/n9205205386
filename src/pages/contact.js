import React from "react"

import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mbjpyeba" method="POST">
            <div className="form-group">
              <a href="tel:+917678581892">
                <input
                  type="text"
                  name="name"
                  value="+91-7678581892"
                  placeholder="name"
                  disabled
                  className="form-control"
                />
              </a>
              <a href="mailto:gaurav.adhikari1997@gmail.com">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value="gaurav.adhikari1997@gmail.com"
                  disabled
                  className="form-control"
                />
              </a>
              <textarea
                name="message"
                rows="5"
                value="Ghaziabad, Uttar Pradesh"
                disabled
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B917678581892&text=Hello"
              className="submit-btn btn"
            >
              Whatsapp
            </a>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
