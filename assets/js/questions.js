import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

export const SCRIPT_TYPE = {
  AUTOMATIC: "automatic",
  MANUAL: "manual"
};

export const REPLY_TYPE = {
  FROM: "from",
  TO: "to",
  OPTION: "option"
};

export const ANSWER = {
  DEATHS: "deaths",
  PRIME_MINISTERS: "prime-ministers",
  UKRAINE: "ukraine",
  IRAN: "iran",
  CLIMATE_CHANGE: "climate-change"
};

export const ANSWER_LARGE = {
  [ANSWER.DEATHS]: {
    media: `/images/${ANSWER.DEATHS}.jpg`,
    message: `Love em or hate em, it doesn't matter anymore because they're dead. 2022 saw a number of notable deaths, pictured are of course, Queen Elizabeth II which they were willing to admit had died in the end, Gorbachev and the assassinated Shinzo Abe`
  },
  [ANSWER.PRIME_MINISTERS]: {
    media: `/images/${ANSWER.PRIME_MINISTERS}.jpg`,
    message: `What a trio of bellends. The UK furthers its standup career by losing further respect by having a Prime Minister who followed up an actual clown last for only 44 days. At least we have the best looking one now I suppose`
  },
  [ANSWER.UKRAINE]: {
    media: `/images/${ANSWER.UKRAINE}.jpg`,
    message: `The unlawful and, to put it incredibly redunantly, unecessary invasion of Ukraine by Russia looks to go into its second year. Thousands of people dead, because of a lunatic's power trip. The relief effort has been inspiring at times, and I'm sure we could all do more, especially myself`
  },
  [ANSWER.IRAN]: {
    media: `/images/${ANSWER.IRAN}.jpg`,
    message: `The unrest and riots occuring in Iran are a scary story, but I suppose with an edge of hope to them. We are seeing the power of a younger fuelled generation, willing to call out the wrongs of a grandfathered in society. I think its a good thing and the people protesting are beyond brave, in a country that is still willing to execute people.`
  },
  [ANSWER.CLIMATE_CHANGE]: {
    media: `/images/${ANSWER.CLIMATE_CHANGE}.jpg`,
    message: `The continued abuse of the earth by us is rearing its head more and more each year. The UK experienced a record heatwave that they predict could repeat every 3 years and people died. The earth is dying, but the big wigs are making cash while they can.`
  }
};

