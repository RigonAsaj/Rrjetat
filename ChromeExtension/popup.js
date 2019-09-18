
const setIGInfo = info => {
    
    document.getElementById('header').textContent=info.header;
    document.getElementById('photo').src=info.photo;
    document.getElementById('posts').textContent=info.posts;
    document.getElementById('followers').textContent=info.followers;
    document.getElementById('following').textContent=info.following;
    document.getElementById('bio').textContent=info.bio;
  };
  
  
  window.addEventListener('DOMContentLoaded', () => {
    
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
     
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'IGInfo'},
          setIGInfo);
    });
  });