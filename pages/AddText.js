import { Helmet } from "react-helmet";
import Seo from "../shared/layout-components/seo/seo";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  borderRadius:10,
  bgcolor: "background.paper",
  p: 4,
};

const AddText = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Seo title="AJOUTER TEXTE" />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
        <Box>
          <Button
            onClick={handleOpen}
            className="float-md-right btn bg-primary bg-gradient rounded-pill m-2"
          >
            Ajouter Texte
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
          >
            <Box sx={style} >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CHAMP AJOUT DE TEXTE
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2,width:'700px' }}>
               <Box display={'flex'}>
               <FormControl>
                  <TextField
                    required
                    id="outlined-basic"
                    label="ID DU TEXTE"
                    sx={{ width: "300px" }}
                    variant="outlined"
                    className="m-3"
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    required
                    id="outlined-basic"
                    label="TITRE DU TEXTE"
                    sx={{ width: "300px" }}
                    variant="outlined"
                    className="m-3"
                  />
                </FormControl>
               </Box>
                <FormControl>
                      <FormHelperText id="my-helper-text">Date De Fin</FormHelperText>
                  <TextField
                    required
                    type="date"
                    id="outlined-basic"
                 
                    sx={{ width: "300px" }}
                    variant="outlined"
                    className="m-3"
                  />
                      
                </FormControl>
                <FormControl>
                      <FormHelperText id="my-helper-text">Image du Texte</FormHelperText>
                  <TextField
                    required
                    type="file"
                    id="outlined-basic"
                   
                    sx={{ width: "300px" }}
                    variant="outlined"
                    className="m-3"
                  />
                      
                </FormControl>
                <FormControl    sx={{ width: "300px",m:3}}>
  <InputLabel id="demo-simple-select-label">Statut</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Statut"
  >
    <MenuItem value={10}>En Vigueur</MenuItem>
    <MenuItem value={20}>Abroge</MenuItem>
    <MenuItem value={30}>Modifie</MenuItem>
  </Select>
</FormControl>
<FormControl    sx={{ width: "300px",my:3}}>
  <InputLabel id="demo-simple-select-label">Typologie</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Typologie"
    
  >
    <MenuItem value={10}>Legal</MenuItem>
    <MenuItem value={20}>Reglementaire</MenuItem>
    <MenuItem value={30}>Contrat</MenuItem>
  </Select>
</FormControl>
               
                <Box>
                  <Button
                    onClick={() => handleClose()}
                    className=" btn btn-secondary"
                    
                  >
                    Fermer
                  </Button>
                  <Button className="float-md-left  btn btn-primary" sx={{marginRight:10}}>
                    Valider
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
        <TableContainer sx={{ colorScheme: "white" }}>
          <Table
            sx={{
              minWidth: 320,
              backgroundColor: "white",
              colorScheme: "white",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>N° Identification du Texte</TableCell>
                <TableCell align="right">Titres </TableCell>
                <TableCell align="right">Date Entrée en vigueur du texte  </TableCell>
                <TableCell align="right">Téléchargement du texte  </TableCell>
                <TableCell align="right">Statut</TableCell>
                <TableCell align="right">Typologie du Texte </TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  CIrculaire n-01-02-2002 ....
                </TableCell>
                <TableCell align="right">DONNES TEST</TableCell>
                <TableCell align="right">DONNES TEST</TableCell>
                <TableCell align="right">DONNES TEST</TableCell>
                <TableCell align="right">DONNES TEST</TableCell>
                <TableCell align="right">DONNES TEST</TableCell>

                <TableCell
                  className="flex"
                  align="right"
                  sx={{ justifyContent: "space-around" }}
                >
                   <ModeEditIcon sx={{color:"blue"}}/>
                  <DeleteForeverIcon sx={{color:"red"}} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
AddText.layout = "Contentlayout";
export default AddText;
