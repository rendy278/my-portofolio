import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const nameSchema = z.string().min(4, "Name must be at least 4 characters");

const Modal = ({ isOpen, onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleSubmit = () => {
    const result = nameSchema.safeParse(name);
    if (result.success) {
      setSubmitted(true);
      setTimeout(() => {
        onSubmit(name);
      }, 1000);
    } else {
      setError(result.error.errors[0].message);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[99999] p-6 w-full flex items-center justify-center bg-white"
      initial={{ y: 0 }}
      animate={submitted ? { y: "-100vh" } : { y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.ul
        className="circles"
        initial={{ opacity: 1, y: 0 }}
        animate={submitted ? { opacity: 0, y: "-100vh" } : { y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </motion.ul>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ y: 0 }}
        animate={submitted ? { y: "-100vh" } : { y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-5xl text-gray-600 text-3xl font-bold mb-4">
          Hello, I{"'"}m Rendy
        </h2>
        <strong className="lg:text-4xl text-2xl font-montserrat font-bold text-[#537FE7] ">
          <Typewriter
            words={["Welcome To My Portofolio"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={180}
          />
        </strong>
        <p className="my-3 font-semibold text-sm md:text-lg text-gray-700">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning, I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="text-gray-500">
            Before we begin, please let me know your name.
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insert your name"
            className="w-80 outline-none hover:border-blue-500 border-b text-center bg-transparent placeholder:text-center mt-3 p-2 border-gray-700 mb-4"
          />
          {error && <p className="text-red-500">{error}</p>}
          <AnimatePresence>
            {name.length >= 4 && (
              <motion.button
                key="submit-button"
                onClick={handleSubmit}
                className="w-80 font-semibold p-2 bg-blue-500 text-white rounded glass"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                Submit
              </motion.button>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
