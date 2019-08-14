let htmlplugin = require("html-webpack-plugin")
let cssplugin = require("mini-css-extract-plugin")

//export default = {}
module.exports = {

    //entry 

    //output 

    devtool : "source-map",

    devServer : {
        open : true
    },

    //production - development
    mode : "development",
    //plugins : Array de new plugins 
    plugins : [
        new cssplugin(),
        new htmlplugin({
            template : "./src/index.html",
            minify : {
                collapseWhitespace : true,
                removeAttributeQuotes : true, 
                removeComments : true
            }
        })
    ],
    //module : hace referencia a como webpack va a interpretar, leer y/o compilar cada uno de los modulos 
    module : {
        //rules : es un array de reglas que queremos aplicar por tipos de modulos
        rules : [
            //Cada objeto representaria una regla distinta
            {
                //test : hace referencia a lo que queremos testear, como el tipo de modulo o su nombre
                test : /\.js$/,
                use : "babel-loader"
            } ,
             
            {

                test : /\.css$/,
                //use : [ "style-loader" , "css-loader" ]
                use : [ cssplugin.loader , "css-loader" ]

            }
        ]
    }
}