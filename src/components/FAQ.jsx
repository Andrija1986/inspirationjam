import {useState} from "react";
import FaqQuestions from "./FaqQuestions";
 
const FAQ = () => {

  const [faqs, setFaqs] = useState([
        {
            question: "What expertise does Wevers hold in terms of Web development services?",
            answer: "Wevers offer businesses a broad spectrum of software and web development services ranging from custom software development, product development, web app development, UI/UX design, and web testing. Our expertise in web development is inclusive of the following services majorly:Dedicated Development Team,Web App Development,Product Development ",
            open: false,
        },
        {
            question: "What expertise does Wevers hold in terms of Web development services?",
            answer:
                "Wevers make sure to offer Various Marketing Services after the Project Creating which include the following:Market Research, Strategy Planning, Analytics, Social Media, E- Mail Marketing, Video Marketing, and PR",
                open: false,
        },
        {
            question: "Who owns the legal rights of the project developed by Wevers",
            answer:
                "After the project completion, the legal rights of the project including the intellectual property rights, copyrights, and source codes are owned by the client and his company.",
                open: false,
        },
        {
            question: "Can I review the code during the development process?",
            answer: "Yes, we do offer review of code after every sprint release. The client can check the code and give suggestions on the delivered module. In this way we can implement client’s feedback and make the app more user-centric as per the client’s reviews.",
            open: false,
        },
        {
            question: "Will you assign a dedicated 'Team'?",
            answer: "Yes, as per the business requirements, we do assign a Team for the assigned Web development and Marketing project. Additionally, if there is any other need for adding extra resources like Quality Analyst then we scale up and down resources as per project needs.",
            open: false,
        }
    ]);

    const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <section id='faq' className='faq'>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqQuestions 
          faq={faq} 
          index={i}
          toggleFAQ={toggleFAQ}/>
        ))}
      </div>
    </section>
  )
}

export default FAQ