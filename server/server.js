import express from "express";
import configRoutes from "./routes/index.js";
import { appointmentReminder, medicationReminder } from "./data/pet.js";
import cron from "node-cron";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);

cron.schedule("0 8 * * *", () => {
  medicationReminder();
  appointmentReminder();
});

app.use(express.static(path.join(__dirname + "/public")));

const port = process.env.PORT || 8000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
