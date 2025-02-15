import "./App.css";
import { Button, Typography } from "@mui/material";
import {Download, Upload, Add} from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { lightBlue, pink, lightGreen } from '@mui/material/colors';

const azul = lightBlue[600];
const rosado = pink[500];
const verde = lightGreen[700];

function App() {
  return (
    <>
      <Typography variant="h1">🙀</Typography>
      <Typography variant="h2">Dangerous Question Game</Typography>

      <div className="card">
        <Button variant="contained" endIcon={<Add />} sx={{ m: 1, backgroundColor: azul }}>
          Create New Game
        </Button>
        <Button variant="contained" endIcon={<Upload />} sx={{ m: 1, backgroundColor: rosado }}>
          Load Game
        </Button>
        <Button variant="contained" endIcon={<Download />} sx={{ m: 1, backgroundColor: verde}}>
          Download Template
        </Button>
      </div>
    </>
  );
}

export default App;
