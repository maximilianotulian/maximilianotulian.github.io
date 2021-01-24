import React, {useEffect} from 'react';

export default function Layout({children, title}) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      {children}
    </div>
  );
}