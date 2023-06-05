import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "Titre", headerName: "Titre", width: 90 },
  { field: "Description", headerName: "Description", width: 120 },
  { field: "Creation", headerName: "Date De Creation", width: 120 },
  { field: "Fin", headerName: "Date De Fin", width: 120 },
  { field: "Risque", headerName: "Risques", width: 100 },
  { field: "file", headerName: "Nom Du Fichier", width: 140 },
  { field: "Article", headerName: "Article", width: 90 },
  { field: "Entite", headerName: "Entite", width: 100 },
  { field: "Commanditaire", headerName: "Commanditaire", width: 120 },
  { field: "Executeur", headerName: "Executeur", width: 75 },
  { field: "Controlleur", headerName: "Controlleur", width: 120 },
];

const rows = [
  {
    id: 1,
    Titre: "Snow",
    Description: "Donnees test",
    Creation: String(Date()),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 2,
    Titre: "Targaryen",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 3,
    Titre: "Lannister",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 4,
    Titre: "Lannister",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 5,
    Titre: "Stark",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 6,
    Titre: "Targaryen",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 7,
    Titre: "Melisandre",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 8,
    Titre: "Clifford",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 9,
    Titre: "Frances",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 10,
    Titre: "Snow",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
  {
    id: 11,
    Titre: "Roxie",
    Description: "Donnees test",
    Creation: new Date(),
    Fin: new Date().getFullYear() + 1,
    Risque: "Data test",
    file:"images.test.png",
    Article:"Article 02-15-2022",
    Entite:"Sup Inter test",
    Commanditaire:" John Doe",
    Executeur:"Sogel ",
    Controlleur:"Ghislain"
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
