import React, { FC, ReactElement, ReactNode } from 'react';

import './index.scss';

interface IProps {
	children: string | ReactNode | ReactElement,
	onClick: () => void,
}

const Button: FC<IProps> = ({children, onClick}) => (
  <button
    className="app-button"
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button