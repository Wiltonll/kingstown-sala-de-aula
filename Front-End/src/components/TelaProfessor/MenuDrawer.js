import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

export default function MenuDrawer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerToggleLeft = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{
        overflow: 'hidden', // Remove barra de rolagem
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // Garante que o conteúdo se ajuste ao contêiner
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={handleDrawerToggleLeft}
          sx={{
            mr: drawerOpen ? 1 : 0, // Ajusta margem direita
            ml: 1, // Mantém margem esquerda consistente
            color: '#5922A0', // Mesma cor dos ícones
            justifyContent: 'center', // Centraliza horizontalmente
          }}
        >
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: '#5922A0',
            display: drawerOpen ? 'block' : 'none',
          }}
        >
          Kingstown - Sala de Aula
        </Typography>
      </Box>

      <List
        sx={{
          overflowY: 'auto', // Permite rolagem apenas se necessário
          flexGrow: 1, // Preenche o espaço restante
          padding: 0, // Remove espaçamento extra
        }}
      >
        {[
          { text: 'Início', icon: <HomeIcon />, path: '/' },
          { text: 'Criar Alunos', icon: <PersonAddIcon />, path: '/criar-alunos' },
          { text: 'Criar Salas', icon: <MeetingRoomIcon />, path: '/criar-salas' },
          { text: 'Dashboard do Professor', icon: <DashboardIcon />, path: '/professor-dashboard' },
          { text: 'Configurações', icon: <SettingsIcon />, path: '/configuracoes' },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              navigate(item.path);
              if (isMobile) setMobileOpen(false);
            }}
          >
            <ListItemIcon sx={{ color: '#5922A0', ml: 0 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                color: '#5922A0',
                display: drawerOpen ? 'block' : 'none',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#FFD105' }}>
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 0 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" noWrap component="div" sx={{ color: '#5922A0' }}>
            Kingstown College - Sala de Aula
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerOpen ? drawerWidth : 65,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerOpen ? drawerWidth : 65,
            boxSizing: 'border-box',
            backgroundColor: '#FFD105',
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar />
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
        <Toolbar />
        { }
      </Box>
    </Box>
  );
}
