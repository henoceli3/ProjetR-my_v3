import { Helmet } from "react-helmet";
import Seo from "../shared/layout-components/seo/seo";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
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
import { useEffect } from "react";
import axios from "axios";
import { set } from "lodash";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  bgcolor: "background.paper",
  p: 4,
};
const AddChap = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ---------------------------------------
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [age, setAge] = useState("");

  // -------------------------------recuperation de la liste des articles et des chapitres-------------------------------------
  const [articleList, setArticleList] = useState([]);
  const [chapitreList, setChapitreList] = useState([]);
  const [texteListe, setTexteListe] = useState([]);

  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/articles", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setArticleList(response.data.data);
        // console.log(response.data.message);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération de la liste des articles :",
          error
        );
      }
    };

    const fetChapitreliste = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/chapitres/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setChapitreList(response.data.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération de la liste des Chapitres :",
          error
        );
      }
    };

    const fetTexteListe = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/texte/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTexteListe(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération de la liste des Textes :",
          error
        );
      }
    };

    fetChapitreliste();
    fetchArticleList();
    fetTexteListe();
  }, [articleList, chapitreList, texteListe]);
  // ----------------------------------------------------------------------------------------------------------------
  //-------------------recuperer un chapitre par son id----------------------------
  const [singleChapitre, setSingleChapitre] = useState({});
  const fetChapitreById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/chapitre/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSingleChapitre(response.data.data);
      console.log(chapitreList);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération de la liste des Chapitre :",
        error
      );
    }
  };
  //-----------------------------------------------------------------------------------------------
  //----------------------------------------créer un nouvel article et d'un nouveau chapitre---------------------------------------

  const [newArticle, setArticle] = useState({
    id_chapitre: 1,
    titre_article: "",
    corps_article: "",
  });
  const resetNewArticle = () => {
    setArticle({
      id_chapitre: 1,
      titre_article: "",
      corps_article: "",
    });
  };
  const { id_chapitre, titre_article, corps_article } = newArticle;
  const changeHandler_1 = (e) => {
    setArticle({ ...newArticle, [e.target.name]: e.target.value });
  };
  const creatArticle = (e) => {
    axios
      .post("http://localhost:4000/api/articles", newArticle, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        resetNewArticle();
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la création de l'article :",
          error
        );
        resetNewArticle();
        handleClose();
      });
  };

  const [newChapitre, setChapitre] = useState({
    id_texte: 1,
    titre_chapitre: "",
    corps_chapitre: "",
  });
  const resetNewChapitre = () => {
    setArticle({
      id_texte: 1,
      titre_chapitre: "",
      corps_chapitre: "",
    });
  };
  const { id_texte, titre_chapitre, corps_chapitre } = newChapitre;
  const changeHandler_2 = (e) => {
    setChapitre({ ...newChapitre, [e.target.name]: e.target.value });
  };
  const creatChapitre = (e) => {
    axios
      .post("http://localhost:4000/api/chapitres", newChapitre, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        resetNewChapitre();
        handleClose2();
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la création du chapitre :",
          error
        );
        resetNewChapitre();
        handleClose2();
      });
  };
  //--------------------------------------------------------------------------------
  //--------------------------modification des articles et de chapitre---------------
  const [idArticle, setIdArticle] = useState();

  const updateArticle = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/articles/${idArticle}`,
        newArticle,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data.message);
      handleClose();
      resetNewArticle();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la mofication de l'article :",
        error
      );
      handleClose();
      resetNewArticle();
    }
  };

  const [idChapitre, setIdChapitre] = useState();

  const updateChapitre = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/chapitres/${idChapitre}`,
        newChapitre,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data.message);
      handleClose2();
      resetNewChapitre();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la mofication du chapitre :",
        error
      );
      handleClose2();
      resetNewChapitre();
    }
  };
  //-------------------------------------------------------------------------
  const [show_1, setShow_1] = useState(true);
  const updateCreate_1 = () => {
    if (show_1) {
      creatArticle();
    } else {
      updateArticle();
    }
  };
  const [show_2, setShow_2] = useState(false);
  const updateCreate_2 = () => {
    if (show_2) {
      creatChapitre();
    } else {
      updateChapitre();
    }
  };

  const setFields_1 = (id_texte, id_chapitre, corps_article) => {
    setArticle({
      id_chapitre: id_texte,
      titre_article: id_chapitre,
      corps_article: corps_article,
    });
  };
  //----------------------------------------------------------------------------
  //----------------------suppresion d'article et de chapitre ----------------
  function deleteArticle(id) {
    axios
      .delete(`http://localhost:4000/api/article/${id}`, {
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
          "Une erreur s'est produite lors de la suppression de l'article :",
          error
        );
      });
  }

  function deleteChapitre(id) {
    axios
      .delete(`http://localhost:4000/api/chapitre/${id}`, {
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
          "Une erreur s'est produite lors de la suppression du chapitre :",
          error
        );
      });
  }
  //----------------------------------------------------------------------------
  return (
    <>
      <Seo title="AJOUTER ARTICLE" />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
        <Box>
          <Button
            onClick={() => {
              handleOpen();
              setShow_1(true);
            }}
            className="float-md-right  rounded-pill"
            sx={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: 50,
              ":hover": {
                backgroundColor: "#00CED1",
                color: "whitesmoke",
              },
              margin: 3,
              padding: 1,
            }}
          >
            AJOUTER ARTICLE
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                AJOUTER ARTICLE
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Chapitre
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      sx={{ backgroundColor: "white", colorScheme: "white" }}
                      label="Texte"
                      onChange={changeHandler_1}
                      value={id_chapitre}
                      name="id_chapitre"
                    >
                      {chapitreList.map((chapitre) => (
                        <MenuItem
                          value={chapitre.id_chapitre}
                          key={chapitre.id_chapitre}
                        >
                          {chapitre.titre_chapitre}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    required
                    id="outlined-basic"
                    label="Titre de l'article"
                    variant="outlined"
                    sx={{ width: "300px" }}
                    className="m-1"
                    name="titre_article"
                    value={titre_article}
                    onChange={changeHandler_1}
                  />
                </Box>

                <TextField
                  required
                  id="outlined-basic"
                  label="Contenu de l'article"
                  variant="outlined"
                  sx={{ width: "320px" }}
                  className="mt-2 mb-2"
                  rows={4}
                  multiline
                  name="corps_article"
                  value={corps_article}
                  onChange={changeHandler_1}
                />
                <Box>
                  <Button
                    onClick={() => handleClose()}
                    className="float-md-right btn btn-secondary"
                  >
                    Fermer
                  </Button>
                  <Button
                    className="float-md-left btn btn-primary"
                    onClick={() => {
                      updateCreate_1();
                    }}
                  >
                    Valider
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* ------------------- */}
        <Box>
          <Button
            onClick={() => {
              handleOpen2();
              setShow_2(true);
            }}
            className="float-md-right  rounded-pill"
            sx={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: 50,
              ":hover": {
                backgroundColor: "#00CED1",
                color: "whitesmoke",
              },
              margin: 3,
              padding: 1,
            }}
          >
            AJOUTER CHAPITRE
          </Button>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                AJOUTER UN CHAPITRE
              </Typography>
              <Box id="modal-modal-description" sx={{ mt: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Texte
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      sx={{ backgroundColor: "white", colorScheme: "white" }}
                      label="Texte"
                      onChange={changeHandler_2}
                      name="id_texte"
                      value={id_texte}
                    >
                      {texteListe.map((texte) => (
                        <MenuItem
                          value={texte.id_texte}
                          key={texte.id_chapitre}
                        >
                          {texte.titre_texte}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    required
                    id="outlined-basic"
                    label="Titre du chapitre"
                    variant="outlined"
                    sx={{ width: "300px" }}
                    className="m-1"
                    name="titre_chapitre"
                    value={titre_chapitre}
                    onChange={changeHandler_2}
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
                  name="corps_chapitre"
                  value={corps_chapitre}
                  onChange={changeHandler_2}
                />

                <Box>
                  <Button
                    className="float-md-right btn btn-primary"
                    onClick={() => {
                      updateCreate_2();
                    }}
                  >
                    Valider
                  </Button>
                  <Button
                    onClick={() => handleClose2()}
                    className="float-md-left btn btn-secondary"
                  >
                    Fermer
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
        {/* ------------------------ */}

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
                <TableCell>N°Article</TableCell>
                <TableCell align="right">
                  {"Désignation de l'Atricle"}
                </TableCell>
                <TableCell align="right">N° Chapitre </TableCell>
                <TableCell align="right">Désignation Chapitre </TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articleList.map((article) => (
                <TableRow key={article.id_article}>
                  <TableCell component="th" scope="row">
                    Article n-{article.id_article} ....
                  </TableCell>
                  <TableCell align="right">{article.titre_article}</TableCell>
                  <TableCell align="right">{article.id_chapitre}</TableCell>
                  <TableCell align="right">
                    {/* {fetChapitreById(article.id_chapitre)} */}
                  </TableCell>
                  <TableCell
                    className="flex"
                    align="right"
                    sx={{ justifyContent: "space-around" }}
                  >
                    <ModeEditIcon
                      sx={{ color: "blue" }}
                      onClick={() => {
                        setFields_1(
                          article.id_chapitre,
                          article.titre_article,
                          article.corps_article
                        );
                        handleOpen();
                        setShow_1(false);
                        setIdArticle(article.id_article);
                      }}
                      cursor={"pointer"}
                    />
                    <DeleteForeverIcon
                      sx={{ color: "red" }}
                      onClick={() => {
                        deleteArticle(article.id_article);
                      }}
                      cursor={"pointer"}
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
AddChap.layout = "Contentlayout";
export default AddChap;
