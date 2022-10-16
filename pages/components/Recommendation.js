import Image from 'next/image'
import { BiBookmark, BiFullscreen, BiShieldAlt2 } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import pic from '../static/pic3.png'
import pic2 from '../static/pic2.jpg'
import pic5 from '../static/thumbnail.webp'
import pic1 from '../static/pic1.jpg'
import pic4 from '../static/Untitled design (9).png'


const styles = {
    wrapper: 'h-screen mi-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]'
    ,
    accentedButton: 'flex items-center justify-center text-sm bg-white text-black my-[2rem] py-[.6rem] rounded-full font-bold',
    searchBar: 'flex items-center gap-[.6rem ] h-[ 2.6rem ] border px-[1rem] rounded-full',
    searchInput: 'border-none outline-none bg-black w-fill p-[.6rem]',
    authorProfileImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorContainer: 'my-[2rem]',
    authorName: ' font-semibold  mb-[ 2rem ]  mt-[1rem ] ',
    auctionButton: 'bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem]',
    authorAuction: 'flex  gap-[.6rem] my-[1rem]',
    recommendationAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationAuthorName: 'text-sm',
    recommendationAuthorContainer: 'flex items-center gap-[.4rem]',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
    recommendationThumbnail: 'object-cover',
    recommendationTitle: 'font-bold',
    articleContentWrapper: 'flex items-center justify-center cursor-pointer my-[1.25rem]',
    articleContent: 'flex-[4]',
    articleContainer:'my-[2rem]'





}
const Recommendation = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.accentedButton}>
                Get unlimited
            </div>
            <div className={styles.searchBar}>
                <FaSistrix />

                <input className={styles.searchInput}
                    placeholder=' Search'
                    type='text'
                />
            </div>
 
            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image
                        src={pic}
                        height={100}
                        width={100}
                    />
                </div>
                <div className={styles.authorName}>Maaz Khan</div>
                <div className={styles.authorFollowing}>1 followers</div>
                <div className={styles.authorAuction}>
                    <button className={styles.auctionButton}>Follow me</button>
                    <button className={styles.auctionButton}><BiShieldAlt2 /></button>

                </div>
            </div>
            <div className={styles.recommendationContainer}>
                <div className={styles.title}>More from TheRichGuy reads</div>
                <div className={styles.articleContainer}>

                {recommendation.map(post=>(
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationAuthorContainer}>
                                <div className={styles.recommendationAuthorProfileImageContainer}>
                                    <Image src={post.image} height={100} width={100} />
                                </div>
                                <div className={styles.recommendationAuthorName}>{post.author.name}
                                </div>
                            </div>
                            <div className={styles.recommendationTitle}>{post.title}
                            </div>


                        </div>
                        <div className={styles.recommendationThumbnailContainer}>

                            <Image className={styles.recommendationThumbnail} src={post.author.image} height={100} width={100} />

                        </div>

                    </div>
                    ))}
                </div>
               
             
            </div>
       
        </div>
    )
}

export default Recommendation

const recommendation=[

    {
        title:'Welcome this is my new project .To the mooon..',
        image:pic1,
        author:{
            name:'Maaz',
            image:pic2

        }
    },
    {
        title:'Welcome this is my new project .To the mooon..',
        image:pic1,
        author:{
            name:'Maaz',
            image:pic2

        }
    },
    {
        title:'Welcome this is my new project .To the mooon..',
        image:pic1,
        author:{
            name:'Maaz',
            image:pic2

        }
    }
]