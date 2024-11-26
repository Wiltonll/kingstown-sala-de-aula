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
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

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
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  // Adicionado: Estado e funções do formulário
  const [openForm, setOpenForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    titulo: '',
    descricao: '',
    arquivo: null,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setFormData({ titulo: '', descricao: '', arquivo: null }); // Limpar os campos do formulário
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, arquivo: e.target.files[0] });
  };

  const handleSubmit = () => {
    console.log('Dados enviados:', formData);
    // Aqui você pode adicionar lógica para enviar os dados para o servidor ou atualizar o estado
    handleCloseForm();
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
          {/* Atualizado: Botão "Anexar Arquivos" */}
          <Button
            onClick={handleOpenForm}
            variant="contained"
            sx={{
              backgroundColor: '#6A0DAD',
              color: '#FFD105',
              marginBottom: 3,
              '&:hover': {
                backgroundColor: '#5922A0',
                
              },
              '&:active': {
                backgroundColor: '#4B007D',
              },
            }}
          >
            <AddIcon sx={{ marginRight: 1 }} />
            Adicionar Arquivos
          </Button>

          {/* Formulário como um modal */}
          <Dialog open={openForm} onClose={handleCloseForm}>
          <DialogTitle
            sx={{
              color: '#6A0DAD', 
            }}
          >
            Anexar Arquivo
          </DialogTitle>
            <DialogContent>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2,
                  '& .MuiOutlinedInput-root': {
                    '& input': {
                      padding: '10px', // Ajusta o padding interno
                    },
                  },
                }}
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
              />
              <TextField
                label="Descrição"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                sx={{ marginBottom: 2 }}
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                component="label"
                sx={{
                  backgroundColor: '#FFD105',
                  color: '#6A0DAD',
                  '&:hover': {
                    backgroundColor: '#E6B800',
                  },
                }}
              >
                <AttachFileIcon sx={{ marginRight: 1 }} />
                Anexar Arquivo
                <input
                  type="file"
                  accept="image/*,video/*,.pdf,.doc,.docx"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {formData.arquivo && (
                <Typography sx={{ marginTop: 1 }}>
                  Arquivo selecionado: {formData.arquivo.name}
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseForm} color="secondary">
                Cancelar
              </Button>
              <Button onClick={handleSubmit} variant="contained" color="secondary">
                Enviar
              </Button>
            </DialogActions>
          </Dialog>

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
