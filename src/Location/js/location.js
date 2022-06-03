
function change_paragraph() {
  
  console.log("Button has been clicked");
  navigator.geolocation.getCurrentPosition(success, error, options);
  
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {

    var paragraph = document.getElementById('change-me');
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    paragraph.innerHTML = 'Your current position is: ' + 'Latitude : ' + crd.latitude + ' Longitude: ' + crd.longitude + ' More or less ' + crd.accuracy + ' meters.';


 

    var encryptedLat = CryptoJS.AES.encrypt(crd.latitude.toString, "Secret Passphrase");
    var encryptedLong = CryptoJS.AES.encrypt(crd.longitude, "Secret Passphrase");

    paragraph.innerHTML = paragraph.innerHTML + '<br>' + 'Encrypted Latitude: ' + encryptedLat + '<br>' + 'Encrypted Longitude: ' + encryptedLong;

    var decryptedLat = CryptoJS.AES.decrypt(encryptedLat, "Secret Passphrase");
    var decryptedLong = CryptoJS.AES.decrypt(encryptedLong, "Secret Passphrase");

    paragraph.innerHTML = paragraph.innerHTML + '<br>' + 'Decrypted Latitude: ' + decryptedLat.toString(CryptoJS.enc.Utf8) + '<br>' + 'Decrypted Longitude: ' + decryptedLong.toString(CryptoJS.enc.Utf8);
    


  };


  
  function error(err) {
    var paragraph = document.getElementById('change-me');
    paragraph.innerHTML = "Error: " + err.message;
  };
  
  
