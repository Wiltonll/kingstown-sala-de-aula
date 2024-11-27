import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DrawerProfessor from '../TelaProfessor/MenuDrawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';


export default function Mural() {

  const [openAddAlunoForm, setOpenAddAlunoForm] = React.useState(false);

  const handleOpenAddAlunoForm = () => {
    setOpenAddAlunoForm(true);
  };

  const handleCloseAddAlunoForm = () => {
    setOpenAddAlunoForm(false);
  };

  const theme = useTheme();
  
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
    // Adicionado: Estado e funções do formulário
  const [openForm, setOpenForm] = React.useState(false);
  const [formData, setFormData] = React.useState({
    titulo: '',
    descricao: '',
    arquivo: null,
  });

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
        <DrawerProfessor/>
        <CssBaseline />
          <Toolbar>
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
              Adicionar Postagem
            </Button>

        <Button
          onClick={handleOpenAddAlunoForm}
          variant="contained"
            sx={{
          backgroundColor: '#FFD105',
          color: '#6A0DAD',
          marginBottom: 3,
          '&:hover': {
          backgroundColor: '#E6B800',
        },
    }}
          >
            <AddIcon sx={{ marginRight: 1 }} />
          Adicionar Alunos
      </Button>


            {/* Formulário ADICIONAR ARQUIVOS como um modal */}
            <Dialog open={openForm} onClose={handleCloseForm}>
            <DialogTitle
              sx={{
                color: '#6A0DAD', 
              }}
            >
              Anexar Arquivo ou Postagem
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

                {/* Formulário ADICIONAR ALUNO como um modal */}

            <Dialog open={openAddAlunoForm} onClose={handleCloseAddAlunoForm}>
              <DialogTitle
                sx={{
                color: '#6A0DAD', // Título em roxo
              }}
               >
                Adicionar Aluno
              </DialogTitle>
            <DialogContent>
              {/* Campo para matrícula ou email */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2,
                  '& .MuiOutlinedInput-root': {
                    '& input': {
                      padding: '5px', // Ajusta o padding interno
                    },
                  },
                }}
              />
            </DialogContent>
      <DialogActions>
      <Button onClick={handleCloseAddAlunoForm} color="secondary">
        Cancelar
      </Button>
      <Button variant="contained" color="secondary">
        Confirmar
      </Button>
    </DialogActions>
  </Dialog>


            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              message="Novo arquivo adicionado!"
            />
            
          </Box>
      </Box>
)};