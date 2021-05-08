import React, {useEffect, ReactNode} from 'react';

interface IProps {
  children: ReactNode;
  className: string;
  title: string;
};

export default function Layout({
  children,
  className,
  title = `Maximiliano's resume`
}: IProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`layout ${className}`}>
      {children}
    </div>
  );
}