import { Helmet } from "react-helmet"
import Seo from "../shared/layout-components/seo/seo"
import { Box, Button, FormControl, FormControlLabel, Input, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useState } from "react";
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


const AddText=()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
            <Seo title="AJOUTER ENTITE" />
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
            {/*<Button onClick={handleOpen} className="float-md-right btn " sx={{backgroundColor:"blue",colorScheme:"blue",color:"white"}}>*/}
              AJOUTER ENTITE</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        CREATION ENTITE
    </Typography>
    <Box id="modal-modal-description " sx={{ mt: 2 }} >
        <FormControl>
          
           <TextField  required  id="outlined-basic" label="NOM DE L'ENTITE" sx={{width:"150px"}} variant="outlined" className="m-3" />
        </FormControl>
        <FormControl>
           <TextField  required  id="outlined-basic" label="ADRESSE" variant="outlined"sx={{width:"150px"}} className="m-3"  />
        </FormControl>
        <FormControl>
           <TextField  required  id="outlined-basic" label="VILLE" variant="outlined" sx={{width:"150px"}} className="m-3"   />
        </FormControl>
        <FormControl>
           <TextField  required  id="outlined-basic" label="PAYS" variant="outlined"sx={{width:"150px"}} className="m-3"  />
        </FormControl>
        <FormControl>
           <TextField  required  id="outlined-basic" label="REGISTRE DE COMMERCE" variant="outlined" sx={{width:"150px"}} className="m-3"   />
        </FormControl>
        <FormControl>
           <TextField  required  id="outlined-basic" label="RCC" variant="outlined" sx={{width:"150px"}} className="m-3"  />
        </FormControl>
        <FormControl>
           <TextField  required  id="outlined-basic" label="GERANT/RESPONSABLE" variant="outlined" sx={{width:"150px"}}className="m-3"  />
        </FormControl>
        <Box>
            <Button onClick={()=>handleClose()} className="float-md-right btn btn-secondary">Fermer</Button>
            <Button className="float-md-left btn btn-primary">Valider</Button>
        </Box>
    </Box>
  </Box>
</Modal>
            </Box>
            <TableContainer    sx={{ colorScheme:'white'}} >
                    <Table sx={{ minWidth: 320,backgroundColor:'white', colorScheme:'white' }}  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>NOM</TableCell>
                          <TableCell align="right">ADRESSE</TableCell>
                          <TableCell align="right">VILLE</TableCell>
                          <TableCell align="right">PAYS</TableCell>
                          <TableCell align="right">REGISTRE DE COMMERCE</TableCell>
                          <TableCell align="right">RCC</TableCell>
                          <TableCell align="right">RESPONSABLE/ADMIN</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <TableRow>
                            <TableCell component="th" scope="row">
                              ORGANISATION 1
                            </TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                           
                            <TableCell className="flex"  align="right"sx={{justifyContent:'space-around'}} >
                              <i className="fas fa-edit me-5" role="button" ></i>
                              <i className="fas fa-trash-alt   " role="button"></i>
                            </TableCell>

                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
      </div>
        </>
    )
}
AddText.layout="Contentlayout"
export default AddText
