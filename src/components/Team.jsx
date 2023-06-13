import React from 'react'
import styles from '../style';
import { staff } from '../constants';

const Team = () => (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-20 text-center">
      <h2 className={`${styles.heading2centered}`} >Unser Team</h2>
      <p className={styles.paragraphcentered}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-2 justify-items-center justify-evenly">
    {staff.map(({ id, name, position, image }) => (
        <div className="w-full p-2 lg:w-1/3 md:w-1/2" key={id}>
        <div className="flex items-center h-full p-4 my-5 border rounded-md shadow-xl border-[#27374D]">
            <img alt="team" className="flex-shrink-0 object-cover object-center w-20 h-20 mr-4 bg-transparent rounded-full full border-[2px] border-slate-800" src={image} />
            <div className="self-end flex-grow">
              <h2 className={`font-poppins font-semibold xs:text-[25px] text-[40px] text-white w-full  h-[55px]`}>{name}</h2>
              <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] md:text-right text-center `}>{position}</p>
            </div>
        </div>
        </div>
    ))}
    </div>
  </div>
</section>
);

export default Team