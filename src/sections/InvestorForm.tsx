import { useState, useMemo } from "react";
import { InputComponent, InputMessageComponent } from "../components";

export function InvestorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = useMemo(() => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedCompany = company.trim();
    const trimmedPosition = position.trim();
    const trimmedMessage = message.trim();

    return (
      trimmedName.length > 0 &&
      trimmedEmail.length > 0 &&
      isValidEmail(trimmedEmail) &&
      trimmedPhone.length > 0 &&
      trimmedCompany.length > 0 &&
      trimmedPosition.length > 0 &&
      trimmedMessage.length > 0
    );
  }, [name, email, phone, company, position, message]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const subject = "Investor Relation Inquiry";
    const body: string = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nPosition: ${position}\nMessage: \n${message}`;

    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:Hello@arkforge.gg?subject=${subject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      <div className="relative flex items-center justify-center min-h-[838px] px-4 md:px-8 py-20 lg:py-28">
        <div className="relative bg-black border border-[#cb4e00] rounded-[25px] w-full max-w-[1125px] overflow-hidden">
          <div className="flex flex-col gap-3 items-center text-center px-4 md:px-12 pt-[43px] pb-8">
            <p
              className="montserrat-bold font-bold leading-[1.349] text-[20px] md:text-[32px] uppercase w-fit tracking-[0.96px] md:tracking-[1.28px]"
              style={{
                background:
                  "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect with ArkForge
            </p>
            <p className="titillium-web leading-normal text-[14px] md:text-[18px] text-white w-full">
              For partnerships, collaborations, or enquiries across our
              ecosystem, get in touch with our team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-4 md:px-[92px] pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-[12px]">
              <div className="flex flex-col">
                <p className="titillium-web leading-normal text-[14px] md:text-[16px] text-white uppercase mb-2">
                  NAME
                </p>
                <InputComponent
                  type="text"
                  state={name}
                  setState={setName}
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col">
                <p className="titillium-web leading-normal text-[14px] md:text-[16px] text-white uppercase mb-2">
                  EMAIL
                </p>
                <InputComponent
                  type="email"
                  state={email}
                  setState={setEmail}
                  placeholder="Your email address"
                />
              </div>

              <div className="flex flex-col">
                <p className="titillium-web leading-normal text-[14px] md:text-[16px] text-white uppercase mb-2">
                  PHONE
                </p>
                <InputComponent
                  type="text"
                  state={phone}
                  setState={setPhone}
                  placeholder="Contact number with area code"
                />
              </div>

              <div className="flex flex-col">
                <p className="titillium-web leading-normal text-[14px] md:text-[16px] text-white uppercase mb-2">
                  COMPANY
                </p>
                <InputComponent
                  state={company}
                  type="text"
                  setState={setCompany}
                  placeholder="Company or organisation name"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <p className="titillium-web leading-normal text-[14px] md:text-[16px] text-white uppercase mb-2">
                  POSITION
                </p>
                <InputComponent
                  state={position}
                  type="text"
                  setState={setPosition}
                  placeholder="Your role or designation"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <p className="titillium-web leading-normal text-[14px] md:text-[16px] text-white uppercase mb-2">
                  MESSAGE
                </p>
                <InputMessageComponent
                  state={message}
                  type="text"
                  setState={setMessage}
                  placeholder="Tell us about your idea, partnership, or enquiry…"
                />
              </div>

              <div className="md:col-span-2 mt-2">
                <button
                  disabled={!isFormValid}
                  type="submit"
                  className="bg-gradient-to-r from-[#900000] to-[red] h-[56px] rounded-[5px] w-full titillium-web text-[14px] md:text-[18px] text-white uppercase disabled:bg-gradient-to-r disabled:from-[#2b0101] disabled:to-[#510000] disabled:text-[#7E7878] disabled:cursor-not-allowed transition-opacity"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
