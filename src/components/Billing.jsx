import { soundbox } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='about-us' className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={soundbox} alt='billing' className='w-[80%] h-[75%] justify-center relative z-[5]' />
    </div>


    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
      Erkunden, Einkaufen und Genießen</h2>
      <p className={`${styles.paragraph} max-w-[475px] mt-5`}>
      Wir haben große Sorgfalt darauf verwendet, sicherzustellen, dass Ihr Online-Einkaufserlebnis reibungslos und problemlos verläuft. Unser benutzerfreundlicher Webshop, nahtlos integriert mit Act, ermöglicht es Ihnen mühelos, unsere Premium-Audioprodukte zu erkunden, Einkäufe einfach zu tätigen und sich vollständig in die Welt des außergewöhnlichen Klangs zu vertiefen. Entdecken Sie ein neues Maß an Komfort und Zufriedenheit, während Sie Ihre audiovisuelle Reise mit Highest Fidelity antreten. Genießen Sie 5% Rabatt bei Website-Einkäufen      </p>
    </div>
  </section>
)

export default Billing