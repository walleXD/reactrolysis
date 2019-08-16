import React, { ReactElement } from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { HeartCircle } from 'mdi-material-ui'

const Footer = (): ReactElement => (
  <Box
    display="flex"
    justifyContent="center"
    component={Paper}
    p={2}
  >
    <Typography>Made</Typography>
    <HeartCircle />
    <Typography>WalleXD</Typography>
  </Box>
)

export default Footer
