import React from 'react'
import PageHeader from "../../../shared/layout-components/page-header/page-header"
import Seo from '../../../shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const Dashboardshare = dynamic(()=>import('../../../shared/data/dashboard/dashboard'), { ssr: false })

const Dashboard = () => {
	
  return (
    <>
    <Seo title="Page de Gestion"/>

    <PageHeader title="Bienvenue sur la Page de gestion" item="Home" active_item="Project Dashboard"/>
    
    <Dashboardshare/>

    </>
  )
}
Dashboard.layout = "Contentlayout"

export default Dashboard