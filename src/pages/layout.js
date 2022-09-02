import React from 'react'
import {Outlet} from 'react-router-dom'
import TopBar from '../components/appBar';
import BottomBar from '../components/bottomBar';

function Layout() {
  return (
    <div>
        <TopBar/>
        <Outlet/>
        <BottomBar/>
    </div>
  )
}

export default Layout;