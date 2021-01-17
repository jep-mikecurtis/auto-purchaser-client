import React from "react";

type ErrorsType = {
    errorsArr: []
}
  


const Errors: React.FC<ErrorsType> = ({ errorsArr }) => {
    console.log(errorsArr);
  return (
    <div className="text-red-600 text-sm mb-4">
     <h1>Error</h1>
    </div>
  );
};

export default Errors;
