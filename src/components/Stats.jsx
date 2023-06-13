import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
    // 28+ Jahre Erfahrung=> Gründung 95
    // 2240+ Erledigte Bestellungen => 80 * Anz. Jahre
    // 1400+ Kunden => 50 * Anz. Jahre
    <section className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 py-5 md:flex-row`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex items-center flex-row w-full m-3 justify-center`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal xs:text-[40px] text-[30px] sm:text-[50px] sm:leading-[50px] xs:leading-[30px] leading-[21px] md:text-[23px] xl:text-[30px] text-gradient3 ml-3'>
            {stat.title}
          </p>
          
        </div>
        
      ))}
    </section>
)


export default Stats