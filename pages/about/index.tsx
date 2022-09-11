import Image from "next/image";
import React from "react";

const Learn: React.FC<Props> = () => {
  return (
    <div className="text-center text-2xl pt-6 max-w-xl m-auto">
      <p>This website is run by Archie Greene.</p>
      <p>Hi my name is Archie and I am 7 years old.</p>
      <p>
        Archie&#8217;s website should updated every 1 or 2 weeks with new
        things. For example photos.
      </p>
      <div className="mt-8">
        <Image
          alt="archie"
          src={"/items/archie-first-day.png"}
          layout="fixed"
          width={300}
          height={321}
        />
      </div>
    </div>
  );
};

type Props = {};

export default Learn;
