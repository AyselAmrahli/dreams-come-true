import React, { FC, ReactNode } from 'react'

import './index.scss';

interface IProps {
  children: ReactNode;
}

const Grid:FC<IProps> = ({children}) => {
  return (
    <div className="app-grid">
      {children}
    </div>
  );
}

export default Grid;
