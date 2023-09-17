import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getDocs, orderBy, limit, query, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PostsSlider = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const slider = useRef(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const postsRef = collection(db, "Posts");

      const q = query(postsRef, "Posts", orderBy("timestamp", "desc"));

      const querySnap = await getDocs(q);

      let posts = [];
      querySnap.forEach((doc) => {
        posts.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setPosts(posts);
      setLoading(false);
      console.log(posts);
    };

    fetchPosts();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mb-8 w-full">
        <Slider ref={slider} {...settings}>
          {posts.map(({ data, id }) => (
            <div key={id}>
              <div
                style={{
                  background: `url(${data.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="relative rounded-lg w-full h-[300px]"
              >
                <div className="relative top-2/4 flex justify-between sliderFlex">
                  <button onClick={() => slider?.current?.slickPrev()}>
                    <FaArrowLeft />
                  </button>
                  <button onClick={() => slider?.current?.slickNext()}>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PostsSlider;
