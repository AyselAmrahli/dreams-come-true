import React, { FC } from 'react';

import './index.scss';

interface IProps {
	placeholder?: string,
	defaultValue?: string,
	onChange: any,
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

export default SearchField