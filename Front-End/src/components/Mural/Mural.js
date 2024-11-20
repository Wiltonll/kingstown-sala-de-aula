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
import SettingsIcon from '@mui/icons-material/Settings';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Mural() {
  const navigate = useNavigate(); // Esta linha está faltando
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [posts, setPosts] = useState([
    { id: 1, titulo: 'Bem-vindos à turma!', descricao: 'Esse é o mural de avisos.' },
    { id: 2, titulo: 'Lembrete', descricao: 'Entregar o trabalho até sexta-feira.' },
  ]);
  const [newPost, setNewPost] = useState({ titulo: '', descricao: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerToggleLeft = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAddPost = () => {
    if (newPost.titulo && newPost.descricao) {
      setPosts([
        ...posts,
        { id: posts.length + 1, titulo: newPost.titulo, descricao: newPost.descricao },
      ]);
      setNewPost({ titulo: '', descricao: '' });
      setOpenSnackbar(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const drawer = (
    <Box
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: drawerOpen ? drawerWidth : 65,
        boxSizing: 'border-box',
        backgroundColor: '#FFD105',
        overflowX: 'hidden',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={handleDrawerToggleLeft}
          sx={{
            mr: drawerOpen ? 1 : 0,
            ml: 1,
            color: '#5922A0',
            justifyContent: 'center',
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
          overflowY: 'auto',
          flexGrow: 1,
          padding: 0,
        }}
      >
        {[
          { text: 'Início', icon: <HomeIcon />, path: '/' },
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
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#FFD105',
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar />
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, maxWidth: 'calc(100% - 240px)', ml: drawerOpen ? 0 : 65 }}>
        <Toolbar />
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
            <Card
              key={post.id}
              sx={{
                backgroundColor: '#FFD105',
                color: '#6A0DAD',
              }}
            >
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
          onClose={() => setOpenSnackbar(false)}
          message="Novo aviso adicionado!"
        />
      </Box>
    </Box>
  );
}