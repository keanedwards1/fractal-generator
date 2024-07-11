const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/fractal-generator', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Fractal schema and model
const fractalSchema = new mongoose.Schema({ data: String });
const Fractal = mongoose.model('Fractal', fractalSchema);

// API to generate fractal (simplified example)
app.post('/generate', (req, res) => {
    const fractalData = generateFractal(); // Implement fractal generation logic
    const fractal = new Fractal({ data: fractalData });
    fractal.save();
    res.send(fractal);
});

// Function to generate a simple fractal (placeholder)
function generateFractal() {
    return "fractal-data"; // Replace with actual fractal generation code
}

app.listen(5000, () => console.log('Server started on port 5000'));

