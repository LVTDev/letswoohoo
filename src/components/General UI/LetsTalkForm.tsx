"use client";
import React, { useState, useEffect } from "react";

const LetsTalkForm = () => {
  type Error = {
    name: string;
    email: string;
    userNeeds: string;
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userNeeds, setUserNeeds] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({} as Error);
  const [formSubmitValid, setFormSubmitValid] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    userNeeds: false,
  });

  useEffect(() => {
    validateForm();
  }, [name, email, userNeeds]);
  const validateForm = () => {
    const errors = {} as Error;
    if (!name) {
      errors.name = "Necesitamos tu nombre";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email invalid";
    }

    if (!userNeeds) {
      errors.userNeeds = "Necesitamos mas informacion";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message: userNeeds,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setFormSubmitValid(true);
    } else {
      setFormSubmitValid(false);

    }
  };
  return (
    <div className="w-3/4" id="contactanos">
      <p className="font-bold text-4xl tracking-widest uppercase mb-6">
        {" "}
        talk <br /> to us
      </p>

      {!formSubmitValid && (
        <form
          action=""
          className="w-full"
          onSubmit={handleSubmit}
          aria-label="Contactanos"
        >
          <div className="">
            <div className="mb-5">
              <label className="hidden" htmlFor="name">
                Name
              </label>
              <input
                placeholder="Nombre"
                type="text"
                name="name"
                id="name"
                className="border border-black placeholder-black text-black rounded-full bg-transparent w-full px-2 py-2 "
                value={name}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="hidden" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                id="email"
                className="border border-black placeholder-black text-black rounded-full bg-transparent w-full px-2 py-2 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="hidden" htmlFor="info">
                Cuentanos
              </label>
              <textarea
                name="info"
                id="info"
                placeholder="Cuéntanos qúe necesita tu empresa"
                className="border border-black placeholder-black text-black rounded-xl bg-transparent w-full px-2 py-2 "
                rows={4}
                value={userNeeds}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, userNeeds: true }))
                }
                onChange={(e) => setUserNeeds(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end align-bottom">
            {isFormValid ? (
              <button
                type="submit"
                className={`mt-auto md:ml-8 px-3 rounded py-2 font-bold bg-black text-white w-max cursor-pointer`}
              >
                <p>Send</p>
              </button>
            ) : (
              <button
                data-testid="inactiveButton"
                disabled
                className="h-max md:ml-8 px-3 rounded py-2 font-bold bg-black text-white ml-auto cursor-not-allowed"
              >
                Send
              </button>
            )}
          </div>
        </form>
      )}
      {touched.name && errors.name && (
        <p className="text-red-600">{errors.name}</p>
      )}
      {touched.email && errors.email && (
        <p className="text-red-600">{errors.email}</p>
      )}
      {touched.userNeeds && errors.userNeeds && (
        <p className="text-red-600">{errors.userNeeds}</p>
      )}
      {formSubmitValid && <div className="font-bold">Gracias por contactar con nosotros!</div>}
    </div>
  );
};

export default LetsTalkForm;
