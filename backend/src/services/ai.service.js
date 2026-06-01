// const axios = require("axios");
// const sharp = require("sharp");

// async function generateCaption(
//   imageBuffer
// ) {

//   try {

//     const compressedImage =
//       await sharp(imageBuffer)

//         .resize(512)

//         .jpeg({ quality: 60 })

//         .toBuffer();

//     const response = await axios.post(

//       "https://router.huggingface.co/hf-inference/models/microsoft/resnet-50",

//       compressedImage,

//       {
//         headers: {

//           Authorization:
//             `Bearer ${process.env.HF_TOKEN}`,

//           "Content-Type": "image/jpeg"
//         },

//         timeout: 60000
//       }
//     );

//     console.log(response.data);

//     const labels = response.data
//   .map(item => item.label)
//   .join(", ");

// const caption = `

// ✨ ${labels}



// Mood:
// Cinematic • Chill 

// `;

// return caption;

    

//   } catch (err) {

//     console.log("HF ERROR:");

//     console.log(
//       err.response?.data || err.message
//     );

//     throw err;
//   }
// }

// module.exports = generateCaption;


const axios = require("axios");
const sharp = require("sharp");

async function generateCaption(
  imageBuffer
) {

  try {

    const compressedImage =
      await sharp(imageBuffer)

        .resize(512)

        .jpeg({ quality: 60 })

        .toBuffer();

    const response = await axios.post(

      "https://router.huggingface.co/hf-inference/models/microsoft/resnet-50",

      compressedImage,

      {
        headers: {

          Authorization:
            `Bearer ${process.env.HF_TOKEN}`,

          "Content-Type": "image/jpeg"
        },

        timeout: 60000
      }
    );



    const labels = response.data
      .map(item => item.label.toLowerCase())
      .join(" ");



    // DETECT SCENE

    let scene = "general";



    if (
      labels.includes("cow") ||
      labels.includes("farm") ||
      labels.includes("barn") ||
      labels.includes("animal")
    ) {

      scene = "work";
    }

    else if (
      labels.includes("restaurant") ||
      labels.includes("people") ||
      labels.includes("dining")
    ) {

      scene = "friends";
    }

    else if (
      labels.includes("tree") ||
      labels.includes("mountain") ||
      labels.includes("river")
    ) {

      scene = "nature";
    }

    else if (
      labels.includes("road") ||
      labels.includes("car") ||
      labels.includes("travel")
    ) {

      scene = "travel";
    }



    // CAPTIONS

   const captions = {

  work: [

    "🌾 hard work has its own kind of peace.",

    "🛠️ some days are built on effort, not noise.",

    "☀️ quiet places often build strong people.",

    "🚜 real growth happens in silence.",

    "💪 discipline always leaves a mark.",

    "🌿 honest work never goes unnoticed.",

    "✨ peace feels different after hard work.",

    "🧠 strength is built through ordinary days.",

    "🌤️ simple work, meaningful life.",

    "🔥 effort always shines in the end.",

    "🤎 silence, sweat, and self-respect.",

    "🌻 grounded minds create beautiful lives."
  ],



  friends: [

    "😄 good company makes moments unforgettable.",

    "📸 the best memories are rarely planned.",

    "🤍 small moments become lifelong memories.",

    "✨ friendship makes ordinary days better.",

    "😂 laughing through life together.",

    "🌈 good vibes start with good people.",

    "🎶 every picture holds a story.",

    "🫶 happiness feels lighter when shared.",

    "💫 chaos feels fun with the right people.",

    "🍕 good food, better people.",

    "🖤 some smiles become permanent memories.",

    "🌃 nights feel shorter with real friends."
  ],



  nature: [

    "🌿 peace usually sounds like silence.",

    "☁️ nature always slows the mind down.",

    "🌄 sometimes quiet places say the most.",

    "🌤️ sky above, peace within.",

    "🍃 fresh air fixes more than we think.",

    "🌅 every sunset feels personal somehow.",

    "✨ stillness is underrated.",

    "🌊 calm places heal loud minds.",

    "🌙 nature never tries too hard.",

    "🌱 peace begins where noise ends.",

    "🕊️ slow mornings and softer thoughts.",

    "🌼 there’s beauty in slowing down."
  ],



  travel: [

    "✈️ every road leaves a different memory.",

    "🗺️ new places change perspectives.",

    "📍 collecting moments, not things.",

    "🌍 movement changes the mind.",

    "🚗 the journey matters too.",

    "🌆 life feels bigger outside routine.",

    "🎒 adventure begins with leaving comfort.",

    "🌄 some places stay in your heart forever.",

    "📸 new views, new energy.",

    "🛣️ roads are made for memories.",

    "🌴 escaping routine one trip at a time.",

    "✨ travel leaves stories behind."
  ],



  general: [

    "📸 capturing moments one frame at a time.",

    "✨ ordinary moments often become the best ones.",

    "🤍 some memories deserve to stay forever.",

    "🌙 life feels better when paused for a second.",

    "🖤 not every moment needs explaining.",

    "🎞️ every picture freezes a feeling.",

    "💭 memories look beautiful in hindsight.",

    "🌃 little moments shape big stories.",

    "☕ there’s beauty in everyday life.",

    "🎧 vibing through another beautiful moment.",

    "🌟 sometimes simple moments hit the hardest.",

    "🫶 moments pass, memories stay forever."
  ]
};



    const selectedCaption = captions[scene][

      Math.floor(
        Math.random() *
        captions[scene].length
      )
    ];



    // MOODS

    const moods = {

      work:
        "Grounded • Peaceful • Honest",

      friends:
        "Warm • Happy • Social",

      nature:
        "Calm • Peaceful • Free",

      travel:
        "Adventurous • Open • Cinematic",

      general:
        "Minimal • Reflective • Cinematic"
    };



    // HASHTAGS

    const hashtags = {

      work:
        "#hardwork #rural #peaceful #realmoments",

      friends:
        "#friends #goodvibes #memories #moments",

      nature:
        "#nature #peaceful #serenity #sky",

      travel:
        "#travel #explore #wanderlust #journey",

      general:
        "#photography #moments #life #aesthetic"
    };



    return {

      caption: selectedCaption,

      mood: moods[scene],

      hashtags: hashtags[scene]
    };

  } catch (err) {

    console.log(
      err.response?.data || err.message
    );

    throw err;
  }
}

module.exports = generateCaption;