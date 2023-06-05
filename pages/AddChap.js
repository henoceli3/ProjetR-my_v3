import { Helmet } from "react-helmet";
import Seo from "../shared/layout-components/seo/seo";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
  Box,
  Button,
  FormControl,
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
import AddText from "./AddText";
import AddArt from "./AddArt";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius:10,
  bgcolor: "background.paper",
  p: 4,
};
const AddChap = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Seo title="AJOUTER CHAPITRE" />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
        <Box>
     <Button
            onClick={handleOpen}
            className="float-md-right  rounded-pill"
          
            sx={{backgroundColor:"blue",color:'white',borderRadius:50,":hover":{
              backgroundColor:"#00CED1",color:'whitesmoke'
            },margin:3,padding:1}}
          >
            AJOUTER CHAPITRE
          </Button>
          <AddArt/>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CHAMP AJOUT DE CHAPITRE
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <Box sx={{ display: "flex" }} >
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Texte
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      sx={{ backgroundColor: "white", colorScheme: "white" }}
                      label="Texte"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>EXEMPLE DE CIRCULAIRE</em>
                      </MenuItem>
                      <MenuItem value={10}>CIRCULAIRE 1</MenuItem>
                      <MenuItem value={20}>CIRCULAIRE 2</MenuItem>
                      <MenuItem value={30}>CIRCULAIRE 3</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    required
                    id="outlined-basic"
                    label="Titre du chapitre"
                    variant="outlined"
                    sx={{ width: "300px" }}
                    className="m-1"
                  />
                </Box>

                <TextField
                  required
                  id="outlined-basic"
                  label="Contenu du chapitre"
                  variant="outlined"
                  sx={{ width: "320px" }}
                  className="mt-2 mb-2"
                  rows={4}
                  multiline
                />

                <Box>
                  <Button
                    onClick={() => handleClose()}
                    className="float-md-right btn btn-secondary"
                  >
                    Fermer
                  </Button>
                  <Button className="float-md-left btn btn-primary">
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
                <TableCell>N°Chapitre </TableCell>
                <TableCell align="right">Désignation du Chapitre</TableCell>
                <TableCell align="right">N° Article </TableCell>
                <TableCell align="right">Désignation Article </TableCell>
                <TableCell align="right">Action</TableCell>
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
AddChap.layout = "Contentlayout";
export default AddChap;
