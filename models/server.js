const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.userPath='/api/users';
        //Middlewares
        this.middlewares();
        // Rutas de mi aplicacion
        this.routes();
        
    };

    routes(){
        this.app.use(this.userPath, require('../routes/user'))
                
    };
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    };
    middlewares(){
        //CORS
        this.app.use( cors());
        // Lectura y parseo del body
        /**
         * Este midellware permite recivir información de los post y put
         */
        this.app.use(express.json());
        // Directorio publico
        this.app.use( express.static('public'));
    }
};


module.exports=Server;