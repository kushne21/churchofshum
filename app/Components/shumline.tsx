'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export function PageHeightTracker() {
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      // Cross-browser reliable way to get full document height
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
      setPageHeight(height);
    };

    // Measure on initial mount
    updateHeight();

    //Re-measure if the page content dynamically resizes
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  return pageHeight;
}

//todo : have it resize also account for changes in shums width
export default function Shumline() {
  PageHeightTracker()
  return (
    <div className="bg-box flex-col">
        {Array.from({ length: PageHeightTracker()/270 }).map((_, index) => (
        <Image
          key={index}
          src="/shumHIMSELF.png"
          alt={`image of the Shum ${index + 1}`}
          width={100}
          height={100}
        />
      ))}
       
    </div>
    
  );
}