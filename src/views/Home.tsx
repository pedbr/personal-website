import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import Sphere from '../components/Sphere/Sphere'

const Home = () => {
  return (
    <Fragment>
      <Box
        component={'div'}
        sx={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          component={'div'}
          sx={{
            width: 500,
            height: 500,
            border: 'dashed 1px black',
            borderRadius: '100%',
          }}
        />
      </Box>
      <Sphere />
    </Fragment>
  )
}

export default Home
