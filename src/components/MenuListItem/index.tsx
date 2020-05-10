import React from 'react';
import { MenuItem, Button } from '@blueprintjs/core';

import './MenuListItem.scss';

// interface Props extends MenuItem {
//   buttonProps?: Button;
//   showActionButton?: boolean;
// }

export const MenuListItem: React.FC<any> = ({
  buttonProps,
  showActionButton,
  ...props
}) => (
  // <div className="extended-menu-item">
  <MenuItem
    // className="search-form-hints"
    {...props}
  >
    {showActionButton && <Button {...buttonProps} />}
  </MenuItem>
  // </div>
);
