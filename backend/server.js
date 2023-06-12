const express = require("express");
const cors = require("cors");
const si = require("systeminformation");

const http = require("http");
const { Server } = require("socket.io");
const socketApp = express();

socketApp.use(cors());
socketApp.use(express.json());

const server = http.createServer(socketApp);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const cpu = io.of("/cpu");
const scpu = io.of("/Scpu");
const memory = io.of("/memory");
const battery = io.of("/battery");

cpu.on("connection", (socket) => {
  console.log("Cpu socket connected");
  sendCpuInfo(socket);

  socket.on("disconnect", () => {
    console.log("Cpu socket disconnected.");
  });
});
scpu.on("connection", (socket) => {
  console.log("Small cpu socket connected");
  sendScpuInfo(socket);

  socket.on("disconnect", () => {
    console.log("Small cpu socket disconnected.");
  });
});
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

function sendCpuInfo(socket) {
  try {
    setInterval(async () => {
      const data = await si.currentLoad();
      const timeStamp = new Date().toLocaleTimeString();
      cpuMetrics = {
        timeStamp,
        load: data.currentLoad.toFixed(2),
        idle: data.currentLoadIdle.toFixed(2),
      };
      socket.emit("cpuInfo", cpuMetrics);
    }, 1000); // Send memory data every 1 second
  } catch (error) {
    console.log("Error fetching cpu data:", error);
  }
}

function sendScpuInfo(socket) {
  try {
    setInterval(async () => {
      const data = await si.cpu();
      const temp = await si.cpuTemperature();
      const scpuMetrics = {
        speed: data.speed,
        cores: data.cores,
        tempreture: temp.main,
        performance: data.performanceCores,
      };
      socket.emit("scpuInfo", scpuMetrics);
    }, 1000); // Send memory data every 1 second
  } catch (error) {
    console.log("Error fetching small cpu data:", error);
  }
}
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

server.listen(3001, () => {
  console.log("Websocket server running on port 3001.");
});
