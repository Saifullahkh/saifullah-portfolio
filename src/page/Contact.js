import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Are you available for full-time freelancing/employment?",
      a: "Yes, I am actively available for remote full-time positions, contracting opportunities, as well as freelance frontend development work."
    },
    {
      q: "What is your main timezone and flexibility?",
      a: "I work out of Islamabad, Pakistan (GMT+5). I am highly flexible and can align working hours with European, Asian, or North American client schedules to ensure smooth overlap."
    },
    {
      q: "Which styling frameworks do you recommend or work with?",
      a: "I recommend Bootstrap for faster structured grids and dashboards, and Tailwind CSS for customized layouts. I am fully proficient in either framework depending on project architectures."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API submit delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Your message has been sent! I will respond to you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Opps! Submission encountered an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page-wrapper py-5 position-relative">
      <ToastContainer theme="colored" position="bottom-right" />
      <div className="container py-4">

        {/* Title */}
        <div className="text-center mb-5">
          <span className="badge-tech mb-2">Hire Me</span>
          <h2 className="display-5 fw-bold text-dark">Get In <span className="text-teal">Touch</span></h2>
          <div className="title-line mx-auto"></div>
          <p className="text-muted mt-3 max-width-xs mx-auto">
            Have a project or opportunity? Send me a message and let's work together.
          </p>
        </div>

        <div className="row g-5 mb-5 align-items-stretch">
          {/* Left: Contact details cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column h-100 justify-content-between p-4 rounded-4 contact-info-wrapper shadow-sm">
              <div>
                <h4 className="fw-bold mb-4 text-dark">Contact Information</h4>
                <p className="text-muted mb-4 small">
                  Reach out to me directly through email, phone call, or fill out the form and I will respond within 24 hours.
                </p>

                <div className="info-item-card d-flex align-items-center mb-4">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="ms-3">
                    <p className="text-muted small mb-0 font-weight-bold">Email Address</p>
                    <h6 className="fw-bold mb-0 text-dark">saifullahkh484@gmail.com</h6>
                  </div>
                </div>

                <div className="info-item-card d-flex align-items-center mb-4">
                  <div className="info-icon"><FaPhone /></div>
                  <div className="ms-3">
                    <p className="text-muted small mb-0 font-weight-bold">Call/WhatsApp</p>
                    <h6 className="fw-bold mb-0 text-dark">+92 332 2051851</h6>
                  </div>
                </div>

                <div className="info-item-card d-flex align-items-center">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="ms-3">
                    <p className="text-muted small mb-0 font-weight-bold">Residence Location</p>
                    <h6 className="fw-bold mb-0 text-dark">Islamabad, Pakistan</h6>
                  </div>
                </div>
              </div>

              {/* Status indicators */}
              <div className="mt-5 pt-3 border-top d-flex align-items-center gap-2">
                <span className="live-status-dot"></span>
                <span className="text-muted small">Open to new career proposals</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card shadow-lg p-4 p-md-5 h-100">
              <h4 className="fw-bold mb-4 text-dark">Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating custom-input">
                      <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating custom-input">
                      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating custom-input">
                      <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                      <label htmlFor="subject">Message Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating custom-input">
                      <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} style={{ height: '150px' }} placeholder="Message" required></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-send-main w-100 py-3 d-flex align-items-center justify-content-center gap-2" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Processing request...</span>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs Accordion Block */}
        <div className="faq-section mt-5 pt-5 border-top">
          <div className="text-center mb-5">
            <span className="badge-tech mb-2">FAQ</span>
            <h3 className="fw-bold text-dark">Frequently Asked <span className="text-teal">Questions</span></h3>
            <div className="title-line mx-auto"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion d-flex flex-column gap-3">
                {faqs.map((faq, idx) => (
                  <div className="accordion-item border border-light-subtle rounded-4 overflow-hidden" key={idx}>
                    <button
                      className="accordion-header d-flex justify-content-between align-items-center w-100 p-4 border-0 bg-transparent text-start fw-bold fs-5 text-dark"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown className={`accordion-chevron-icon transition-all duration-300 ${openFaq === idx ? 'rotated-faq' : ''}`} />
                    </button>
                    <div className={`accordion-collapse-container ${openFaq === idx ? 'show-faq' : ''}`}>
                      <div className="accordion-body px-4 pb-4 pt-1 text-muted small-text">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;