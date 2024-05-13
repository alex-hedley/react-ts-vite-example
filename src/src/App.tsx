import './App.css'
import { Box, Container, Typography } from '@mui/material'
import ProTip from './components/ProTip'
import Copyright from './components/Copyright'

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}

export default App
