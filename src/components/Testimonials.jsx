import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonals = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[50%] h-[100%] -right-[65%] rounded-full blue__gradient' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] 1 px-[175px]'>
      <h1 className={styles.heading2}>Hören Sie, was unsere <br className='hidden sm:block' />Kunden zu sagen haben</h1>
      <div className='w-full mt-6 md:mt-0 max-w-[450px]'>
        <p className={`${styles.paragraph2} `}>
        Hören Sie, was unsere Kunden zu sagen haben. Erlebnisse, die Bände sprechen!
        </p>
      </div>
    </div>
    <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1] '>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
  </section>
)

export default Testimonals