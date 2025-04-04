var WebsiteURL = window.location.hostname;
var WebsiteProtocol = window.location.protocol;
var WebsitePath = window.location.pathname;
var JSONTestURL = 'polite-sky-006c90f10.6.azurestaticapps.net';
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

function WebsiteLoad() {
  if (WebsiteProtocol != 'https://'){
    document.getElementById('website-full').innerHTML = '<br>'+WebsiteProtocol;
    //window.location.href = 'https://'+WebsiteURL+WebsitePath;
  } else {
    
    document.getElementById('website-full').innerHTML = '<br> ...'+WebsiteProtocol;
    WebsiteCheckURL();
  }
}

function WebsiteCheckURL() {
  if (WebsiteURL == JSONTestURL){
    alert('website true');
  } else {
    alert('website false');
  }
}
