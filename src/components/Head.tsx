import React from 'react';
import Image from 'next/image';

interface HeadProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Head: React.FC<HeadProps> = ({ 
  title = "Welcome", 
  subtitle = "Your journey starts here",
  children 
}) => {
  return (
    <header 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
      }}
    >      

<div className="max-w-5xl mx-auto flex flex-col justify-center items-center xl:items-start">



<div className="w-full">

<Image
          src="/grzegrzolka-logo-white.svg"
          alt="Grzegrzolka_logo"
          width={205}
          height={45}
          className="w-auto h-auto object-contain mb-6 mt-4 min-w-[205px] px-4 2xl:px-0"
          priority
        />

</div>







      {/* Content */}
      <div className="pb-8 sm:pb-8 xl:pb-16 z-10 md:pt-12 ml-6 md:ml-0">

          <Image
            src="/myslisz_o_loterii.png"
            alt="Myslisz o loterii"
            width={792}
            height={211}
            sizes="100vw"
            className="w-full h-auto max-w-full object-contain min-w-[356px] sm:max-w-[526px] xl:min-w-[792px] px-4 2xl:px-0"
            priority
          />
        </div>
  




      {/* New section with the specified content */}
      <section className="flex flex-col lg:flex-row relative px-4 2xl:px-0 items-center justify-center">
       



        <div className="">
          <h2 className="text-white text-2xl text-[16px] sm:text-[24px] font-bold mb-8">
            PRZYNOSIMY CI WIEDZĘ<br />
            ZEBRANĄ W E-KOMPENDIUM,<br />
            Z KTÓREGO DOWIESZ SIĘ M.IN.:
          </h2>
          
          <ul className="text-white text-lg sm:text-[24px] font-normal leading-8">
            <li>» jak zorganizować loterię,</li>
            <li>» jakie są wymagania prawne,</li>
            <li>» jakie są wzorce dokumentów,</li>
            <li>» na co i dlaczego należy uważać.</li>
          </ul>
          
          {/* Silver Button */}
          <div className="mt-8 ">
            <a
              href="mailto:biuro@grzegrzolka.com"
              className="inline-block px-6 py-3 bg-white text-[#E63414] font-bold text-2xl rounded-xl"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>



<div>


        <Image
          src="/girl33.png"
          alt="Girl33"
          width={471}
          height={372}
          className= "mt-4 lg:mt-0 min-w-[271px] lg:min-w-[471px] xl:absolute left-135 -top-52 z-10"
          priority
        />

</div>



      </section>




</div>






    </header>








  );
};

export default Head; 