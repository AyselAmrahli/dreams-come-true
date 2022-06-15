import React, { FC, ReactNode } from 'react';

import './index.scss';

interface IProps {
  children: ReactNode;
}

const Container:FC<IProps> = ({children}) => {
  return (
    <div className="app-container">
      {children}
    </div>
  );
}

export default Container;