export const questions = [
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: `Yo pal`,
    typeDelay: 500,
    readDelay: 750
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: `How's it going? checkin in before the end of the year`,
    typeDelay: 750,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: `2022 has been pretty nutty, you think?`,
    typeDelay: 500,
    readDelay: 2500
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: "oh yes! yes indeed my friend"
      },
      {
        value: ANSWER.UKRAINE,
        label: "lol nah, its been chill"
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: ({ lastAnswer }) => {
      if (lastAnswer.value === ANSWER.CLIMATE_CHANGE) {
        return "dang, you felt it too";
      }

      return "okay then, someone is pretty chipper";
    },
    typeDelay: 500,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "lol I know, i'll ask you a 'buzzfeed style quiz' and work out which event from 2022 you were";
    },
    typeDelay: 750,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Sound good? time is of the essence my friend";
    },
    typeDelay: 500,
    readDelay: 2500
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.DEATHS,
        label: "I agree, we are not getting any younger"
      },
      {
        value: ANSWER.IRAN,
        label: "sounds stupid, sure"
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Aight aight, lets go";
    },
    typeDelay: 250,
    readDelay: 1000
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Choose a winter holiday";
    },
    typeDelay: 250,
    readDelay: 1000
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.DEATHS,
        label: "Classic snow, classic house",
        media: `https://source.unsplash.com/ljrQbQoOqhk?w=500`
      },
      {
        value: ANSWER.UKRAINE,
        label: "Reflective cabin",
        media: `https://source.unsplash.com/eWqOgJ-lfiI?w=500`
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: "Winter in the sun",
        media: `https://source.unsplash.com/mR1CIDduGLc?w=500`
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Whats your star sign?";
    },
    typeDelay: 250,
    readDelay: 1000
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.IRAN,
        label: "Aries / Leo / Sagittarius"
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: "Taurus / Virgo / Capricorn"
      },
      {
        value: ANSWER.DEATHS,
        label: "Gemini / Libra / Aquarius"
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        label: "Cancer / Scorpio / Pisces"
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return `I'm one of these: ${lastAnswer.label}`;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: ({ lastAnswer }) => {
      switch (lastAnswer.value) {
        case ANSWER.IRAN:
          return "Oh a fire sign, shows why you are so hot 😜";
        case ANSWER.CLIMATE_CHANGE:
          return "earth sign baybeee";
        case ANSWER.DEATHS:
          return "lol and i thought there was only air between your ears";
        case ANSWER.PRIME_MINISTERS:
        default:
          return "be like water";
      }
    },
    typeDelay: 400,
    readDelay: 2000
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: ({ lastAnswer }) => {
      return "sweet";
    },
    typeDelay: 100,
    readDelay: 1000
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "What did you think of the Minions™️ movie, released nationwide on 1st July 2022?";
    },
    typeDelay: 400,
    readDelay: 2000
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.PRIME_MINISTERS,
        label: "I thought it showed great potential! 🥵"
      },
      {
        value: ANSWER.UKRAINE,
        label: "It was absolutely hilarious 😂"
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: "I haven't seen it, but I pledge to buy it after this quiz! 💯🔥"
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "I agree, Illumination™️ media is truly impeccable";
    },
    typeDelay: 400,
    readDelay: 1400
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Choose a dog outfit";
    },
    typeDelay: 400,
    readDelay: 1400
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.IRAN,
        label: "big pimpin'",
        media: `https://source.unsplash.com/qy0BHykaq0E?w=500`
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: "Streetwear dawg",
        media: `https://source.unsplash.com/oU6KZTXhuvk?w=500`
      },
      {
        value: ANSWER.DEATHS,
        label: "what dog?!",
        media: `https://source.unsplash.com/GVaRGYa_cmk?w=500`
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        label: "bad boy alert",
        media: `https://source.unsplash.com/1Zj-h35UciY?w=500`
      },
      {
        value: ANSWER.UKRAINE,
        label: "lil worker",
        media: `https://source.unsplash.com/PJTfOzSo8fQ?w=500`
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Choose a drink";
    },
    typeDelay: 400,
    readDelay: 1400
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.DEATHS,
        label: "beer"
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        label: "wine"
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: "coffeeeeee"
      },
      {
        value: ANSWER.UKRAINE,
        label: "water is fine thanks"
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: ({ lastAnswer }) => {
      switch (lastAnswer.value) {
        case ANSWER.DEATHS:
          return "yes, lets go drinkin sometime, i miss you!";
        case ANSWER.PRIME_MINISTERS:
          return `mais oui, you have the spirit of the continent in you`;
        case ANSWER.CLIMATE_CHANGE:
          return `"you wouldn't like me before my coffee" LOL!!!1! 😂`;
        case ANSWER.UKRAINE:
        default:
          return `Dang, a cheap date`;
      }
    },
    typeDelay: 400,
    readDelay: 1400
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Pick your favourite 'young sheldon' quote";
    },
    typeDelay: 400,
    readDelay: 1400
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.IRAN,
        label: `"I needed to get on the shuttle so I could escape this ridiculous planet. Spoiler alert, I'm still here." `
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        label: `"In violation of the grooming code, you have a bit of a moustache."`
      },
      {
        value: ANSWER.UKRAINE,
        label: `"Welcome to the church of Mathology. Today I'd like to talk about prime numbers and why they give us joy."`
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "hahahahaha, how tf they come up with this?!";
    },
    typeDelay: 500,
    readDelay: 1800
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "damn, gotta catch my breath haha";
    },
    typeDelay: 400,
    readDelay: 2200
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    media: `https://media.giphy.com/media/jNh71643iqm7T2uiqL/giphy.gif`,
    message: () => {
      return "whoops 😂";
    },
    typeDelay: 400,
    readDelay: 1600
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Choose your favourite movie franchise";
    },
    typeDelay: 450,
    readDelay: 2800
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.DEATHS,
        media: `https://source.unsplash.com/B9MULm2UZIk?w=400`,
        label: `Transformers`
      },
      {
        value: ANSWER.IRAN,
        media: `https://source.unsplash.com/X5WdN60n6yk?w=400`,
        label: `Star Wars`
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        media: `https://source.unsplash.com/JK0l2xvN1fY?w=400`,
        label: `Harry Potter`
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        media: `https://static01.nyt.com/images/2022/12/13/multimedia/13avatar-fx-1-3a70/13avatar-fx-1-3a70-superJumbo.jpg?quality=75&auto=webp`,
        label: `Avatar`
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "And finally, choose what you think the purpose of life is";
    },
    typeDelay: 650,
    readDelay: 2100
  },
  {
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.IRAN,
        label: `Traveling around the world and exploring different cultures`
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        label: `Supporting your community`
      },
      {
        value: ANSWER.CLIMATE_CHANGE,
        label: `Fighting for a social cause like climate change`
      },
      {
        value: ANSWER.DEATHS,
        label: `Being a positive, supportive person for your loved ones`
      },
      {
        value: ANSWER.UKRAINE,
        label: `Building a business that makes a difference in people's lives around the world`
      }
    ]
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.TO,
    media: ({ lastAnswer }) => {
      return lastAnswer.media;
    },
    message: ({ lastAnswer }) => {
      return lastAnswer.label;
    },
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "But who knows I guess?";
    },
    typeDelay: 450,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Okay let me add it up";
    },
    typeDelay: 450,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "You got";
    },
    typeDelay: 250,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    media: ({ result }) => {
      return ANSWER_LARGE[result].media;
    },
    message: ({ result }) => {
      return ANSWER_LARGE[result].message;
    },
    typeDelay: 250,
    readDelay: 5000
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Sorry, not a hilarious result. But thats life";
    },
    typeDelay: 450,
    readDelay: 1500
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "2022 has been a tough year, but I know that I myself continue to be very lucky in many ways and I don't want to take that for granted.";
    },
    typeDelay: 600,
    readDelay: 3200
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Be good to your friends, your loved ones and your family";
    },
    typeDelay: 500,
    readDelay: 1800
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    message: () => {
      return "Make 2023 the best one yet if you can.";
    },
    typeDelay: 500,
    readDelay: 2400
  },
  {
    type: SCRIPT_TYPE.AUTOMATIC,
    reply: REPLY_TYPE.FROM,
    media: `https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy-downsized.gif`,
    message: () => {
      return "Happy new year";
    },
    typeDelay: 500,
    readDelay: 4000
  }
].map(item => ({
  ...item,
  id: uid()
}));
