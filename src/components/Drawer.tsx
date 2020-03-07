import React, { FunctionComponent } from 'react'
import Drawer from '@material-ui/core/Drawer';

export const TemporaryDrawer:FunctionComponent = ({children}) => {
  return (
    <div>
      <Drawer  variant="persistent" anchor="right" open>
        {children}
      </Drawer>
    </div>
  );
}
