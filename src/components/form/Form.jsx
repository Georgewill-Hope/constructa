import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdorjgaa");
  if (state.succeeded) {
    return (
      <div className="h-[50vh] w-full flex items-center justify-center px-2 lg:px-0">
        <p className="text-center text-lg lg:text-2xl">
          Thanks for contacting us <span className="text-2xl lg:text-4xl"> &#128522;</span>,
        
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h1 className="text-center mb-5 lg:text-xl text-kiola-blue">
        CO<span className="text-black font-bold">NNE</span>CT{" "}
        <span className="text-black font-bold">
          W<span className="text-kiola-blue text-xl lg:text-2xl">IT</span>H
        </span>{" "}
        <span className="text-kiola-blue font-bold">
          CON<span className="text-black">STRU</span>CTA!
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 w-full px-2">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          className="bg-kiola-blue/20 h-10 w-full md:w-96 px-3 text-black outline-none rounded-lg focus:bg-kiola-blue/10"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Full Name"
          className="bg-kiola-blue/20 h-10 w-full md:w-96 px-3 text-black outline-none rounded-lg focus:bg-kiola-blue/10"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="message"
          className="bg-kiola-blue/20 h-[30vh] md:h-[30vh] w-full md:w-96 p-3 text-black outline-none rounded-lg focus:bg-kiola-blue/10 resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-kiola-blue w-full md:w-96  border-2 py-2 rounded-lg font-bold hover:bg-kiola-blue/90 border-kiola-blue duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
