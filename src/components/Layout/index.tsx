import React, {useEffect, ReactNode} from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
  title: string;
}

const Layout = ({
  children,
  className,
  title,
}: IProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={`layout ${className}`}>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: 'Maximiliano\'s resume',
}

export default Layout;
