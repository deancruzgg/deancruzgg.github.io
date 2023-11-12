var collapsible = document.getElementsByClassName("chatbot-collapsible");
var hasBotMessageExecuted = false;

for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";

      if (!hasBotMessageExecuted) {
        setTimeout(function () {
          firstBotMessage();
          hasBotMessageExecuted = true;
        }, 1000);
      }
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10)
    hours = "0" + hours;

  if (minutes < 10)
    minutes = "0" + minutes;

  let time = hours + ":" + minutes;
  return time;
}

function firstBotMessage() {
  let firstMessage = "Hey there, I'm a bot, here to assist you in navigating this website, or answering any questions you might have!";
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

  let time = getTime();

  $("#chat-timestamp").append(time);

  setTimeout(function () {
    let secondMessage = '<p class="botText"><span>' + 'I can give you more information if you type in the number corresponding to each topic:' + '</span></p>';
    $("#chatbox").append(secondMessage);

    setTimeout(function () {
      let thirdMessage = '<p class="botText"><span>' + '1 - Who am I?' + '</span></p>';
      $("#chatbox").append(thirdMessage);

      setTimeout(function () {
        let fourthMessage = '<p class="botText"><span>' + '2 - What kind of skills do I have?' + '</span></p>';
        $("#chatbox").append(fourthMessage);

        setTimeout(function () {
          let fifthMessage = '<p class="botText"><span>' + '3 - What kind of projects have I done?' + '</span></p>';
          $("#chatbox").append(fifthMessage);
          document.getElementById("userInput").scrollIntoView(true);

          setTimeout(function () {
            let sixthMessage = '<p class="botText"><span>' + '4 - Am I open to collaborations?' + '</span></p>';
            $("#chatbox").append(sixthMessage);
            document.getElementById("userInput").scrollIntoView(true);

            setTimeout(function () {
              let seventhMessage = '<p class="botText"><span>' + '5 - Ways to contact me' + '</span></p>';
              $("#chatbox").append(seventhMessage);
              document.getElementById("userInput").scrollIntoView(true);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);

  document.getElementById("userInput").scrollIntoView(false);
}

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
  $("#chatbox").append(botHtml);

  document.getElementById("chatbar-bottom").scrollIntoView(true);
}

function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = " ";
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chatbar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000)
}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chatbar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function heartButton() {

}

$("#textInput").keypress(function (e) {
  if (e.which == 13)
    getResponse();
});