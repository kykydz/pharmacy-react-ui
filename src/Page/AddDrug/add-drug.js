import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ApiAxios from "./ApiAxios";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Alert, Paper, Snackbar, Typography } from '@mui/material';

function AddDrug() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // const response = await ApiAxios.post("/drugs", {
      //   id,
      //   name,
      //   unit,
      //   stock,
      //   price,
      // });
      navigate("/drugs");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, maxWidth: 600, margin: "20px auto" }}>
      <Typography variant="h4" gutterBottom>
        Add Stock
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="id"
        label="ID"
        name="id"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="unit"
        label="Unit"
        name="unit"
        value={unit}
        onChange={(event) => setUnit(event.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="stock"
        label="Stock"
        name="stock"
        type="number"
        value={stock}
        onChange={(event) => setStock(event.target.valueAsNumber)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="price"
        label="Price"
        name="price"
        type="number"
        value={price}
        onChange={(event) => setPrice(event.target.valueAsNumber)}
      />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Add Drug"}
      </Button>
    </Box>
    </Paper>
  );
}

export default AddDrug;