//~! This is not logged when worker is not messaged - worker can communicate only using browser(postMessage)
console.log('Worker Started');

onmessage = function (message) {
  console.log('Worker', message);
  postMessage(message.data);
  postMessage('Worker messaged');
};
