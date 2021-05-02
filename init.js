var liffID = '1655771132-9GjLM0Dl';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  liff.permanentLink.setExtraQueryParam('/search?sitesearch=ndhu.edu.tw');
  // 這邊開始寫使用其他功能
  
}).catch(function(error) {
  console.log(error);
});
 