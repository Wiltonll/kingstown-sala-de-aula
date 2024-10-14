import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'; 
import ClassIcon from '@mui/icons-material/Class'; 
import SettingsIcon from '@mui/icons-material/Settings'; 

const MenuDrawer = ({ buttonColor }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#FFD105', 
        height: '100%', 
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h6" sx={{ padding: 2, color: '#5922A0' }}>
        Kingstown - Sala de Aula
      </Typography>
      <Divider />
      <List>
        {[ 
          { text: 'Início', icon: <HomeIcon /> },
          { text: 'Minhas Turmas', icon: <ClassIcon /> },
        ].map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: '#5922A0' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: '#5922A0' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: buttonColor, 
          '&:hover': { color: buttonColor, opacity: 0.8 }, 
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
