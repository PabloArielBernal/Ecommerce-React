import { Button, TextField, Grid, Box } from "@mui/material";

export const Login = () => {
  return (
    <Box sx={{padding: "25px"}} >
      <Grid container style={{ display: "flex", justifyContent: "center" }} spacing={2}>
        <Grid item xs={12} md={8} lg={6}>
          <TextField label="Usuario" variant="outlined" fullWidth />
          <TextField label="Contraseña" variant="outlined" fullWidth />
          <br />
          <br />
        </Grid>
        <Grid item md={12} display={"flex"} justifyContent={"center"}>
          <Button variant={"contained"} color="secondary">Ingresar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
