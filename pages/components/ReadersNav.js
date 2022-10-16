import Image from 'next/image'
import Link from'next/link'
import { BiBookmark,BiCheckShield,BiFile,BiErrorCircle,BiShieldAlt2 } from "react-icons/bi";
import {FaNewspaper,FaSistrix,FaSnapchatGhost,FaBook,FaClone} from "react-icons/fa";
// import {FaFacebookF,FaDiscord,FaGithub,FaLinkedinIn } from "react-icons/fa";
import logo from '../static/Main.png'
import pic from '../static/pic3.png'

const styles={
    logoContainer:'cursor-pointer',
    wrapper:'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem] cursor-pointer',
    iconsContainer:'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[gray]',
    divider:'border-b ',
    profileImageContainer:'w-[2.4rem] h-[2rem] rounded-full overflow-hidden place-items-center',
    profileImage:'object-cover rounded-full',
    image:'rounded-full'

}

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
    <Link href='/'>
    <div className={styles.logoContainer}>
    <Image 
    className={styles.image}
        src={logo}
        height={150}
        width={150}
    />
    </div> 
    </Link>
    <div className={styles.iconsContainer}>
    <FaNewspaper/><FaSnapchatGhost/><FaBook/><FaClone/>
   
    <div className={styles.divider}>
    {/* <BiShieldAlt2/> */}
    </div>
    </div>
    <div className={styles.profileImageContainer}>
    <Image
      className={styles.profileImage}
      src={pic}

      />
    </div>

    </div>
  )
}

export default ReadersNav