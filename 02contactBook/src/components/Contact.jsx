import { FiPhone, FiMail } from "react-icons/fi";
const Contact = ({ img, name, phone, mail }) => {
  return (
    <article className="contact-card">
      <img src={img} alt="Photo of Mr. Whiskerson" />
      <h3>{name}</h3>
      <div className="info-group">
        <FiPhone />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <FiMail />
        <p>{mail}</p>
      </div>
    </article>
  );
};

export default Contact;
