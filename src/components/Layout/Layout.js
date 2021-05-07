import React, {useEffect} from 'react';

export default function Layout({children, className, title = 'Maximiliano`s resume'}) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`layout ${className}`}>
      {children}
    </div>
  );
}