import React, { useEffect, useState } from "react";

// import { Helmet } from 'react-helmet';
import { Provider } from "react-redux";
import store from "../../../shared/redux/store";
import dynamic from "next/dynamic";

// import TabToTop from "../tab-to-top/tab-to-top";
import { useRouter } from "next/router";
// import Header from "../header/header";
const Switcher = dynamic(
  () => import("../../../shared/layout-components/switcher/switcher"),
  { ssr: false }
);
const Sidebar = dynamic(
  () => import("../../../shared/layout-components/sidebar/sidebar"),
  { ssr: false }
);

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Script from "next/script";
import Footer from "../../../shared/layout-components/footer/footer";
import Rightside from "../../../shared/layout-components/right-sidebar/right-sidebar";
import TabToTop from "../../../shared/layout-components/tab-to-top/tab-to-top";
import Header from "../../../shared/layout-components/header/header";
import { Helmet } from "react-helmet";
import { Box, Button, Input, Modal, Select } from "@mui/material";

const UsersIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    Role = string,
    Right = string,
    
  ) {
    return { Role, Right };
  }
  const rows = [
    createData("Admin", "777"),
    createData("Employee", "775"),
    createData("Gestionnaire", "775" )
  ];
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-75%, -75%)',

    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3" >
                <Button onClick={handleOpen}  className="float-md-right btn bg-primary bg-gradient rounded-pill"  >CREER PROFILS</Button>
               
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{marginLeft:'30%'}}
              >
                <Box width={450}  sx={style} bgcolor={"white"}  mt={10} pl={2} pt={2} border={'2px solid black'} boxShadow={10} borderRadius={5}>
                  <Input type="text" placeholder="Role" sx={{marginBottom:1, marginRight:5}}/>
                  <Input type="text" placeholder="Description des droits"/><br/><br/>
                  <Button onClick={handleClose} sx={{color:'gray'}}>fermer</Button>
                  <Button color="primary">Valider</Button>
                  
                </Box>
               
              </Modal>
                  <TableContainer bgcolor={"white"} >
                    <Table sx={{ minWidth: 200, maxwidth:320,backgroundColor:'white', colorScheme:'white' }}  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nom</TableCell>
                          <TableCell align="right">Role</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Role}
                            </TableCell>
                            <TableCell align="right">
                              {row.Right}
                            </TableCell>
                            <TableCell  align="center"  component="th" scope="row"  >
                              <i className="fas fa-edit col-md-3  "  role="button" ></i>
                              <i class="fas fa-trash-alt " role="button"></i>
                                
                              
                            </TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <{children}/> */}
                </div>
    </>
  );
}
UsersIn.layout = "Contentlayout"

export default UsersIn
