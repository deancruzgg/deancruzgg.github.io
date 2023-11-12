function getBotResponse(input) {
  if (input == "1") 
    return "You typed 1!";

  else if (input == "2")
    return "You typed 2!";

  else if (input == "3")
    return 'You can view the ways you can contact me by going to the ' + '<a href="#contact" class="chat-link">Contact</a> ' + 'section below!';

  else
    return "Sorry, I couldn't understand that. Please try again.";
}