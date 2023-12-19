import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboardview from './components/Dashboardview';
import { Outlet, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter, Route} from "react-router-dom";
import Main from './components/Main'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route path='/' element={<Main />}/>
    </Route>
    
  )
  
      
  
)


export default function TodoList() {
  

  return (
    <>
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'>
      <Sidebar />
      </div>
      <div className='basis-[88%] border h-[100vh] overflow-scroll'>
        <Dashboardview />
        <div>
          <RouterProvider router={router}/>
        </div>
      </div>
    </div>
      
    </>
  );
}

