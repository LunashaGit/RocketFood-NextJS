'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import './button.css';

type BoutonType = {
  children: string;
  callToAction?: boolean;
  fullSize?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

type CoordsType = {
  x: number;
  y: number;
};

const Button = ({ children, callToAction, fullSize, onClick }: BoutonType) => {
  const [coords, setCoords] = useState<CoordsType>({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState<boolean>(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);
  return (
    <button
      className={clsx(
        'relative overflow-hidden transition duration-300 py-2 px-6 outline-none rounded-3xl drop-shadow-md cursor-pointer text-white font-medium text-lg after:absolute after:w-full after:h-full after:bg-dark/30 after:top-0 after:left-0 after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 hover:scale-95',
        fullSize ? 'w-full' : 'w-10',
        callToAction ? 'bg-blue-gradient' : 'border border-primary'
      )}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling && (
        <span
          className="ripple -translate-x-1/2 -translate-y-1/2"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}

      <span className="content select-none">{children}</span>
    </button>
  );
};

export default Button;
