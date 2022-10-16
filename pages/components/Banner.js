import Image from 'next/image'
import banner from "../static/banner.png"
const Banner=()=>{

    const styles = {
      
        accentedButton : ' bg-black text-white py-2 px-4 rounded-full font-medium',
    content : 'max-w-7xl flex justify-evenly',
    wrapper :'bg-[#87C1FF] border-y border-black'
 }
    
return(
    <div className={styles.wrapper}>
    <div className={styles.content}>
<div className="space-y-5">
    <h1 className="max-w-xl text-[6rem] font-sans text-black">Stay Curious</h1>
    <h3 className='text-2xl text-black'>You are an Idiot,Lol you dont own any Nfts,Read our Blogs!</h3>
    <button className={styles.accentedButton}>Start Reading</button>
    </div>
    <Image
    className='hidden h-32 md:inline-flex object-contain flex-1'
        src={banner}
        width={500}
        height={400}
    />
    </div>
    </div>
)


}
export default Banner;