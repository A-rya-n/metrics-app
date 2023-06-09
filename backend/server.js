const express = require("express");
const cors = require("cors");
const si = require("systeminformation");
const app = express();

const http = require("http");
const { Server } = require("socket.io");
const socketApp = express();

app.use(cors());
app.use(express.json());
socketApp.use(cors());
socketApp.use(express.json());

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

const server = http.createServer(socketApp);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const memory = io.of("/memory");
const battery = io.of("/battery");

memory.on("connection", (socket) => {
  console.log("Memory socket connected");
  sendMemoryInfo(socket);

  socket.on("disconnect", () => {
    console.log("Memory socket disconnected.");
  });
});
battery.on("connection", (socket) => {
  console.log("Battery socket connected");
  sendBatteryInfo(socket);

  socket.on("disconnect", () => {
    console.log("Battery socket disconnected.");
  });
});

function sendMemoryInfo(socket) {
  try {
    setInterval(async () => {
      const data = await si.mem();
      memMetrics = {
        Total: data.total,
        Used: data.used,
        Free: data.free,
      };
      socket.emit("memoryInfo", memMetrics);
    }, 1000); // Send memory data every 1 second
  } catch (error) {
    console.log("Error fetching memory data:", error);
  }
}
function sendBatteryInfo(socket) {
  try {
    setInterval(async () => {
      const data = await si.battery();
      batteryMetrics = {
        Original: data.designedCapacity,
        Max: data.maxCapacity,
        Current: data.currentCapacity,
        Percent: data.percent,
        Time: data.timeRemaining,
        Volt: data.voltage,
      };
      socket.emit("batteryInfo", batteryMetrics);
    }, 1000); // Send battery data every 1 second
  } catch (error) {
    console.log("Error fetching memory data:", error);
  }
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
server.listen(3001, () => {
  console.log("Websocket server running on port 3001.");
});
