import React from 'react'
import { Box } from '@mui/material'
import Home from './views/Home'

function App() {
  return (
    <Box
      component={'div'}
      sx={{
        height: '100vh',
        backgroundColor: '#F8F4F1',
      }}
    >
      <Home />
    </Box>
  )
}

export default App
