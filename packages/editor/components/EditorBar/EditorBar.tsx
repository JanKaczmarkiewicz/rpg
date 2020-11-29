import { Drawer } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';

const EditorBar: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return <Drawer open />;
};

export default EditorBar;
