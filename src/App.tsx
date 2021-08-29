import React, { useEffect } from 'react';

import { SHORTCUT } from './constants';

import { Toast } from './components';

import { WorkspaceStateProvider } from './contexts/workspace';

import { Menu, SideBar } from './modules/application';
import { NoteCard, IconCard } from './modules/cards';
import { CanvasContainer } from './modules/canvas';

import { Shortcut } from './libraries/shortcut';

function App() {
  const shortcut = new Shortcut();
  shortcut.setShortcut([SHORTCUT.PREFIX_CODE.SHIFT, 'S'], () => {
    Toast.info({
      message: 'SHIFT + S'
    });
  });

  useEffect(() => {
    shortcut.initial();

    return () => {
      shortcut.destroy();
    }
  }, []);

  return (
    <React.Fragment>
      <WorkspaceStateProvider>
        <SideBar />
        <Menu />
        <CanvasContainer>
          <NoteCard />
          <IconCard />
        </CanvasContainer>
      </WorkspaceStateProvider>
    </React.Fragment>
  );
}

export default App;
