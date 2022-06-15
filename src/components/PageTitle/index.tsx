import React, { FC } from 'react';

import './index.scss';

interface IProps {
  content: string;
}

const PageTitle:FC<IProps> = ({content}) => (
  <div className="app-page__title">
    {content}
  </div>
  );

export default PageTitle;
