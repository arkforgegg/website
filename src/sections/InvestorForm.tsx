import React, { useState } from "react";
import { InputComponent, InputMessageComponent } from "../components";

export function InvestorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");

  const mandatory = () => {
    return (
      name.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      company.length > 0 &&
      position.length > 0 &&
      message.length > 0
    );
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const subject = "Investor Relation Inquiry";
    const body: string = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nPosition: ${position}\nMessage: \n${message}`;

    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:Hello@arkforge.gg?subject=${subject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  const forms = [
    {
      title: (
        <p>
          NAME
          <span className="text-red-500 ml-1">*</span>
        </p>
      ),
      className: "",
      input: (
        <InputComponent
          type="text"
          state={name}
          setState={setName}
          placeholder="Jane Doe"
        />
      ),
    },
    {
      title: (
        <p>
          EMAIL
          <span className="text-red-500 ml-1">*</span>
        </p>
      ),
      className: "",
      input: (
        <InputComponent
          type="email"
          state={email}
          setState={setEmail}
          placeholder="jane@example.com"
        />
      ),
    },
    {
      title: (
        <p>
          PHONE
          <span className="text-red-500 ml-1">*</span>
        </p>
      ),
      className: "",
      input: (
        <InputComponent
          type="text"
          state={phone}
          setState={setPhone}
          placeholder="+6012345678"
        />
      ),
    },
    {
      title: (
        <p>
          COMPANY
          <span className="text-red-500 ml-1">*</span>
        </p>
      ),
      className: "",
      input: (
        <InputComponent
          state={company}
          type="text"
          setState={setCompany}
          placeholder="Example Company"
        />
      ),
    },
    {
      title: (
        <p>
          POSITION
          <span className="text-red-500 ml-1">*</span>
        </p>
      ),
      className: "",
      input: (
        <InputComponent
          state={position}
          type="text"
          setState={setPosition}
          placeholder="Manager"
        />
      ),
    },
    {
      title: (
        <p>
          MESSAGE
          <span className="text-red-500 ml-1">*</span>
        </p>
      ),
      className: "lg:col-span-2 lg:row-start-4",
      input: (
        <InputMessageComponent
          state={message}
          type="text"
          setState={setMessage}
          placeholder="Enter your message here"
        />
      ),
    },
    {
      title: "",
      className: "lg:col-span-2 lg:row-start-5 items-center mt-6 lg:mb-10",
      input: (
        <button
          disabled={!mandatory()}
          type="submit"
          onClick={handleSubmit}
          className="bg-[#FF0000] xs:text-xs py-2 airif rounded-md w-full"
        >
          SUBMIT
        </button>
      ),
    },
  ];

  return (
    <div
      id="contact"
      className="mx-5 text-center mt-10 xl:mt-20 xl:mx-44 2xl:mx-56"
      // action="mailto:Hello@arkforge.gg"
      // method="post"
      // encType="text/plain"
    >
      <b className="montserrat-bold xl:text-3xl">INVESTOR RELATION</b>
      <div className="flex text-left sm:text-center">
        {/* <p className="text-sm my-3 text-[#6C6C6C] airif">
          Empowering Investors with information and Access. Explore our
          downloadable resources and reach out to us for any inquiries or
          opportunities.
        </p> */}
      </div>

      <div className="my-14 border border-[#CB0000]">
        <section className="bg-[#CB0000] p-3">
          <b className="montserrat-bold xs:text-base xl:text-3xl">
            GET IN TOUCH
          </b>
          <p className="xs:text-xs text-sm my-3 xl:mx-5 airif">
            Uncover the impact our team of seasoned experts can bring to your
            business. With years of valuable experience and unparalleled gaming
            knowledge, we are enthusiastic about assisting you in realizing your
            full potential and reaching greater success.
          </p>
        </section>

        <section className="my-10 mx-4 lg:px-20 grid lg:grid-cols-2 gap-x-10">
          {forms.map((form, i) => (
            <div
              key={i}
              className={`flex flex-col items-start justify-center w-full ${form.className}`}
            >
              <p className="airif text-left xs:text-xs text-sm ml-1">
                {form.title}
              </p>
              {form.input}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
