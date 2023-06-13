import styles from '../style'
import { discount, headphones } from '../assets'
import GetStarted from '../components/GetStarted'



// <div className='absolute w-[25%] h-[20%] left-[10%] top-[20%] purple__gradient ss:top-0 z-[1] ' />
const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 md:self-start self-center'>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>
            5%
          </span>
          {" "} Webshop {" "}
          <span className='text-white'>
          {" "} Rabatt
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[90px] mr-3 text-[85px] sm:text-[100px] sm:leading-[125px] text-white leading-[100px] text-center md:text-left">
            <span className="text-gradient">Highest Fidelity</span>{" "}
          </h1>
          <div className="hidden mr-0 md:flex md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[45px] text-[28px] text-white w-full leading-[50px] ss:mt-0 mt-5 text-center md:text-left">
        Tauchen Sie ein in den <br />Klang der Perfektion
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-8 text-[20px]`}>
        Mit einem Team hochqualifizierter Audio-Enthusiasten liegt unsere Expertise in der Gestaltung unvergleichlicher Klangerlebnisse. Von der detaillierten Systemgestaltung bis zur akribischen Kalibrierung sind wir bestrebt, eine Audio-Perfektion zu liefern, die die Sinne wirklich fesselt        </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={headphones} alt="billing" className={`w-[100%] h-[100%] md:py-10 lg:object-cover object-cover relative z-[5]`}  />
      <div className='absolute z-[0] w-[50%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[0] w-[25%] h-[20%] left-[30%] top-[20%] purple__gradient ss:top-0 ' />
      <div className='absolute z-[1] w-[20%] h-[25%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-23 bottom-40 blue__gradient' />

    </div>

    <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
        <GetStarted />
      </div>

    
  </section>
)


export default Hero