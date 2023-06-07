const express = require("express");
const cors = require("cors");
const si = require("systeminformation");
const app = express();
const WebSocket = require("ws");

app.use(cors());
app.use(express.json());
const wss = new WebSocket.Server({ port: 8080 });

app.get("/cpu", async (req, res) => {
  try {
    const data = await si.currentLoad();
    const timeStamp = new Date().toLocaleTimeString();
    const metrics = {
      timeStamp,
      load: data.currentLoad.toFixed(2),
      idle: data.currentLoadIdle.toFixed(2),
    };
    res.json(metrics);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Failed to fetch CPU metrics" });
  }
});

app.get("/Scpu", async (req, res) => {
  try {
    const cpu = await si.cpu();
    const temp = await si.cpuTemperature();
    const cpuMetrics = {
      speed: cpu.speed,
      cores: cpu.cores,
      tempreture: temp.main,
      performance: cpu.performanceCores,
    };
    res.json(cpuMetrics);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Failed to fetch CPU metrics" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
