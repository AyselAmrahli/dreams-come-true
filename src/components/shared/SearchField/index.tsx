import React, { FC, memo } from 'react';

import './index.scss';

interface IProps {
	placeholder?: string,
	defaultValue?: string,
	onChange: (val: string) => void,
}

const SearchField: FC<IProps> = ({placeholder = '', defaultValue, onChange}) => (
  <div className="app-search-field">
    <input
      type="text"
      value={defaultValue}
      placeholder={placeholder}
      onChange={(e: any) => onChange(e.target.value)}
    />
  </div>
)

export default memo(SearchField)