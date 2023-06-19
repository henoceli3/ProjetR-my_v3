import { Helmet } from "react-helmet";
import Seo from "../shared/layout-components/seo/seo";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
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
import { useEffect } from "react";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  borderRadius: 10,
  bgcolor: "background.paper",
  p: 4,
};

const AddText = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //----------------------recuper la liste des textes----------------------------------------
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    const fetchTextList = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/texte", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setTextList(response.data.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération de la liste des textes :",
          error
        );
      }
    };

    fetchTextList();
  }, [textList]);

  //---------------------------------------------------------------------------------------------
  //--------------------créer un texte--------------------------------------------
  const [newTexte, setNewTexte] = useState({
    entree_vigueur: "",
    link_fichier_texte: "",
    statut: "",
    type: "",
    titre_texte: "",
  });

  const { entree_vigueur, link_fichier_texte, statut, type, titre_texte } =
    newTexte;

  const changeHandler = (e) => {
    setNewTexte({ ...newTexte, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    // Ici, vous pouvez ajouter la logique pour télécharger le fichier sur votre serveur et obtenir son URL
    // Par exemple, en utilisant l'API `FormData` et `axios`, vous pouvez envoyer le fichier via une requête POST
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:4000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const fileUrl = response.data.fileUrl;
        setNewTexte({ ...newTexte, link_fichier_texte: fileUrl });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createTexte = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/texte",
        newTexte,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);
      setNewTexte({
        entree_vigueur: "",
        link_fichier_texte: "",
        statut: "",
        type: "",
        titre_texte: "",
      });
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  //------------------------------------------------------------------------------
  //-------modification du texte---------------------------------
  const [idTexte, setIdTexte] = useState();

  const updateTexte = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/texte/${idTexte}`,
        newTexte,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data.message);
      handleClose();
      // Vider les champs une fois la requête réussie
      setNewTexte({
        entree_vigueur: "",
        link_fichier_texte: "",
        statut: "",
        type: "",
        titre_texte: "",
      });
    } catch (error) {
      console.log(error.response.data.message);
      handleClose();
      // Vider les champs en cas d'erreur
      setNewTexte({
        entree_vigueur: "",
        link_fichier_texte: "",
        statut: "",
        type: "",
        titre_texte: "",
      });
    }
  };
  const setField = (
    entree_vigueur,
    link_fichier_texte,
    statut,
    type,
    titre_texte
  ) => {
    setNewTexte({
      entree_vigueur: entree_vigueur,
      link_fichier_texte: link_fichier_texte,
      statut: statut,
      type: type,
      titre_texte: titre_texte,
    });
  };
  const [isCreated, SetIsCreated] = useState(true);
  const createOrUpdate = () => {
    if (isCreated) {
      createTexte();
    } else {
      updateTexte();
    }
  };
  //--------------------------------------------------------------
  //---------------srppression de texte---------------------------
  const deleteTexte = (id) => {
    axios
      .delete(`http://localhost:4000/api/texte/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //--------------------------------------------------------------
  return (
    <>
      <Seo title="AJOUTER TEXTE" />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
        <Box>
          <Button
            onClick={() => {
              handleOpen();
              SetIsCreated(true);
            }}
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
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CHAMP AJOUT DE TEXTE
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2, width: "700px" }}>
                <Box display={"flex"}>
                  {/* <FormControl>
                    <TextField
                      required
                      id="outlined-basic"
                      label="ID DU TEXTE"
                      sx={{ width: "300px" }}
                      variant="outlined"
                      className="m-3"
                    />
                  </FormControl> */}
                  <FormControl>
                    <TextField
                      required
                      id="outlined-basic"
                      label="TITRE DU TEXTE"
                      sx={{ width: "300px" }}
                      variant="outlined"
                      className="m-3"
                      value={titre_texte}
                      name="titre_texte"
                      onChange={changeHandler}
                    />
                  </FormControl>
                </Box>
                <FormControl>
                  <FormHelperText id="my-helper-text">
                    {"Date D'entré en Vigueur"}
                  </FormHelperText>
                  <TextField
                    required
                    type="date"
                    id="outlined-basic"
                    sx={{ width: "300px" }}
                    variant="outlined"
                    className="m-3"
                    value={entree_vigueur}
                    name="entree_vigueur"
                    onChange={changeHandler}
                  />
                </FormControl>
                <FormControl>
                  <FormHelperText id="my-helper-text">
                    Fichier du Texte
                  </FormHelperText>
                  <TextField
                    required
                    type="file"
                    id="outlined-basic"
                    sx={{ width: "300px" }}
                    variant="outlined"
                    className="m-3"
                    value={link_fichier_texte}
                    name="link_fichier_texte"
                    onChange={changeHandler}
                  />
                </FormControl>
                <FormControl sx={{ width: "300px", m: 3 }}>
                  <InputLabel id="demo-simple-select-label">Statut</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Statut"
                    value={statut}
                    name="statut"
                    onChange={changeHandler}
                  >
                    <MenuItem value={"En vigueur"}>En Vigueur</MenuItem>
                    <MenuItem value={"Abroge"}>Abroge</MenuItem>
                    <MenuItem value={"Modifie"}>Modifie</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: "300px", my: 3 }}>
                  <InputLabel id="demo-simple-select-label">
                    Typologie
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Typologie"
                    name="type"
                    value={type}
                    onChange={changeHandler}
                  >
                    <MenuItem value={"Legal"}>Legal</MenuItem>
                    <MenuItem value={"Reglementaire"}>Reglementaire</MenuItem>
                    <MenuItem value={"Contrat"}>Contrat</MenuItem>
                  </Select>
                </FormControl>

                <Box>
                  <Button
                    onClick={() => handleClose()}
                    className=" btn btn-secondary"
                  >
                    Fermer
                  </Button>
                  <Button
                    className="float-md-left  btn btn-primary"
                    sx={{ marginRight: 10 }}
                    onClick={() => {
                      createOrUpdate();
                      handleClose();
                    }}
                  >
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
                <TableCell align="right">
                  Date Entrée en vigueur du texte{" "}
                </TableCell>
                <TableCell align="right">Téléchargement du texte </TableCell>
                <TableCell align="right">Statut</TableCell>
                <TableCell align="right">Typologie du Texte </TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {textList.map((texte) => (
                <TableRow key={texte.id_texte}>
                  <TableCell component="th" scope="row">
                    CIrculaire n-{texte.id_texte} ....
                  </TableCell>
                  <TableCell align="right">{texte.titre_texte}</TableCell>
                  <TableCell align="right">{texte.entree_vigueur}</TableCell>
                  <TableCell align="right">
                    {texte.link_fichier_texte}
                  </TableCell>
                  <TableCell align="right">{texte.statut}</TableCell>
                  <TableCell align="right">{texte.type}</TableCell>

                  <TableCell
                    className="flex"
                    align="right"
                    sx={{ justifyContent: "space-around" }}
                  >
                    <ModeEditIcon
                      sx={{ color: "blue" }}
                      onClick={() => {
                        handleOpen();
                        SetIsCreated(false);
                        // setField(
                        //   texte.entree_vigueur,
                        //   texte.link_fichier_texte,
                        //   texte.statut,
                        //   texte.type,
                        //   texte.titre_texte
                        // );
                      }}
                      cursor={"pointer"}
                    />
                    <DeleteForeverIcon
                      sx={{ color: "red" }}
                      cursor={"pointer"}
                      onClick={() => {
                        deleteTexte(texte.id_texte);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
AddText.layout = "Contentlayout";
export default AddText;
