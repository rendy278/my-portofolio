import { useRef, useState } from "react";
import Title from "../components/Title";
import ContactImg from "../images/contactImg.png";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(4, { message: "Name be at least 4 characters" }),
  number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters" }),
  message: z
    .string()
    .min(4, { message: "Message must be at least 4 characters" }),
});

const Contact = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: formRef.current.name.value,
      number: formRef.current.number.value,
      email: formRef.current.email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    const isFormEmpty = Object.values(formData).every((value) => !value.trim());

    if (isFormEmpty) {
      Swal.fire({
        icon: "error",
        title: "Empty Form",
        text: "Please fill out the entire form.",
      });
      return;
    }

    const result = schema.safeParse(formData);
    if (!result.success) {
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors(errorMessages);
      Swal.fire({
        icon: "error",
        title: "Validation Failed",
        text: "Please check your input and try again.",
      });
      return;
    }

    setErrors({});
    emailjs
      .send(
        "service_1bkeqle",
        "template_m24codf",
        formData,
        "XCn1E7CGzVgIDdlAx"
      )
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Message sent successfully!",
          });
          formRef.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Failed to send message, please try again.",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="h-full w-full gap-4 flex p-6 flex-col justify-center items-center pb-20 md:pb-0 dark:text-slate-200"
    >
      <div className="flex flex-col w-full justify-start gap-3 items-start">
        <Title title="Contact" />
        <h1 className="text-lg md:text-3xl font-reddit-sans">
          Feel free to contact me if you have any questions or just want to say
          hi
        </h1>
      </div>
      <div className="container gap-5 pb-6 flex flex-col md:flex-row justify-between items-center">
        <div className="left w-full md:w-[70%] lg:w-[50%]">
          <div className="p-6 w-full dark:text-gray-700 flex flex-col justify-start items-start gap-3 rounded-md bg-slate-200 shadow-lg shadow-zinc-900">
            <img
              src={ContactImg}
              alt="Contact-img"
              className="object-cover w-full h-52 md:h-60 rounded-md"
            />
            <h1 className="text-2xl text-red-500 md:text-4xl font-bold font-crete-round">
              Rendy
            </h1>
            <strong className="text-xl md:text-2xl">Front End Developer</strong>
            <p className="text-red-500 font-reddit-sans">
              I am a Front End web developer who enjoys building beautiful web
              applications that deliver a better user experience.
            </p>
            <h2 className="font-semibold">
              Phone : <span className="text-red-500">(+62) 83122895534</span>
            </h2>
            <h2 className="font-semibold">
              Email :{" "}
              <span className="text-red-500">kepolaumautauaja@gmail.com</span>
            </h2>
            <h1 className="text-xl md:text-3xl font-bold font-crete-round">
              Find Me On:
            </h1>
            <div className="socials text-3xl md:text-4xl text-slate-100 flex gap-3 justify-start">
              <a
                href="https://www.instagram.com/rnd_arstls?igsh=bWZiNjNqNmhybGps"
                className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill className="p-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/rendy-b232b1248/"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
              >
                <FaLinkedin className="p-1" />
              </a>
              <a
                href="https://wa.me/6283122895534"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
              >
                <FaWhatsapp className="p-1" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100081835780873&mibextid=2JQ9oc"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
              >
                <FaFacebookSquare className="p-1" />
              </a>
              <a
                href="https://github.com/rendy278"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
              >
                <GrGithub className="p-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="right w-full h-full dark:text-gray-700">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-6 flex flex-col justify-center items-center gap-3 rounded-md bg-slate-200 shadow-lg shadow-zinc-900"
          >
            <div className="flex flex-col gap-3 justify-start items-start w-full md:justify-center md:items-center lg:flex-row">
              <span className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-lg">
                  Your Name:
                </label>
                <input
                  name="name"
                  id="name"
                  className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                  type="text"
                  placeholder="Your Name"
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500">
                    {errors.name[0]}
                  </p>
                )}
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label htmlFor="number" className="text-lg">
                  Phone Number:
                </label>
                <input
                  name="number"
                  id="number"
                  className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                  type="number"
                  placeholder="Phone Number"
                  aria-invalid={!!errors.number}
                  aria-describedby="number-error"
                />
                {errors.number && (
                  <p id="number-error" className="text-red-500">
                    {errors.number[0]}
                  </p>
                )}
              </span>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                name="email"
                id="email"
                className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                type="email"
                placeholder="Email"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500">
                  {errors.email[0]}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="subject" className="text-lg">
                Subject:
              </label>
              <input
                name="subject"
                id="subject"
                className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                type="text"
                placeholder="Subject"
                aria-invalid={!!errors.subject}
                aria-describedby="subject-error"
              />
              {errors.subject && (
                <p id="subject-error" className="text-red-500">
                  {errors.subject[0]}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="message" className="text-lg">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="8"
                className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                placeholder="Message"
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-red-500">
                  {errors.message[0]}
                </p>
              )}
              <button
                type="submit"
                className="p-3 bg-red-500 font-bold text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
