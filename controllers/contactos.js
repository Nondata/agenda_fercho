const Contacto = require("../models/Contacto");

const  readContactos = async(_, res)=>{
    try{
        const contactos = await Contacto.find({})

        if(contactos.length === 0)
            return res.render("index",{ok: false});

        return res.render("index", {ok: true, contactos: contactos});
    }catch(error){
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}

const createContacto = async(req, res)=>{
    try {
        const contacto_nuevo = new Contacto(req.body);

        await contacto_nuevo.save();

        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}

module.exports = {readContactos, createContacto};