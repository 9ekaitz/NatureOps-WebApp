
function change_paragraph() {
  
  console.log("Button has been clicked");
  navigator.geolocation.getCurrentPosition(success, error, options);
  
}

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {

  let paragraph = document.getElementById("change-me");
  let crd = pos.coords;
  
  console.log("Your current position is:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("More or less " + crd.accuracy + " meters.");
  paragraph.innerHTML = "Your current position is: " + "Latitude : " + crd.latitude + " Longitude: " + crd.longitude + " More or less " + crd.accuracy + " meters.";


 

  let encryptedLat = CryptoJS.AES.encrypt(crd.latitude.toString, "Secret Passphrase");
  let encryptedLong = CryptoJS.AES.encrypt(crd.longitude, "Secret Passphrase");

  paragraph.innerHTML = paragraph.innerHTML + "<br>" + "Encrypted Latitude: " + encryptedLat + "<br>" + "Encrypted Longitude: " + encryptedLong;

  let decryptedLat = CryptoJS.AES.decrypt(encryptedLat, "Secret Passphrase");
  let decryptedLong = CryptoJS.AES.decrypt(encryptedLong, "Secret Passphrase");

  paragraph.innerHTML = paragraph.innerHTML + "<br>" + "Decrypted Latitude: " + decryptedLat.toString(CryptoJS.enc.Utf8) + "<br>" + "Decrypted Longitude: " + decryptedLong.toString(CryptoJS.enc.Utf8);
    


}


  
function error(err) {
  let paragraph = document.getElementById("change-me");
  paragraph.innerHTML = "Error: " + err.message;
}
  
  
