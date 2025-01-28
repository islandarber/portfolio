import myFace from "../assets/IMG_4650.jpeg";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen p-2 gap-2">
      {/* photo left */}
      <div>
        <img src={myFace} alt="myFace" className="rounded-full" />
      </div>
      {/* text right */}
      <div>
        <p className="w-2/3">Hi ! I'm Christina and I'm a FullStack Developer
          I'm a FullStack Developer and I love to build web applications. I'm
          passionate about learning new technologies and I'm always looking for
          new challenges.
        </p>
      </div>
    </div>
  );
};

export default Home;