const fs = require("fs");
var data = [];
fs.readFile("./src/data/data.csv", "utf8", (err, datafile) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  try {
    const data2 = [];
    const numEtu = [];
    const definition = [];

    const rows = datafile.split("\n").slice(1);
    rows.forEach((row) => {
      const cols = row.split(",");
      data.push({
        numEtu: cols[1],
        definition: cols[2],
        procedurale: cols[3],
        oop: cols[4],
        fonctionnelle: cols[5],
        techno_web: cols[6],
        techno_cloud: cols[7],
        techno_embarque: cols[8],
        techno_mobile: cols[9],
        techno_dev_jeux: cols[10],
        labview: cols[11],
        excel: cols[12],
        blender: cols[13],
        unity: cols[14],
        figma: cols[15],
        cisco: cols[16],
        solidworks: cols[17],
        autoCAD: cols[18],
        kartel: cols[19],
        ensimersion: cols[20],
        ensimelec: cols[21],
        enigma: cols[22],
        ensimien: cols[23],
        imprimante3D: cols[24],
        siteCouleur: cols[25],
        ordiPanne: cols[36],
        cycleIngenieur: cols[27],
        os: cols[28],
      });

      const jsonString = JSON.stringify(data);

      fs.writeFile("./src/resultat/nvData.json", jsonString, (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
        }
      });
    });
  } catch (err) {
    console.log("Error parsing JSON:", err);
  }
});
