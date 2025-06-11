import React from "react";
import { Link } from "react-router";

const SubjectCard = (props) => {
    const {subData} = props;
    return(
        <>
        <Link to={"/studyMaterial"}>
        <div className="shadow-lg hover:shadow-2xl w-72 m-10">
            <div className={`${subData.bgColor} w-full h-48 rounded-t-2xl text-white text-4xl px-6 py-10`}>
              {subData.title} 
              {/* <p className="text-lg text-left mt-20">code: {subData.code}</p> */}
            </div>
            <div className="w-72 h-28 bg-gray-100 rounded-b-2xl p-2">
                <h1 className="text-md">{subData.subject}</h1>
                <p className="text-gray-600 text-sm">{subData.teacher}</p>
            </div>
        </div>
        </Link>
        </>
    )
}
export default SubjectCard;