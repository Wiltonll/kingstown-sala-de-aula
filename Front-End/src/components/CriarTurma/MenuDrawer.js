// src/components/MenuDrawer.js
import React from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuDrawer = ({ buttonColor }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <List>
      {/* Adicione suas opções de menu aqui */}
      <ListItem button onClick={toggleDrawer(false)}>
        <ListItemText primary="Opção 1" />
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <ListItemText primary="Opção 2" />
      </ListItem>
    </List>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: buttonColor, // Define a cor do botão
          '&:hover': { color: buttonColor, opacity: 0.8 }, // Efeito de hover
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default MenuDrawer;
