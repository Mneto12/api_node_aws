import express, {Application } from 'express';
import cors from 'cors';
import { configServices } from './Config/services';
import { router } from './Routes';

const port = configServices.PORT;
const app: Application = express();

app.use(cors());
app.use(express.json());

// Importamos el router dinamico
app.use(router);
app.listen(port, () => {
  console.log(`Server is Running on Port:${port}`);
});