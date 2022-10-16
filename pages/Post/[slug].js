import ReadersNav from "../components/ReadersNav"
import Recommendation  from "../components/Recommendation"
import ArticleMain  from "../components/ArticleMain"


const styles={
  wrapper:'flex',

}


const Post = () => {
  return (
    <div className={styles.wrapper}>

    <ReadersNav />
  <ArticleMain/>
    <Recommendation />
   
    </div>
  )
}

export default Post