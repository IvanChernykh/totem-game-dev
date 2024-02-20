import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import Video from './assets/test.mp4';

const App: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <div>
      {isClicked ? (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            background: 'black',
          }}
        >
          <video autoPlay width="100%" height="100%">
            <source src={Video} type="video/mp4" />
          </video>
        </Box>
      ) : (
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Button
            variant="contained"
            sx={{ mb: 2, width: '200px' }}
            onClick={handleClick}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ width: '200px' }}
            onClick={handleClick}
          >
            Sign up
          </Button>
        </Box>
      )}
    </div>
  );
};

export default App;
