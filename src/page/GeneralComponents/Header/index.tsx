/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import {
  HeaderContainer, LogoImg, Title, TitleSection, Button, Input,
} from './styles';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleNav = (): void => setVisible(!visible);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent): void => {
    if (
      anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const renderMobileBar = (): JSX.Element => (
    <nav>
      <p>Sair</p>
    </nav>
  );

  return (
    <HeaderContainer>
      <Link to="/home" id="home-id">
        <TitleSection>
          <LogoImg src="https://avatars.githubusercontent.com/u/63678630?s=200&v=4" alt="sapo" />
          <Title>AutoLuby </Title>
        </TitleSection>
      </Link>
      {/* <SearchIcon /> */}
      {/* <Input type="text" id="searchBar" /> */}
      <div>
        <Link to="/">
          <Button type="button" id="btn-exit" onClick={() => localStorage.clear()}>Sair</Button>
        </Link>
        {/* <MenuIcon id="mobile-menu" onClick={() => toggleNav()} /> */}
        <div id="mobile-menu">
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MenuIcon id="mobile-menu-btn" />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Sair</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
      { visible && renderMobileBar() }
    </HeaderContainer>
  );
};

export default Header;
