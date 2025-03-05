import { useState } from "react";
import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { FiCornerRightDown, FiPhone } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      data: [
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ],
    };

    console.log("Sending payload:", payload);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/a2qbe5ae8rguu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Failed to submit form");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <FiCornerRightDown />
            </h2>
            <p>
              <BsFillEnvelopeArrowDownFill /> Email: ife@gmail.com
            </p>
            <p>
              <FiPhone /> Tel: +234 090 98876
            </p>
          </div>
        </div>
        <div className="col">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="text-area">
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-button">
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default ContactSection;
