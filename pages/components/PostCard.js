
import Image from 'next/image'
import pic from '../static/pic3.png'
import pic2 from '../static/pic2.jpg'
import pic5 from '../static/thumbnail.webp'
import pic1 from '../static/pic1.jpg'
import pic4 from '../static/Untitled design (9).png'
import Link from 'next/link'
import { BiBookmark } from "react-icons/bi";

const styles = {
    wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
    authorContainer: 'flex gap-[.4rem ] ',
    authorImageContainer: ' grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] ',
    authorImage: 'object-cover',
    authorName: ' font-semibold ml-1',
    title: ' font-medium text-2xl ',
    briefing: ' text-[#787878) ',
    detailsContainer: ' flex items-center justify-between text-[#787878]',
    articleDetails: ' my-2 text-[.8rem ] ',
    category: 'bg-[#F2F3F2 ] p-1 rounded-full ',
    postDetails: 'flex-[2.5] flex flex-col',
    bookmarkContainer: 'cursor-pointer'
}
const PostCard = () => {
    return (
        <Link href={`/Post/123`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>

                        <div className={styles.authorImageContainer}>
                            <Image
                                src={pic4}
                                width={50}
                                height={50}
                                className={styles.authorImage}
                            />
                        </div>
                        <div className={styles.authorName}> Maaz Imran   </div>

                    </div>
                    <h1 className={styles.title}>
                        i can open your eyes,Take you wonder by blunder
                    </h1>
                    <div className={styles.briefing}> Post your life here , enjoy it</div>
                    <div className={styles.detailsContainer}>


                        <span className={styles.articleDetails}>15 June 2002 5-min read <span className={styles.category}>Productivity
                        </span></span>
                        <span className={styles.bookmarkContainer}>
                            <BiBookmark className='h-5 w-5' />

                        </span>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <Image
                        src={pic4}
                        height={100}
                        width={100}

                    />
                </div>


            </div>
        </Link>

    )
}

export default PostCard