document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new message element
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');
        messageItem.textContent = messageText;

        // Append the new message to the message list
        document.getElementById('messageList').appendChild(messageItem);

        // Clear the input field
        messageInput.value = "";
    } else {
        alert("Please enter a message!");
    }
});
