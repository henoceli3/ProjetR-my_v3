import { Helmet } from "react-helmet"
import Seo from "../shared/layout-components/seo/seo"
import { Box, Typography } from "@mui/material"

const Secur=()=>{
    return(
        <>
            <Seo title="SECURITE " />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
    
        <Box bgcolor={"white"} className="d-flex flex-wrap justify-content-center mt-5">
            <Box>
              <Typography>Nom </Typography>
              <Typography>Prenom </Typography>
              <Typography>Email </Typography>
              <Typography> Mot de passe</Typography>
            </Box>
            <Box>
            <Typography>John </Typography>
              <Typography>Doe </Typography>
              <Typography>johnDoe@gmail.com </Typography>
              <Typography> *********</Typography>
            </Box>
        </Box>
      </div>
        </>
    )
}
Secur.layout = "Contentlayout"
export default Secur;