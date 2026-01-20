import SectionTitle from "../sectionTitle/SectionTitle";
import "./Contact.css";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
        <SectionTitle title="Contact Me" subTitle="Contact Me" />
        <div className="contact-wrapper">
          <ContactLeft />
          <ContactRight />
          {/* <div className="contact-left">
            <h2>Let's discuss your project</h2>
            <ul className="contact-list">
              <li>
                <h3>
                  <i className="fa-solid fa-phone"></i> Phone
                </h3>
                <span>
                  <a href="tel:001237779999">+00 123-777-9999</a>
                </span>
              </li>
              <li>
                <h3>
                  <i className="fa-solid fa-envelope"></i> Email Address
                </h3>
                <span>
                  <a href="mailto:ilay@email.com">ilay@email.com</a>
                </span>
              </li>
              <li>
                <h3>
                  <i className="fa-solid fa-location-dot"></i> Official Address
                </h3>
                <span>
                  <a href="">Sweden, Gotebotg 415 17</a>
                </span>
              </li>
            </ul>
          </div> */}
          {/* <div className="contact-right">
            <p>
              I'm always open to discussing product{" "}
              <span>design work or partnerships.</span>
            </p>
            <form className="form contact-form">
              <div className="first-row">
                <input placeholder="Name" type="text" />
              </div>
              <div className="second-row">
                <input placeholder="Email" type="email" />
                <input placeholder="Subject" type="text" />
              </div>
              <div className="third-row">
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="contant-btn inner-info-link" type="submit">
                Send Message
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
