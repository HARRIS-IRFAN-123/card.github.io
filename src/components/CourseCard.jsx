import React from 'react';
import ClinicImage from '../Images/clinic.png';
import NIcon from '../Images/N.png';
import TIcon from '../Images/T.png';
import HtmlIcon from '../Images/html.png';
import JQueryIcon from '../Images/jquery.png';
import JSIcon from '../Images/JS.png';
import BootstrapIcon from '../Images/Bootstrap.png';

function CourseCard(props) {
  const { title, subTitle, description } = props;

  return (
    <div className="max-w-md mx-auto mt-2 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="p-4">
        <div className="flex justify-center items-center h-64 relative">
          <img src={ClinicImage} alt={title} className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute top-0 left-0 w-1/4 h-1 bg-blue-500"></div>
        </div>
        <div className="w-fit text-sm font-bold text-blue-500 mt-3 border-t-2 border-blue-500 text-left">
          {/* <div className="bg-blue-500 h-1 w-24 mb-1"></div> */}
          HEALTHCARE
        </div>
        <p className="text-gray-600 text-sm leading-none text-left mt-0.5">{subTitle}</p>
        <p className="text-gray-700 text-sm mt-0.5 text-left">{description}</p>
        <div className="flex flex-col p-0 text-left">
          <div className="flex flex-1 p-0 m-0 h-fit">
            <p className="flex-1 text-xs mb-0 font-bold text-black">Platform:</p>
            <p className="flex-1 text-xs mb-0 text-gray-600">Web</p>
          </div>
          <div className="flex flex-1 p-0 mt-2 h-fit">
            <p className="flex-1 text-xs mb-0 font-bold text-black">Provided Services:</p>
            <p className="flex-1 text-xs mb-0 text-gray-600">Custom software development | Portal development</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-2 mb-[1.3rem] ">
          <img src={NIcon} alt="Node.js" className="w-8 h-8" />
          <img src={TIcon} alt="Node.js" className="w-8 h-8" />
          <img src={HtmlIcon} alt="HTML5" className="w-8 h-8" />
          <img src={JQueryIcon} alt="jQuery" className="w-8 h-8" />
          <img src={JSIcon} alt="JavaScript" className="w-8 h-8" />
          <img src={BootstrapIcon} alt="Bootstrap" className="w-8 h-8" />
        </div>
        <div className="text-left mt-2">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full inline-block"
          >
            See More Case Study
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
