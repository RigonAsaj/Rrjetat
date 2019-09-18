chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
 
    if ((msg.from === 'popup') && (msg.subject === 'IGInfo')) {
      var IGinfo = {
        header: document.getElementsByTagName('h1')[0].innerText,
        photo: document.getElementsByTagName('img')[0].src,
        posts:document.querySelectorAll('.g47SY ')[0].innerText,
        followers:document.querySelectorAll('.g47SY ')[1].innerText,
        following:document.querySelectorAll('.g47SY ')[2].innerText,
        bio: document.getElementsByTagName('h1')[1].innerText
      };
      response(IGinfo);
    }
  });