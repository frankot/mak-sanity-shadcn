'use client'
import { useState, useEffect } from 'react';

const Navbara = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos < prevScrollPos || currentScrollPos < 10;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-gray-900 py-4 transition-transform z-30 duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <ul className="flex justify-center">
        <li><a href="#" className="text-white px-4 py-2">Home</a></li>
        <li><a href="#" className="text-white px-4 py-2">About</a></li>
        <li><a href="#" className="text-white px-4 py-2">Services</a></li>
        <li><a href="#" className="text-white px-4 py-2">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbara;
