var lienzo = new fabric.Canvas(myCanvas);

player_x - 10;
player_y - 10;

block_image_width - 30;
block_image_height - 30;

var objeto_jugador= "";
var bloque_objeto_imagen= "";

function actualización_jugador()
{
	fabric.Image.fromURL("jugador.png", function(Img) {
	objeto_jugador = Img;
	objeto_jugador.scaleToWidth(150);
	objeto_jugador.scaleToHeight(140);
	objeto_jugador.set({top:player_y,left:player_x});
	lienzo.add(objeto_jugador);
	});
}

function nueva_imagen(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	bloque_objeto_imagen = Img;
	bloque_objeto_imagen.scaleToWidth(block_image_width);
	bloque_objeto_imagen.scaleToHeight(block_image_height);
	bloque_objeto_imagen.set({top:player_y,left:player_x});
	lienzo.add(bloque_objeto_imagen);
	});

}

window.addEventListener("keydown", my_KeyDown);

function my_KeyDown(e)
{
    KeyPressed = e.keyCode(e);
    console.log(KeyPressed);
    if(e.shiftKey == true && KeyPressed == '80') 
{


    console.log("P y shift presionadas juntas");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("anchura_actual").innerHTML = block_image_width
    document.getElementById("altura_actual").innerHTML = block_image_height

    }
    if(e.shiftKey == true && KeyPressed == '77') 
{


    console.log("M y shift presionadas juntas");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("anchura_actual").innerHTML = block_image_width
    document.getElementById("altura_actual").innerHTML = block_image_height






}}