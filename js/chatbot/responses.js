function getBotResponse(input) {
  if (input == "1")
    return "My name's Dean, and I'm aspiring to be a software engineer or a front-end developer in the future! Currently I'm a student pursuing a Diploma in Digital Design and Development, after which i'll likely continue my education towards the University level. My hobbies include playing video games, watching movies and finding ways to make my websites look cooler!";

  else if (input == "2")
    return "I'm able to write programs using PHP, Java and Python, as well as create interactive and aesthetically pleasing websites using CSS and Javascript. I'm also able to design intuitive and visually appealing user interfaces with Photoshop, Illustrator and XD. With all of these skills, I'm able to create well-rounded and engaging digital experiences for a wide number of users.";

  else if (input == "3")
    return "I've been able to create interactive websites, design interfaces, assets and prototypes for mobile applications, as well as create mobile applications themselves. You can view some of those projects in this website, or if you'd like to know more, you can drop me a message.";

  else if (input == "4")
    return "Always! I'm always looking for ways where I can express myself through coding and help others in the process. If you're interested in my skills, don't hesitate to contact me!";

  else if (input == "5")
    return 'You can view the ways you can contact me by going to the ' + '<a href="#contact" class="chat-link">Contact</a> ' + 'section below!';

  else
    return "Sorry, I couldn't understand that. Please type in a number from 1 to 5.";
}