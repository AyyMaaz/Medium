import Image from 'next/image'
import jslogo from '../static/jsLogo.png'
import banner from '../static/thumbnail.webp'
import { BiShieldAlt2 } from "react-icons/bi";
import {FaFacebookF,FaDiscord,FaGithub,FaLinkedinIn,FaBtc } from "react-icons/fa";
import pic from '../static/pic3.png'
import pic2 from '../static/pic2.jpg'
const styles = {
    wrapper: 'flex items-center justify-center flex-[3] border-l border-r border-black overflow-scroll',
    content: 'h-screen w-full p-[2rem]',
    postHeaderContainer: ' flex justify-between items-center mt-[2.2rem ]  mb-[1.2rem ] ',
    authorContainer: ' flex gap-[2rem ] ',
    authorProfileImageContainer: 'h-[2rem ] w-[2rem ] grid center rounded-full overflow-hidden ',
    column: 'flex ml-[1.3rem] flex-1 flex-col justify-center',
    postDetails: 'flex gap-[.2rem ] text-[#787878 ] ',
    listenButton: ' flex items-center gap-[.2rem ] text-[#1A8917] ',
    icons: 'flex justify-center items-center',
    socials: ' ml-[2rem] flex gap-[1rem] cursor-pointer text-[#787878 ]',
    space: 'ml-[2rem] flex gap-[1rem]',
    bannerImage: ' w-full grid-center overflow-hidden mt-[2rem] mb-[2rem]',
    articleMainContainer: 'flex flex-col gap-[1rem]',
    image: 'object-cover',
    title:'font-bold text-3xl',
    subtitle:'text-[1.4rem] text-[#808080] font-italic',
    articleText:'text-[1.4rem] text-[#808080] ',
    brief:' text-[#808080] italic'






}

const ArticleMain = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                                className={styles.image}
                                src={pic}
                                width={100}
                                height={100}

                            />
                        </div>
                        <div className={styles.column}>
                            <div>Maaz Imran</div>
                            <div className={styles.postDetails}>
                                <span>26 sep 7min read <span className={styles.listenButton}><BiShieldAlt2 />Listen</span></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.socials}>
                            <FaFacebookF />
                         

                            <FaDiscord />

                            <FaBtc />
                            <div className={styles.space}>
                                <FaLinkedinIn />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerImage}>
                        <Image
                            className={styles.image}
                            src={pic2}
                            height={400}
                           
                                

                        />
                    </div>
                    <h1 className={styles.title}>Power of Digital Money</h1>
                    <h4 className={styles.subtitle}>
                        <div>Maaz,26 september 2022</div></h4>
                    <div className={styles.brief}>Breif ,If you leave the page, you are idiot</div>
                    <div className={styles.articleText}>
                        The digital currency space is in a steady condition of motion.The digital currency space is in a steady condition of motion. Assuming you’re a crypto fan and financial backer, it’s critical to keep steady over the most recent improvements in the quickly advancing space of digital money and blockchain. Probably the most effective way to remain refreshed is to pay attention to digital money webcasts. In any case, with so many crypto digital recordings competing for your focus, it tends to be a baffling assignment to single out the ones worth paying attention to.     The digital currency space is in a steady condition of motion. Assuming you’re a crypto fan and financial backer, it’s critical to keep steady over the most recent improvements in the quickly advancing space of digital money and blockchain. Probably the most effective way to remain refreshed is to pay attention to digital money webcasts. In any case, with so many crypto digital recordings competing for your focus, it tends to be a baffling assignment to single out the ones worth paying attention to.       Assuming you’re a crypto fan and financial backer, it’s critical to keep steady over the most recent improvements in the quickly advancing space of digital money and blockchain.
                        Probably the most effective way to remain refreshed is to pay attention to digital money webcasts. In any case, with so many crypto digital recordings competing for your focus, it tends to be a baffling assignment to single out the ones worth paying attention to.
                        </div>
                </div>
            </div>
        
        </div>
      
    )
}

export default ArticleMain