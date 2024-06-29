const Faq = () => {
  const faqItems = [
    {
      question:
        "What solutions does Nile Technology Solution offer for digitalizing businesses?",
      answer:
        "Nile Technology Solution provides internationally validated solutions crafted for efficiency, sustainability, scalability, and alignment with business priorities. Our tailored approaches ensure optimal performance and growth, empowering businesses to thrive in the digital age.",
    },
    {
      question:
        "How does Nile Technology Solution ensure the efficiency and sustainability of operational processes?",
      answer:
        "At Nile Technology Solution, we streamline operational processes through innovative technologies and strategic implementations. We optimize workflows, reduce redundancies, and enhance sustainability, fostering long-term operational excellence.",
    },
    {
      question: "How does Nile Technology Solution support scalability and growth?",
      answer:
        "Nile Technology Solution leverages scalable solutions that evolve with your business. From scalable software architectures to agile methodologies, we ensure your technology infrastructure grows seamlessly alongside your business objectives.",
    },
    {
      question: "How does Nile Technology Solution ensure alignment with business priorities?",
      answer:
        "We collaborate closely with clients to understand their unique business objectives. By aligning our solutions with your priorities, we deliver tailored outcomes that drive measurable business success and efficiency.",
    },
    {
      question: "Join Nile Technology Solution: Ignite your tech career. How can I apply?",
      answer:
        "Joining Nile Technology Solution means joining a team committed to innovation and excellence. Explore career opportunities and embark on a rewarding journey in technology. Visit our careers page or reach out to us directly to learn more about joining Nile Technology Solution.",
    },
  ];

  return (
    <div className="accordion accordion-style-three md-mt-60" id="accordionOne">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "not-collapsed" : "collapsed"
                }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${index === 2 ? "show" : ""
              }`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
