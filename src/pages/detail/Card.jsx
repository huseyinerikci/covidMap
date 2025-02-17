import React from "react";

const Card = ({ item }) => {
  return (
    <div className="text-black p-5 border shadow rounded-md">
      <p className="text-sm font-semibold mb-2 capitalize">{item[0]}</p>
      <p className="text-lg">{item[1]}</p>
    </div>
  );
};

export default Card;
