import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex flex-col self-center flex-1 mr-0 md:mr-10 md:self-start'>
        <a href='/' className='self-center text-3xl font-normal text-gradient font-poppins md:self-start'>
          HighestFidelity
        </a>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
        Steigern Sie Ihr Klangerlebnis: Höchste Wiedergabetreue, bei der Audio-Exzellenz gedeiht.
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-center md:text-left'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='mt-4 list-none'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0' }`}>
                  <a href={link.link}>
                   {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#212121]'>
      <p className='font-poppins font-normal text-[18px] leading-[27px] text-white mt-5'>
        1995 - {new Date().getFullYear()} | Highest Fidelity GmbH. All Rights Reserved.
      </p>
      <div className='flex flex-row mt-6'>
        {socialMedia.map((social, index) => (
          <a href={social.link} key={index}>
            <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0' }`}
          />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer