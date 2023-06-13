import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';


const FeatureCard = ({ icon, title, content, index }) => (
  
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card md:self-start self-center w-[80%]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
    <div className='absolute z-[0] w-[35%] h-[100%] -left-[200%] top-[300%] rounded-full purple__gradient' />
    <div className='absolute z-[0] w-[45%] h-[35%] -right-[80%] rounded-full purple__gradient' />


  </div>
);

const Business = () => {
  return (
    <section id="service" className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Erleben Sie Audio<br className="hidden sm:block" />
        Perfektion wie nie zuvor
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Entdecken Sie unsere Palette an hochwertigen Hi-Fi-Soundsystemen und modernster Audiotechnik, die Ihr Hörerlebnis neu definieren werden. Tauchen Sie ein in fesselnde Klanglandschaften und erkunden Sie die wahre Schönheit des Klangs. star Umfassende Auswahl      </p>

      <Button styles={`mt-10`} text="Webshop" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )
}

export default Business