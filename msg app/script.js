var input = document.querySelector(".chat-input input");
var button = document.querySelector(".chat-input button");

var messages = document.querySelector(".chat-messages");

button.addEventListener("click", function() {
  var message = input.value;

  var messageElement = document.createElement("div");
  messageElement.classList.add("message", "my-message");
  messageElement.innerHTML = `
    <p class="message-content">${message}</p>
    <span class="message-time">${getTime()}</span>
  `;

  messages.appendChild(messageElement);

  input.value = "";
});

function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var time = hours + ':' + minutes + ' ' + ampm;
  return time;
}

const hamMenu = document.querySelector('.ham-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
});

