import React, { useEffect, useState } from 'react'
import arrow from "../assets/img/down.png"
import main from "../assets/img/main.png"
import black_AL from "../assets/img/main/bl_al.png"
import black_rsg from "../assets/img/main/bl_rsg.png"
import black_pulse from "../assets/img/main/bl_pn.png"
import red_AL from "../assets/img/main/red_al.png"
import red_rsg from "../assets/img/main/red_rsg.png"
import red_pulse from "../assets/img/main/red_pn.png"


const company = [
  { name: 'Pulse Nova' , image_black: black_pulse, image_red: red_pulse,  text: 'EMPOWERING BRANDS' },
  { name: 'RSG' , image_black: black_rsg, image_red: red_rsg, text: 'EMPOWERING BRANDS' },
  { name: 'Aghs Labs' , image_black: black_AL, image_red: red_AL, text: 'EMPOWERING BRANDS' },
];

export function Introduction() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [imageColor, setImageColor] = useState('red');

  useEffect(() => {
    const companyCount = company.length;
    const activeCompany = company[activeCompanyIndex];

    const typeText = async () => {
      for (let i = 0; i <= activeCompany.text.length; i++) {
        setTypewriterText(activeCompany.text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 150)); // Adjust typing speed as needed
      }

      // Delay the image color change to black
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Adjust the timing as needed

      // After typing is complete, change to the next company
      setImageColor('black');
      await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust the timing as needed
      setActiveCompanyIndex((prevIndex) => (prevIndex + 1) % companyCount);
      setTypewriterText('');
      setImageColor('red');
    };

    const interval = setInterval(typeText, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [activeCompanyIndex]);

  return (
    <>
      <div className='bg-black lg:mx-40 mx-8  '>
        <div className='flex md:flex-row flex-col-reverse mx-auto items-center justify-center h-screen w-full  md:-mt-8'>
          <div className='flex flex-col flex-1 md:mr-4 md:mt-0 mt-4'>
            <h1 className='montserrat font-bold lg:text-5xl text-xl'>
              Empowering Influence, Creating Value. Become Asia’s Biggest Gamer Community
            </h1>
            <p className='airif text-[#6C6C6C] lg:text-lg text-sm mt-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum vitae quam vitae volutpat. Cras ipsum mi, porttitor a aliquet sit amet, accumsan vel nulla.
            </p>
            <div className='flex flex-row gap-4 md:mt-24 mt-10'>
              <button type='button' className='border border-[#FF0000] hover:text-[#FF0000] hover:border-white rounded-md px-4 py-2  text-sm lg:text-lg'>CONTACT US</button>
              <button type='button' className='border border-black hover:border-[#FF0000] bg-black hover:bg-[#FF0000] rounded-md px-4 py-2 flex items-center gap-4 text-sm lg:text-lg' >
                DISCOVER NOW
                <img src={arrow} alt='arrow'/>
              </button>
            </div>
          </div>
          <div className='md:-mt-16 mt-16 relative'>
            <img src={main} alt='Arkforge' className=''/>
            <div className='flex flex-row absolute lg:top-72  md:top-60 top-40 space-x-10'>
              {company.map((comp, index) => (
                <img
                  src={
                    index === activeCompanyIndex
                      ? imageColor === 'red'
                        ? comp.image_red
                        : comp.image_black
                      : comp.image_black
                  }
                  alt={comp.name}
                  className="lg:w-40 md:w-32 w-20 lg:-ml-2 "
                />
              ))}
            </div>
            <div className="flex justify-center md:h-[37px] h-[22px]">
              <p className={`airif text-[#CB0000] lg:text-4xl text-xl line-1 ${imageColor === 'red' ? '' : ''}`}>{typewriterText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
