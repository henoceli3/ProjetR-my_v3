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
import axios from "axios";

const UsersIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // -------------------------------recuperation de la liste des utilisateurs-------------------------------------
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/user", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserList(response.data.data);
        console.log(response);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération de la liste des utilisateurs :",
          error
        );
      }
    };

    fetchUserList();
  }, [userList]);
  // ----------------------------------------------------------------------------------------------------------------

  // ---------------------------------CREATION D'UN USER-----------------------------
  const [newUser, setNewUser] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    email: "",
    id_entite: 1,
    role_id: 1,
  });
  const { nom, prenom, fonction, email, id_entite, role_id } = newUser;

  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const creatUser = (e) => {
    axios
      .post("http://localhost:4000/api/user", newUser, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setNewUser({
          nom: "",
          prenom: "",
          fonction: "",
          email: "",
          id_entite: 1,
          role_id: 1,
        });
        handleClose();
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la création de l'utilisateur :",
          error
        );
      });
  };
  // ----------------------------------------------------------------------------------

  // ----------------------------suppression d'un user---------------------------------
  function deleteUser(id) {
    axios
      .delete(`http://localhost:4000/api/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la suppression de l'utilisateur :",
          error
        );
      });
  }
  // ----------------------------------------------------------------------------------

  // ------------------------------------modfier un user--------------------------------
  const [idUser, setIdUser] = useState();

  const updateUser = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/user/${idUser}`,
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data.message);
      handleClose();
      resetNewUser();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la mofication de l'utilisateur :",
        error
      );
      handleClose();
      resetNewUser();
    }
  };

  const resetNewUser = () => {
    setNewUser({
      nom: "",
      prenom: "",
      fonction: "",
      email: "",
      id_entite: 1,
      role_id: 1,
    });
  };

  // remplire les champs vide
  const setField = (nom, prenom, fonction, email, id_entite, role_id) => {
    setNewUser({
      nom: nom,
      prenom: prenom,
      fonction: fonction,
      email: email,
      id_entite: id_entite,
      role_id: role_id,
    });
  };
  // -----------------------------------------------------------------------------------
  //------ une fonction qui determine si il faut modifier ou créer ------------------
  const [show, setShow] = useState(true);
  const updateOrCreate = () => {
    if (show) {
      // Create a new user
      creatUser();
    } else {
      // Update an existing user
      updateUser();
    }
  };
  // -----------------------------------------------------------------------------

  //-------------------------------recuperer la liste des roles------------------------
  const [roleData, setRoleData] = useState([]);
  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/role", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setRoleData(response.data.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des rôles :",
          error
        );
      }
    };

    fetchRoleData();
  }, []);
  // --------------------------------------------------------------------------------------------

  //------------------------------------------------recuperer la liste des entités----------------
  const [entiteData, setEntiteData] = useState([]);
  useEffect(() => {
    const fetchEntiteData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/entite", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setEntiteData(response.data.data);
        console.log(response);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des entités :",
          error
        );
      }
    };

    fetchEntiteData();
  }, []);
  // ------------------------------------------------------------------------------------------

  // -----------------recuperer le role par son id pour afficher le label----------------------
  const [role, setRole] = useState("");
  const [loadingRole, setLoadingRole] = useState(true);

  const fetchRoleById = async (role_id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/role/${role_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRole(response.data.data.label);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération du rôle :",
        error
      );
    } finally {
      setLoadingRole(false);
    }
  };
  //----------------------------------------------------------------------------------------

  // ------------recuperer l'entite par son id pour afficher le label------------------------
  const [entite, setEntite] = useState("");
  const [loadingEntite, setLoadingEntite] = useState(true);

  const fetchEntiteById = async (id_entite) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/entite/${id_entite}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setEntite(response.data.data.nom);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération de l'entité :",
        error
      );
    } finally {
      setLoadingEntite(false);
    }
  };
  // ---------------------------------------------------------------------------------

  return (
    <>
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
        <Button
          onClick={() => {
            handleOpen();
            setShow(true);
          }}
          className="float-md-right btn btn-primary "
          sx={{ backgroundColor: "blue", colorScheme: "blue", color: "white" }}
        >
          CREER UTILISATEUR
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{ marginLeft: "30%" }}
        >
          <Box
            width={450}
            bgcolor={"white"}
            mt={10}
            pl={2}
            pt={2}
            border={"2px solid black"}
            boxShadow={10}
            borderRadius={5}
          >
            <Input
              type="text"
              placeholder="Nom de l'employe"
              sx={{ marginBottom: 1, marginRight: 5 }}
              name="nom"
              value={nom}
              onChange={changeHandler}
            />
            <Input
              type="text"
              placeholder="prenom"
              name="prenom"
              value={prenom}
              onChange={changeHandler}
            />
            <br />
            <br />
            <Input
              type="text"
              placeholder="Fonction"
              name="fonction"
              value={fonction}
              onChange={changeHandler}
            />
            <br />
            <br />
            {/* <Input
              type="number"
              placeholder="Contact"
              sx={{ marginBottom: 1, marginRight: 5 }}
            /> */}
            <Input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <br />
            <br />
            {/* <Input
              type="Password"
              placeholder="Mot de passe"
              sx={{ marginBottom: 1, marginRight: 5 }}
            /> */}
            <select
              className="col-md-5"
              value={id_entite}
              name="id_entite"
              onChange={changeHandler}
            >
              {entiteData.map((entite) => (
                <option key={entite.id_entite} value={entite.id_entite}>
                  {entite.nom}
                </option>
              ))}
            </select>
            <select
              className="col-md-5"
              value={role_id}
              name="role_id"
              onChange={changeHandler}
            >
              {roleData.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.label}
                </option>
              ))}
            </select>
            <br />
            <br />
            <Button onClick={handleClose} sx={{ color: "gray" }}>
              fermer
            </Button>
            <Button
              color="primary"
              onClick={() => {
                updateOrCreate();
              }}
            >
              Valider
            </Button>
          </Box>
        </Modal>
        <TableContainer
          component={Paper}
          variant="outlined"
          square
          bgcolor={"white"}
          sx={{ backgroundColor: "white", colorScheme: "white" }}
        >
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="right">Prenom</TableCell>
                <TableCell align="right">Fonction</TableCell>
                <TableCell align="right">Email</TableCell>
                {/* <TableCell align="right">Numero</TableCell> */}
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user) => (
                <TableRow key={user.id_utilisateur} sx={{}}>
                  <TableCell component="th" scope="row">
                    {user.nom}
                  </TableCell>
                  <TableCell align="right">{user.prenom}</TableCell>
                  <TableCell align="right">{user.fonction}</TableCell>
                  {/* <TableCell align="right">{row.number}</TableCell> */}
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.role_id}</TableCell>
                  <TableCell
                    align="right"
                    sx={{ justifyContent: "space-around" }}
                  >
                    <i
                      class="fas fa-edit mr-2 "
                      role="button"
                      onClick={() => {
                        handleOpen();
                        setField(
                          user.nom,
                          user.prenom,
                          user.fonction,
                          user.email,
                          user.id_entite,
                          user.role_id
                        );
                        setShow(false);
                        setIdUser(user.id_utilisateur);
                      }}
                    ></i>
                    <i
                      class="fas fa-trash-alt "
                      role="button"
                      onClick={() => {
                        deleteUser(user.id_utilisateur);
                      }}
                    ></i>
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
};
UsersIn.layout = "Contentlayout";

export default UsersIn;
