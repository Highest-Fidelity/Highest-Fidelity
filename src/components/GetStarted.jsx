import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2.5px] cursor-pointer`}>
   <a href='https://shops.act.at/10001743/desktop/' className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
   <div >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='font-normal text-gradient2'>
            Online
          </span>
        </p>
        <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow' />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='font-normal text-gradient2'>
            Webshop
          </span>
        </p>
    </div>
   </a>
  </div>
)

export default GetStarted