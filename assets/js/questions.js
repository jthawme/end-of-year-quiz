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
    message: "HEY",
    media: `https://source.unsplash.com/random/300x300`,
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
    type: SCRIPT_TYPE.MANUAL,
    reply: REPLY_TYPE.OPTION,
    options: [
      {
        value: ANSWER.IRAN,
        label: "oh yes! yes indeed my friend",
        media: `https://source.unsplash.com/random/500x300`
      },
      {
        value: ANSWER.PRIME_MINISTERS,
        label: "lol nah, its been chill",
        media: `https://source.unsplash.com/random/400x300`
      }
    ]
  }
].map(item => ({
  ...item,
  id: uid()
}));
