import { jblbox } from '../assets';
import styles, { layout } from '../style';
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Genießen Sie 5% Rabatt <br className='hidden sm:block' />bei Website-Einkäufen
      </h2>
      <p className={`${styles.paragraph} max-w-[475px] mt-5`}>
      Kaufen Sie direkt auf unserer Website ein und erhalten Sie ein exklusives Angebot! Erhalten Sie 5% Rabatt auf Ihren Einkauf als Dankeschön dafür, dass Sie Highest Fidelity gewählt haben. Erleben Sie die feinste Audioqualität und sparen Sie gleichzeitig bei Ihren Lieblings-Soundsystemen und Audiogeräten. Verpassen Sie nicht diese zeitlich begrenzte Gelegenheit, Ihr Audio-Setup zu einem ermäßigten Preis zu verbessern.      </p>
      <Button styles='mt-10' text='ACT-Webshop' />
    </div>

    <div className={layout.sectionImg}>
      <img src={jblbox} alt='card' className='w-[100%] h-[66%]'/>
    </div>
  </section>
)

export default CardDeal