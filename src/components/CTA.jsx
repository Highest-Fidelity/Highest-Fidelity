import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex flex-col flex-1'>
      <h2 className={styles.heading2}>
        Sind Sie bereit, Audio-Perfektion zu erleben?
      </h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
      Machen Sie den nächsten Schritt zu außergewöhnlichem Klang, indem Sie unsere Premium-Kollektion an Hi-Fi-Soundsystemen und Audio-Hardware erkunden. Erweitern Sie Ihr Audioerlebnis mit Highest Fidelity. Kaufen Sie jetzt ein und tauchen Sie ein in eine Welt voller fesselnder Klänge!      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0 mt-10`}>
      <Button text='Starte Heute!' />
    </div>
  </section>
)

export default CTA