Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100

});
Webcam.attach('#webcamdiv')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="newimage" src="'+data_uri+'">'
    })
}