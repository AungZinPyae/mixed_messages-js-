const mixedMessages = ['Hello', 'Do you want to learn Javascript', 'No, It\s easy to learn it.', 'I never thought I would learn javascript.'];

function randomMsgs () {
    return mixedMessages[Math.floor(Math.random()* mixedMessages.length)];
};

console.log(randomMsgs());