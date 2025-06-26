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
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
      }}
    >      


<Image
          src="/Grzegrzolka_logo_white 1.png"
          alt="Grzegrzolka_logo"
          width={266}
          height={57}
          sizes="100vw"
          className="w-auto h-auto object-contain mb-6 mt-4 min-w-[266px] "
          priority
        />


      {/* Content */}
      <div className="max-w-7xl mx-auto pb-4 sm:pb-8 lg:pb-16 relative z-10 text-center px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Image
            src="/przynosimy_hero.png"
            alt="Przynosimy Hero"
            width={491}
            height={211}
          sizes="100vw"
            className="w-full h-auto max-w-full object-contain min-w-[326px]"
            priority
          />
        </div>
      </div>


      {/* New section with the specified content */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row">
       
       <div>
       
       
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-2xl text-[16px] sm:text-[24px] font-bold mb-8">
            PRZYNOSIMY CI WIEDZĘ<br />
            ZEBRANĄ W E-KOMPENDIUM,<br />
            Z KTÓREGO DOWIESZ SIĘ M.IN.:
          </h2>
          
          <div className="text-white text-lg sm:text-[22px] space-y-1 font-semibold">
            <p>» jak zorganizować loterię,</p>
            <p>» jakie są wymagania prawne,</p>
            <p>» jakie są wzorce dokumentów,</p>
            <p>» na co i dlaczego należy uważać.</p>
          </div>
          
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

        </div>




        <Image
          src="/girl33.png"
          alt="Girl33"
          width={273}
          height={372}
          sizes="100vw"
          className="w-auto h-auto max-w-full  object-contain mt-4 lg:mt-0 min-w-[273px]"
          priority
        />







      </section>

    </header>








  );
};

export default Head; 