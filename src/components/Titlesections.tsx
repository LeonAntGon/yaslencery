import React from 'react';

interface TitleSectionProps {
  text: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ text }) => {
  return (
    <div className=" bg-[#FEEBE5] h-[100px] flex justify-center items-center mt-[56px]">
      <h1 className=" text-center font-bold text-[22px]">{text}</h1>
    </div>
  );
}

export default TitleSection;