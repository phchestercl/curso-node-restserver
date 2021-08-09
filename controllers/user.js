const { response, request }=require('express');

const usuariosGet = (req=request,res=response)=>{
    /**
     * localhost:8080/api/users?q=hola&nombre=philip&apikey=1252334372
     * 
     * con la desestrucutración le podemos dar valores por defecto a nuestros parametros, asi por ejempo si no viene el nummero de página pondrá 
     * por defecto el valor de 1.
     * localhost:8080/api/users?query=hola&nombre=harry&apikey=1252334372&limit=10
     */
    const {query,nombre,apikey,page=1, limit}=req.query;
    res.json({
        msg:'get API, metodo get - CONTROLADOR',
        query,
        nombre,
        apikey,
        page,
        limit
    })
};
const usuariosPut = (req=request,res=response)=>{
    /* const id =req.params.id;  las dos formas son validas*/
    const {id}=req.params;
    res.json({
        msg:'PUT api, método put desde el contrtolador',
        id
    })
};
const usuariosPost = (req,res=response)=>{
    /** peteciones POST con un json como body
     * {
        "nombre":"Philip Chester",
        "age":47,
        "id":126281781,
        "apellido":"otra cosa"
        }
     * 
     */
    const {nombre, age}=req.body;

    res.json({
        msg:'Post api, método POST desde el contrtolador',
        nombre,
        age
    })
};
const usuariosPatch = (req,res=response)=>{
    res.json({
        msg:'Patch api, método Patch desde el contrtolador',
    })
};
const usuariosDelete = (req,res=response)=>{
    res.json({
        msg:'Delete api, método Delete desde el contrtolador',
    })
};






module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}