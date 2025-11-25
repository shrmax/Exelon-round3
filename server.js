const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'data.json');

// Helper: Read existing JSON file
function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    return []; // return empty array if file not created
  }
  const jsonData = fs.readFileSync(DATA_FILE);
  return JSON.parse(jsonData);
}

// Helper: Write new data to JSON file
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// POST: save data to JSON file
app.post('/save', (req, res) => {
  try {
    const newData = req.body;

    // Read existing data
    let currentData = readData();

    // Add new record
    currentData.push({
      ...newData,
      createdAt: new Date().toISOString()
    });

    // Write back to file
    writeData(currentData);

    res.json({ message: "Data stored successfully", data: newData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: read JSON file
app.get('/data', (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
