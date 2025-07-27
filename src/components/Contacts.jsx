
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

function FloatingInput({ label, icon: Icon, value, setValue, type = "text", name, ...rest }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  return (
    <div className="relative mb-6">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={18} />
      <input
        type={type}
        name={name}
        autoComplete="off"
        className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-blue-400 bg-gray-50 focus:outline-none transition"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      <label
        htmlFor={name}
        className={`absolute left-10 pointer-events-none text-gray-500 text-sm transition-all duration-150
          ${isActive ? "top-2 text-xs" : "top-1/2 -translate-y-1/2 text-base"}`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, icon: Icon, value, setValue, name, ...rest }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  return (
    <div className="relative mb-6">
      <Icon className="absolute left-3 top-4 text-blue-400" size={18} />
      <textarea
        name={name}
        rows={4}
        className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-200 focus:border-blue-400 bg-gray-50 focus:outline-none transition min-h-[90px] resize-none"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      <label
        className={`absolute left-10 pointer-events-none text-gray-500 text-sm transition-all duration-150
          ${isActive ? "top-2 text-xs" : "top-4 text-base"}`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-white/90 rounded-2xl shadow-xl px-6 py-8 flex flex-col justify-center"
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.23,
        type: "spring",
        stiffness: 210,
        damping: 20
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <form
        action="mailto:mayank.flashcodes@gmail.com"
        method="POST"
        encType="text/plain"
        className="space-y-6"
      >
        <FloatingInput
          label="Name"
          icon={FaUser}
          name="name"
          value={name}
          setValue={setName}
          required
        />
        <FloatingInput
          label="Email"
          icon={FaEnvelope}
          name="email"
          value={email}
          setValue={setEmail}
          type="email"
          required
        />
        <FloatingTextarea
          label="Message"
          icon={FaCommentDots}
          name="message"
          value={message}
          setValue={setMessage}
          required
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 shadow transition"
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-7 text-center text-sm text-gray-600">
        Or email me at&nbsp;
        <a
          href="mailto:mayank.flashcodes@gmail.com"
          className="text-blue-600 underline hover:text-blue-700"
        >
          mayank.flashcodes@gmail.com
        </a>
      </div>
    </motion.div>
  );
}
