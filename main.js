Webcam.set({
  width: 280,
  height: 235,
  image_format: 'jpeg',
  jpeg_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );


function tirar_foto(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

//Quando vc coloca no console ml5.version se mostra e porque está funcionando se não mostrar é porque esta com erro
console.log('versão ml5:', ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n1yYBxWZR/model.json', carregar_modelo);



function carregar_modelo() {
  console.log('modelo carregado!');
}


function check(){
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results){
  


  if(error) {
    console.error(error);
  } else{
    console.log(results);
    document.getElementById('resultObjectName').innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}