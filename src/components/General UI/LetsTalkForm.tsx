"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const LetsTalkForm = ({ lang, isHome }: { lang: string, isHome: boolean }) => {
  type Error = {
    name: string;
    email: string;
    userNeeds: string;
    phone: string;
  };
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userNeeds, setUserNeeds] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({} as Error);
  const [formSubmitValid, setFormSubmitValid] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    userNeeds: false,
    phone: false,
  });

  useEffect(() => {
    validateForm();
  }, [name, email, phone, userNeeds]);
  const validateForm = () => {
    const errors = {} as Error;
    if (!name) {
      errors.name =
        lang === "en" ? "We need your name" : "Necesitamos tu nombre";
    }
    if (!email) {
      errors.email =
        lang === "en" ? "Email is required" : "Correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = lang === "en" ? "Email invalid" : "Correo invalido";
    }
    if (!phone) {
      errors.phone =
        lang === "en"
          ? "Telephone number required"
          : "Número de teléfono obligatorio";
    } else if (!/^[\d\s()+-]{7,}$/.test(phone)) {
      errors.phone =
        lang === "en"
          ? "Invalid telephone number"
          : "Número de teléfono no válido";
    }
    if (!userNeeds) {
      errors.userNeeds =
        lang === "en"
          ? "We need more information"
          : "Necesitamos más información";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          message: userNeeds,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setFormSubmitValid(true);
        setTimeout(() => {
          router.push("/letsTalk/thank-you");
        }, 1000);
      }
    } else {
      setFormSubmitValid(false);
    }
  };
  return (
    <div className="md:w-3/4" id="contactanos">
      <div className="font-extralight text-4xl tracking-widest uppercase mb-6">
        {" "}
        <p className={`text-white ${isHome && "text-center"}`} >
          {"let's"}
          talk
        </p>
      </div>

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
                {lang === "en" ? "Name" : "Nombre"}
              </label>
              <input
                placeholder={lang === "en" ? "Name" : "Nombre"}
                type="text"
                name="name"
                id="name"
                className={` placeholder-gray-600 text-black rounded-full  bg-white w-full px-2 py-2 ${isHome ? "border-[3px] border-transparent p-8 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f0b429,#d92d2d,#a23b8f)_border-box]" : "border border-black"}`}
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
                placeholder={lang === "en" ? "Email" : "Correo"}
                type="email"
                name="email"
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                id="email"
                className={` placeholder-gray-600 text-black rounded-full  bg-white w-full px-2 py-2 ${isHome ? "border-[3px] border-transparent p-8 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f0b429,#d92d2d,#a23b8f)_border-box]" : "border border-black"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="hidden" htmlFor="phone">
                Teléfono
              </label>
              <input
                placeholder={lang === "en" ? "Telephone" : "Teléfono"}
                type="tel"
                id="phone"
                className={` placeholder-gray-600 text-black rounded-full  bg-white w-full px-2 py-2 ${isHome ? "border-[3px] border-transparent p-8 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f0b429,#d92d2d,#a23b8f)_border-box]" : "border border-black"}`}
                value={phone}
                onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="hidden" htmlFor="info">
                Cuentanos
              </label>
              <textarea
                name="info"
                id="info"
                placeholder={
                  lang === "en"
                    ? "Tell us what your company needs"
                    : "Cuéntanos qué necesita tu empresa."
                }
                className={` placeholder-gray-600 text-black rounded-2xl  bg-white w-full px-2 py-2 ${isHome ? "border-[3px] border-transparent p-8 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f0b429,#d92d2d,#a23b8f)_border-box]" : "border border-black"}`}
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
                className={`mt-auto h-max md:ml-8 px-3 rounded py-2 font-bold  text-black ml-auto cursor-not-allowed ${isHome ? "border-[3px] border-transparent p-8 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f0b429,#d92d2d,#a23b8f)_border-box]" : "border border-black"}`}
              >
                <p>{lang === "en" ? "Send" : "Enviar"}</p>
              </button>
            ) : (
              <button
                data-testid="inactiveButton"
                disabled
                className={` h-max md:ml-8 px-3 rounded py-2 font-bold  text-black ml-auto cursor-not-allowed ${isHome ? "border-[3px] border-transparent p-8 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f0b429,#d92d2d,#a23b8f)_border-box]" : "border border-black"}`}

              >
                <p>{lang === "en" ? "Send" : "Enviar"}</p>
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
      {touched.phone && errors.phone && (
        <p className="text-red-600">{errors.phone}</p>
      )}
      {formSubmitValid && (
        <div className="font-bold">
          {lang === "en"
            ? "Thanks for contacting us."
            : "Gracias por contactar con nosotros."}
        </div>
      )}
    </div>
  );
};

export default LetsTalkForm;
