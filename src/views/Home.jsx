import myFace from "../assets/IMG_4650.jpeg";
import React from "react";
import Background from "../components/Background";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen p-6 gap-2 back
    bg-black text-white font-source"
    style={{ position: "relative", zIndex: 1 }}>
      <Background />
      {/* photo left */}
      <div>
        <img src={myFace} alt="myFace" className="rounded-full" />
      </div>
      {/* text right */}
      <div className="flex flex-col justify-center items-center p-4 gap-2">
        <h1 className="text-xl">Hey, I’m Christina! 👩‍💻 </h1>
        <p className="text-center">Full-Stack Developer who loves building web apps and breaking things (in the best way). Always learning, always coding, and always up for a new challenge!
        </p>
      </div>
    </div>
  );
};

export default Home;