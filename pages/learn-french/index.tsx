import React from "react";

const LearnFrench: React.FC<Props> = () => {
  return (
    <div className="w-full">
      <div className="flex mt-4 justify-center flex-col items-center">
        <h2 className="text-2xl">
          hello welcome to archie&apos;s french dictionary
        </h2>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="ml-8 w-full">
          <ul>
            <li>today&apos;s subject is animals 12/7/22</li>
            <li>dog=chien pronounced: she-n</li>
            <li>cat=chat pronounced:sha</li>
            <li>mouse=souris pronounced: suh-ree</li>
            <li>bird=oiseau pronounced: wa-zo</li>
            <li>fish=poisson pronounced: pwah-sawn</li>
            <li>horse=cheval pronounced:she-val</li>
            <li>cow=vache pronounced: vahsh</li>
            <li>sheep=mouton pronounced: moo-tun</li>
            <li>goat=chèvre pronounced: she-vre</li>
            <li>pig=cochon pronounced: co-shawn</li>
            <li>duck=canard pronounced: kah-nahr</li>
            <li>chicken=poule pronounced: poul</li>
            <li>rooster=coq pronounced: ko-ck</li>
            <li>elephant=éléphant pronounced: el-ef-ont</li>
            <li>monkey=singe pronounced: se-nj</li>
            <li>lion=lion pronounced: lee-on</li>
            <li>zebra=zèbre pronounced: zeb-r</li>
          </ul>
        </div>
        <div className="flex justify-center w-full items-center">
          <img src={"fish.jpg"} className="h-72" />
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

type Props = {};

export default LearnFrench;
