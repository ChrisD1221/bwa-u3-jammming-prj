const accessToken ='';
const clientID = 'b09729b09e064bd3985c3b48da756e9b';
const redirectURI = 'http://localhost:3000/';

 const Spotify = {
getAccessToken(){
  if(accessToken){
    return accessToken;
  }
let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
return accessToken;
}
else {
let accessUrl = 'https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}'
  window.location = accessUrl;

       }
  }

search(term){
  return fetch('https://api.spotify.com/v1/search?type=track&q=term',
  {
  headers:{  Authorization: `Bearer ${accessToken}`}
}).then(response => {
  return response.json();
}).then(jsonResponse => {
  if (jsonResponse.tracks) {
    return jsonResponse.tracks.items.map(track => (
        {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            Album: track.album.name,
            URI: track.uri,

        }));
      }
    });
}

savePlaylist(playlistName,trackURIs){
  if(playlistName && trackURIs){
    const accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/me',
    headers:{  Authorization: `Bearer ${accessToken}`},
    {headers: headers},
    let userId = '';
  }).then(response => {
    return response.json();
  }).then(
    jsonResponse => {
userId = jsonResponse.id;
  )
  return fetch('https://api.spotify.com/v1/users/${userId}/playlists',
  {headers: headers
    method: 'POST',
     body: JSON.stringify({name: playlistName}) },
).then(response => {
  return response.json();
}).then(
  jsonResponse => {
playlistID = jsonResponse.id;
)  return fetch('https://api.spotify.com/v1/users/${userId}/playlists/{playlist_id}/tracks',
  {headers: headers
    method: 'POST',
     body: JSON.stringify({name: URI}) },  
).then(response => {
  return response.json();
}).then(
  jsonResponse => {
playlistID = jsonResponse.id;
)
  return ;
}

};

export default Spotify;
