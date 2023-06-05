import { Helmet } from "react-helmet"
import Seo from "../shared/layout-components/seo/seo"

const Notif=()=>{
    return(
        <>
            <Seo title="NOTIFICATIONS " />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">

      </div>
        </>
    )
}
Notif.layout="Contentlayout";
export default Notif;
