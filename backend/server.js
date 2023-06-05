const express = require("express");
const cors = require("cors");
const si = require("systeminformation");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/cpu", async (req, res) => {
  try {
    const data = si.currentLoad();
    const metrics = {
      load: (await data).currentLoad,
      idle: (await data).currentLoadIdle,
    };
    res.json(metrics);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Failed to fetch CPU metrics" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
