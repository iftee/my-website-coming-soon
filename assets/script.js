const chatBubbleInitialContent = '<div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';

const createChatBubble = () => {
  let newChatBubble = document.createElement('div');
  newChatBubble.classList.add('chat-bubble');
  newChatBubble.innerHTML = chatBubbleInitialContent;
  return newChatBubble;
};

const socialLink = {
  facebook: '<a href="https://www.facebook.com/iftakhar.hasan/" target="_blank" class="facebook"></a>',
  linkedin: '<a href="https://www.linkedin.com/in/iftakharhasan/" target="_blank" class="linkedin"></a>',
  behance: '<a href="https://www.behance.net/iftakhar" target="_blank" class="behance"></a>',
  github: '<a href="https://github.com/iftee" target="_blank" class="github"></a>',
  flickr: '<a href="https://www.flickr.com/photos/iftakharhasan" target="_blank" class="flickr"></a>',
  instagram: '<a href="https://www.instagram.com/iftakhar.hasan/" target="_blank" class="instagram"></a>',
};

const messages = [
  'Hello! I\'m Iftakhar.',
  'Nice to see you here.',
  'I\'m still working on my website.',
  'So please don\'t forget to come back later.',
  'In the meantime, you can connect with me in Facebook or LinkedIn using the following links.',
  socialLink.facebook + socialLink.linkedin,
  'If you want to see my design portfolio, please visit my Behance page using the following link.',
  socialLink.behance,
  'Or if you want to see my codes that are publicly availble, please visit my GitHub page using the following link.',
  socialLink.github,
  'Oh, and if you like photography, you can connect with me in Flickr or Instagram using the following links.',
  socialLink.flickr + socialLink.instagram,
  'Thank you.'
];

const chatBubbles = document.querySelector('.chat-bubbles');

for (let iterator = 0; iterator < messages.length; iterator++) {
  chatBubbles.appendChild(createChatBubble());
}

let chatBubble = document.querySelectorAll('.chat-bubble');

const showNewChatBubble = index => {
  if (typeof index === 'undefined') {
    index = 0;
  }

  if (chatBubble.length > index) {
    chatBubble[index].classList.add('chat-bubble-visible', 'chat-bubble-typing', 'chat-bubble-last');
    setTimeout(() => {
      showNewChatBubble(index + 1);
      chatBubble[index].innerHTML = messages[index];
      chatBubble[index].classList.remove('chat-bubble-typing');

      document.querySelector('#bottomScrollPosition').scrollIntoView(false);

      if (index + 1 < chatBubble.length) {
        chatBubble[index].classList.remove('chat-bubble-last');
      }

      if (index > 0) {
        chatBubble[index - 1].classList.add('chat-bubble-style-adjusted');
      }
    }, 3500);
  }
}

showNewChatBubble();
