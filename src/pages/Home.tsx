import React from "react";

// Components
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="container mx-auto flex justify-center py-20">
      <Card imgSrc="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80">
        <div className="flex flex-wrap">
          <h1 className="text-white font-bold flex-auto text-xl font-semibold">
            Welcome To Auto Purchaser
          </h1>

          <div className="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl">
            Over 10,000 Vehicle Types
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
          architecto aspernatur eveniet in mollitia nisi nulla rerum vel.
          Expedita?
        </p>
      </Card>
    </div>
  );
};

export default Home;
