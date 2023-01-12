import React, { useState } from "react";
import { Typography, Slider, Container }
  from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import data from './data.json'
import CanvasJSReact from './assets/canvasjs.react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Navbar from "./Navbar";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const App = () => {

  //State management
  const [output, setOutput] = useState(Array(34).fill(0))
  const [ips, setIps] = useState([0])
  const [neutre, setNeutre] = useState([0])
  const [astre, setAstre] = useState([0])
  const [web, setWeb] = useState(0);
  const [embarque, setEmbarque] = useState(0);
  const [solidWorks, setSolidWorks] = useState(0);
  const [figma, setFigma] = useState(0);
  const [ensimelec, setEnsimelec] = useState(0);
  const [ensimersion, setEnsimersion] = useState(0);


  // handle state change
  const handleWeb = (e, newvalue) => { setWeb(newvalue) }
  const handleEmbarque = (e, newvalue) => { setEmbarque(newvalue) }
  const handleSolidWorks = (e, newvalue) => { setSolidWorks(newvalue) }
  const handleFigma = (e, newvalue) => { setFigma(newvalue) }
  const handleEnsimelec = (e, newvalue) => { setEnsimelec(newvalue) }
  const handleEnsimersion = (e, newvalue) => { setEnsimersion(newvalue) }


  //Once clicking on Validate Button
  const sendData = () => {
    const result = data.map(item => {
      //Calculate score
      return (
        (parseInt(item.techno_web) / 5) * web
        + (parseInt(item.techno_embarque) / 5) * embarque
        + (item.ensimelec === "J'y suis" ? 5
          : item.ensimelec === "Interessé" ? 3
            : item.ensimelec === "Ne connais pas" ? 1 : -2 / 5) * ensimelec
        + (item.ensimersion === "J'y suis" ? 5
          : item.ensimersion === "Interessé" ? 3
            : item.ensimersion === "Ne connais pas" ? 1 : -2 / 5) * ensimersion
        + (item.figma === "Tout le temps" ? 5
          : item.figma === "Régulièrement" ? 3
            : item.figma === "Un peu" ? 1
              : item.figma === "Jamais" ? -2 : -4 / 5) * figma
        + (item.solidworks === "Tout le temps" ? 5
          : item.solidworks === "Régulièrement" ? 3
            : item.solidworks === "Un peu" ? 1
              : item.solidworks === "Jamais" ? -2 : -4 / 5) * solidWorks
      )
    })
    setOutput(result)
    setIps(output.filter(item => item > 0))
    setAstre(output.filter(item => item < 0))
    setNeutre(output.filter(item => item == 0))
  }

  //Chart options
  const chartOptions = {
    animationEnabled: true,
    title: {
      text: "Résultas obtenus IPS/ASTRE"
    },
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: ips.length*100/34, label: "IPS" },
        { y: astre.length*100/34, label: "Neutre" },
        { y: neutre.length*100/34, label: "ASTRE" },
      ]
    }]
  }

  const columns = [
    { id: 'code', label: 'Code Etudiant', minWidth: 100 },
    { id: 'rate', label: 'Pondération', minWidth: 170 },
    { id: 'decision', label: 'Décision', minWidth: 170 },
  ];
  return (
    <>
      <Navbar />
      <Container  >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Typography variant="h6" >Technologies  Web</Typography>
                <Slider
                  defaultValue={2}
                  min={-5}
                  max={5}
                  value={web}
                  valueLabelDisplay="auto"
                  onChange={handleWeb}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Typography variant="h6" >Systèmes embarqués</Typography>
                <Slider
                  defaultValue={0}
                  min={-5}
                  max={5}
                  value={embarque}
                  valueLabelDisplay="auto"
                  onChange={handleEmbarque}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Typography variant="h6" >Logiciel SolidWorks</Typography>
                <Slider
                  defaultValue={3}
                  min={-5}
                  max={5}
                  value={solidWorks}
                  valueLabelDisplay="auto"
                  onChange={handleSolidWorks}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Typography variant="h6" >Association Ensimersion</Typography>
                <Slider
                  defaultValue={-2}
                  min={-5}
                  max={5}
                  value={ensimersion}
                  valueLabelDisplay="auto"
                  onChange={handleEnsimersion}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Typography variant="h6" >Association Ensim'Elec</Typography>
                <Slider
                  defaultValue={-4}
                  min={-5}
                  max={5}
                  value={ensimelec}
                  valueLabelDisplay="auto"
                  onChange={handleEnsimelec}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Typography variant="h6" >Outil Figma</Typography>
                <Slider
                  defaultValue={2}
                  min={-5}
                  max={5}
                  value={figma}
                  valueLabelDisplay="auto"
                  onChange={handleFigma}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} alignItems='center' justifyContent='center' columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Card>
              <CardContent>             
                <Button onClick={sendData} variant="contained">Valider</Button>
              </CardContent>
            </Card>           
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, id) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                              <TableCell key={id} >
                                {item.numEtu}
                              </TableCell>
                              <TableCell key={id} >
                                {output[id]}
                              </TableCell>
                              {
                                output[id] > 0 ?
                                  <TableCell key={id} >
                                    IPS
                                  </TableCell>
                                  : output[id] === 0 ?
                                    <TableCell key={id} >
                                      Neutre
                                    </TableCell> :
                                    <TableCell key={id} >
                                      ASTRE
                                    </TableCell>
                              }
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ minWidth: 275, margin: 3 }}>
              <CardContent>
                <CanvasJSChart options={chartOptions} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default App;