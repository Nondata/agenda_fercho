const { Router } = require("express");
const {readContactos, createContacto} = require("../controllers/contactos");

const router = Router();

router.get("/", readContactos);
router.post("/crear", createContacto)

module.exports = router;