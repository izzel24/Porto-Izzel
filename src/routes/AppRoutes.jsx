import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import DPM from '../pages/DPM'
import ProjectLayout from '../pages/ProjectLayout'
import BEM from '../pages/BEM'
import Barberians from '../pages/Barberians'
import FitnessTracker from '../pages/FitnessTracker'
import Ptics from '../pages/Ptics'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/project' element={<ProjectLayout />}>
            <Route path='dpmfiaub' element={<DPM />} />
            <Route path='bemfiaub' element={<BEM />} />
            <Route path='barberians' element={<Barberians />} />
            <Route path='fitness-tracker' element={<FitnessTracker />}/>
            <Route path='ptics' element={<Ptics />} />
        </Route>
        
    </Routes>
  )
}
