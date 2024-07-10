import React from 'react'
import { Routes, Route } from "react-router-dom"
import ARapp from './Components/ARapp';
import Home from './Components/Home';
import DownloadMarkers from './Components/DownloadMarkers';
import ViewMarkers from './Components/ViewMarkers';
import Marker from './Components/Marker';
import Error from './Components/Error';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/arapp' element={<ARapp />} />
        <Route path='/download' element={<DownloadMarkers />} />
        <Route path='/view-markers' element={<ViewMarkers />} />
        <Route path='/view-markers/singleMarker/:id' element={<Marker />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App;