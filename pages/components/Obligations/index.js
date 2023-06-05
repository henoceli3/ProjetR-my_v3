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
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import DataTable from "./TableData";
import Seo from "../../../shared/layout-components/seo/seo";

const UsersIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    name = string,
    surname = number,
    number = number,
    email = number,
    role = number,
    role1 = number,
    role2 = number,
    role3 = number,
    role4 = number,
    role5 = number
  ) {
    return {
      name,
      surname,
      number,
      email,
      role,
      role1,
      role2,
      role3,
      role4,
      role5,
    };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <Seo title="VUE TABLEAU" />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
        <Button
          onClick={handleOpen}
          className="float-md-right btn mb-3"
          sx={{
            color: "white",
            backgroundColor: "blue",
            colorScheme: "blue",
          }}
        >
          CREER OBLIGATION
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{ marginLeft: "30%" }}
        >
          <Box
            width={900}
            bgcolor={"white"}
            mt={10}
            pl={2}
            pt={2}
            border={"2px solid black"}
            boxShadow={10}
            borderRadius={5}
          >
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <TextField
                helperText="Entrez le titre de l'obligation"
                id="demo-helper-text-misaligned"
                label="Titre"
              />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <TextField
                helperText="Entrez une description"
                id="demo-helper-text-misaligned"
                label="Description"
              />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Ajouter Fichier</FormLabel>
              <Input
                type="file"
                sx={{ marginTop: "-10px" }}
                placeholder="responsable"
              />
            </FormControl>
            <FormControl sx={{ width: "25ch" }}>
              <TextField
                helperText="Ecrivez un article"
                id="demo-helper-text-misaligned"
                label="Article Associe"
              />
            </FormControl>
            <br />
            <br />
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Date de Debut</FormLabel>
              <Input type="date" placeholder="responsable" />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Date de Fin</FormLabel>
              <Input type="date" placeholder="responsable" />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Date de Mise a Jour</FormLabel>
              <Input type="date" placeholder="responsable" />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginTop: "20px" }}>
              <InputLabel id="demo-simple-select-label">Risques</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Risques"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Date de Debut</FormLabel>
              <Input type="date" placeholder="responsable" />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Date de Fin</FormLabel>
              <Input type="date" placeholder="responsable" />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginRight: 2 }}>
              <FormLabel>Date de Mise a Jour</FormLabel>
              <Input type="date" placeholder="responsable" />
            </FormControl>
            <FormControl sx={{ width: "25ch", marginTop: "20px" }}>
              <InputLabel id="demo-simple-select-label">Risques</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Risques"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <Button onClick={handleClose} sx={{ color: "gray" }}>
              Fermer
            </Button>
            <Button color="primary">Valider</Button>
          </Box>
        </Modal>
        <TableContainer
          component={Paper}
          variant="outlined"
          bgcolor={"white"}
          sx={{ backgroundColor: "white", colorScheme: "white" }}
        >
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Titre</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Date De Creation</TableCell>
                <TableCell align="right">Date De Fin</TableCell>
                <TableCell align="right">Mise a Jour</TableCell>
                <TableCell align="right">Risque</TableCell>
                <TableCell align="right">Nom Du Fichier</TableCell>
                <TableCell align="right">Article Associe</TableCell>
                <TableCell align="right">Entite</TableCell>
                <TableCell align="right">Commanditaire</TableCell>
                <TableCell align="right">Executeur</TableCell>
                <TableCell align="right">Controlleur</TableCell>

                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{}}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.surname}</TableCell>
                  <TableCell align="right">{row.number}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell
                    align="center"
                    spacing="4px"
                    sx={{ justifyContent: "space-around" }}
                  >
                    <i class="fas fa-edit mr-2 " role="button"></i>
                    <i class="fas fa-trash-alt " role="button"></i>
                    <i class="fas fa-file-export    "></i>
                    <i class="fas fa-eye    "></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <DataTable /> */}
        {/* <{children}/> */}
      </div>
      {/* <Provider store={store}>
        <div className="horizontalMenucontainer">
          <div className="page">
            <Header /> 
            <Sidebar />

            <div className="main-content side-content pt-0">
              <div
                className="main-container container-fluid"
                // onClick={() => remove()}
              >
                <h1 color="red"></h1>
                
              </div>
            </div>
            <Rightside />
          </div>

          <Switcher />
          <TabToTop />
         
        </div>
      </Provider> */}
    </>
  );
};
UsersIn.layout = "Contentlayout";

export default UsersIn;
