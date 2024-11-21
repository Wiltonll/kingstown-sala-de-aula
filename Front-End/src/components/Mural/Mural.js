import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : -drawerWidth,
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#FFD105',
  width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  marginLeft: open ? drawerWidth : 0,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = React.useState([
    { id: 1, titulo: 'Bem-vindos à turma!', descricao: 'Esse é o mural de avisos.' },
    { id: 2, titulo: 'Lembrete', descricao: 'Entregar o trabalho até sexta-feira.' },
  ]);
  const [newPost, setNewPost] = React.useState({ titulo: '', descricao: '' });
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = () => {
    if (newPost.titulo && newPost.descricao) {
      setPosts([...posts, { id: posts.length + 1, titulo: newPost.titulo, descricao: newPost.descricao }]);
      setNewPost({ titulo: '', descricao: '' });
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              position: 'absolute',
              left: '1',
              top: '12px',
              width: '36px',
              height: '36px',
              mr: 0,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon fontSize="small" sx={{ color: '#5922A0' }} />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: '#5922A0',
              position: 'absolute',
              left: '50px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            Kingstown College - Sala de Aula
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#FFD105',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: '#5922A0' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{ text: 'Início', icon: <HomeIcon /> }, { text: 'Configurações', icon: <SettingsIcon /> }].map(
            (item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#5922A0' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: '#5922A0' }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{ padding: 2 }}>
          <Button
            onClick={handleAddPost}
            variant="contained"
            sx={{
              backgroundColor: '#6A0DAD',
              color: '#FFD105',
              marginBottom: 3,
              '&:hover': {
                backgroundColor: '#5922A0',
                transitionDuration: '150ms',
              },
              transition: 'background-color 150ms ease',
            }}
          >
            <AddIcon sx={{ marginRight: 1 }} />
            Adicionar Novo Aviso
          </Button>

          <TextField
            label="Título"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            name="titulo"
            value={newPost.titulo}
            onChange={handleInputChange}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            name="descricao"
            value={newPost.descricao}
            onChange={handleInputChange}
          />

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {posts.map((post) => (
              <Card key={post.id} sx={{ backgroundColor: '#FFD105', color: '#6A0DAD' }}>
                <CardContent>
                  <Typography variant="h6">{post.titulo}</Typography>
                  <Typography variant="body2">{post.descricao}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            message="Novo aviso adicionado!"
          />
        </Box>
      </Main>
    </Box>
  );
}
