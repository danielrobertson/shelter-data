const firebase = require("firebase-admin");
const serviceAccount = require("./firebase-config.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://testproj-187418.firebaseio.com"
});

const db = firebase.firestore();
// db
//   .collection("animals")
//   .doc("A767004")
//   .get()
//   .then(doc => {
//     console.log(toString(doc));
//   })
//   .catch(err => console.log("Error " + err));

const data = [
  {
    id: "A642712",
    name: "Patches",
    dob: "January 1, 2010",
    sex: "f",
    kennel: "514",
    weight: 120,
    intake_date: "March 3, 2018",
    energy_level: "blue",
    dog_friendly: true,
    cat_friendly: false,
    house_trained: true,
    surgery_date: "December 1, 2017",
    attributes: ["J", "RR", "SP", "TM"],
    notes:
      "Meet Patches! She's dancing right into the best kind of rain showers, the fun kind! She's a water baby and speaking of babies, she loves kids! She wishes she may, wishes she might, have her very own human kids one day! pretty please!! She's best as the only animal entertainer in the home and… entertain she will! Grant her the limelight and she'll charm and delight.",
    photo_urls: [
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31417121_10216322827250457_4750749504624394240_o.jpg?alt=media&token=590137ae-91b6-4ae4-aac2-da3abe0c7d76",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31417158_10216322832570590_1538666257060986880_o.jpg?alt=media&token=25a0917f-08bf-44a5-99ec-7e503b586539",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31433668_10216322838850747_5075521217717338112_o.jpg?alt=media&token=9d672971-5731-466a-950c-210f48b0377d",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31435302_10216322830010526_1705176409640534016_o.jpg?alt=media&token=1e5515a0-3b0d-4859-bee5-55175c6837a4",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31444826_10216322832290583_5300734609636458496_o.jpg?alt=media&token=5441f755-6cea-492f-b338-c08a4dc77dd6",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31444974_10216322825650417_1001375838425317376_o.jpg?alt=media&token=8f0fc033-ccae-438e-8af1-0da55a0e28a3",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/patches%2F31486261_10216322840330784_8996402991154069504_o.jpg?alt=media&token=8ba46f87-6188-4154-ac8e-b218fca8db35"
    ],
    profile_active: true
  },
  {
    id: "A771016",
    name: "Beasley",
    dob: "January 1, 2013",
    sex: "m",
    kennel: "033",
    weight: 80,
    intake_date: "March 3, 2018",
    energy_level: "green",
    dog_friendly: true,
    cat_friendly: false,
    house_trained: true,
    surgery_date: "September 1, 2013",
    attributes: [
      "EA",
      "ER",
      "GS",
      "H",
      "HT",
      "J",
      "LB",
      "LLW",
      "LW",
      "LWO",
      "M",
      "RR",
      "SP",
      "TM"
    ],
    notes:
      "Beasley is such a goof. He loves spending time with old and new friends, and can’t wait to show you he can sit (hope you brought a treat!). He walks well on a leash and also loves playing fetch and spending time with his humans in the play yard. ",
    photo_urls: [
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/beasley%2F31945741_10216381656561153_8447328805755813888_o.jpg?alt=media&token=ceb5656e-b086-49f4-bc6b-04c24554d56a",
      "http://petharbor.com/get_image.asp?RES=Detail&ID=A769824&LOCATION=ASTN",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/beasley%2F31945757_10216381658521202_3638984498361663488_o.jpg?alt=media&token=14cee573-bcb1-4bb0-8c54-fefd1b548a18",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/beasley%2F31947733_10216381656761158_9017324137630138368_o.jpg?alt=media&token=8e32d7fc-7b18-4452-aacc-7d9252f54722",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/beasley%2F31949704_10216381656681156_5528681653750202368_o.jpg?alt=media&token=0e5e6785-6309-4c1b-9a36-5e4829db4b29",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/beasley%2F31959521_10216381659281221_8595647989425373184_o.jpg?alt=media&token=2f869bb5-7303-48e2-85d4-cbd124d3b26e"
    ],
    profile_active: true
  },
  {
    id: "A770990",
    name: "McKenzie",
    dob: "January 30, 2015",
    sex: "f",
    kennel: "440",
    weight: 70,
    intake_date: "March 3, 2018",
    energy_level: "blue",
    dog_friendly: true,
    cat_friendly: false,
    house_trained: true,
    surgery_date: "November 1, 2013",
    attributes: ["EA", "ER"],
    notes:
      "Makenzie is an energetic, wiggly puppy looking for her forever playmate! Her favorite activities include going for walks, playing fetch in the yard, then taking a nap... and doing it all over again. ",
    photo_urls: [
      "http://petharbor.com/get_image.asp?RES=Detail&ID=A770990&LOCATION=ASTN"
    ],
    profile_active: true
  },
  {
    id: "A768706",
    name: "Buttercup",
    dob: "January 30, 2016",
    sex: "f",
    kennel: "044",
    weight: 70,
    intake_date: "March 3, 2018",
    energy_level: "orange",
    dog_friendly: false,
    cat_friendly: true,
    house_trained: true,
    surgery_date: "November 1, 2017",
    attributes: ["M", "RR", "SP", "TM"],
    notes:
      "Buttercup is a sweet silly girl who is cautious of new people at first, but once she knows someone she’s their BFF for life. She is wiggly in her kennel and excited to see volunteers who come to take her for walks. She also loves to lay in the grass and just chill out. ",
    photo_urls: [
      "http://petharbor.com/get_image.asp?RES=Detail&ID=A768706&LOCATION=ASTN",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/buttercup%2F32931301_10216488830200427_1359254048494059520_o.jpg?alt=media&token=12ce16bc-4c0a-463c-9a97-9ffd406fd6ca",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/buttercup%2F32962645_10216488829400407_1643923845217779712_o.jpg?alt=media&token=f3b6c278-c06e-46ed-97f0-d9440b4dd193",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/buttercup%2F33027687_10216488829200402_4466450105880281088_o.jpg?alt=media&token=1f80768c-8139-4996-bde9-f8826893e682"
    ]
  },
  {
    id: "A767004",
    name: "Hammy",
    dob: "January 30, 2016",
    sex: "m",
    kennel: "508",
    weight: 100,
    intake_date: "March 3, 2018",
    energy_level: "blue",
    dog_friendly: true,
    cat_friendly: true,
    house_trained: true,
    surgery_date: "December 1, 2017",
    attributes: ["J", "RR", "SP", "TM"],
    notes:
      "Hammy is a fun and silly boy who loves to play fetch. He has a great smile . . . and even better ears. He loves to stroll with his humans and walks well on a leash.",
    photo_urls: [
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/hammy%2F31945081_10216381642600804_6698850866549489664_o.jpg?alt=media&token=da8099b3-ad44-440c-be56-f9518a0433a4",
      "http://petharbor.com/get_image.asp?RES=Detail&ID=A767004&LOCATION=ASTN",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/hammy%2F31957789_10216381643640830_6650272235221155840_o.jpg?alt=media&token=d9b98f1b-90f7-4451-8834-813e997df90b"
    ],
    profile_active: true
  },
  {
    id: "A757802",
    name: "Sandor",
    dob: "January 30, 2016",
    sex: "m",
    kennel: "511",
    weight: 100,
    intake_date: "March 3, 2018",
    energy_level: "blue",
    dog_friendly: true,
    cat_friendly: true,
    house_trained: true,
    surgery_date: "December 1, 2017",
    attributes: ["J", "TM"],
    notes:
      "I am a brown and black, neutered male, who looks like a German Shepherd Dog mix.",
    photo_urls: [
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/sandor%2F29749263_587880094903309_470830692489793525_o.jpg?alt=media&token=2bc5aa94-2a93-499b-9885-f737c5d53f71",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/sandor%2F29792580_587880118236640_7647887354089224375_n.jpg?alt=media&token=6cd08297-3f91-44f5-b730-afaa5134f651",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/sandor%2F32670243_10156577346328714_1377417138771329024_n.jpg?alt=media&token=eed6b73b-d42b-479f-a6aa-4247fa5c0438",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/sandor%2F22815493_10156013489033714_5852368397999775316_n.jpg?alt=media&token=ad6cf5ac-9052-4ba8-9fdd-205e8dca9858",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/sandor%2F32740868_10156577346338714_630288057005768704_n.jpg?alt=media&token=4b20cead-6fbb-4ff0-8bd6-d5505a26ac9d"
    ],
    profile_active: true
  },
  {
    id: "A619451",
    name: "Toby",
    dob: "January 30, 2012",
    sex: "m",
    kennel: "509",
    weight: 100,
    intake_date: "February 28, 2018",
    energy_level: "blue",
    dog_friendly: true,
    cat_friendly: true,
    house_trained: true,
    surgery_date: "December 1, 2017",
    attributes: ["J", "RR", "SP", "TM"],
    notes:
      "Toby is a well-seasoned gentleman. He was adopted from us as a puppy, and sadly returned to us 6 years later after the family had kids. He doesn't like the shelter very much, so he's hoping a foster or adopter comes to spring him out soon.",
    photo_urls: [
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/toby%2F32936921_10216488637435608_5116650868220887040_o.jpg?alt=media&token=04fa0690-478b-4c2c-a80c-f4d020b2c385",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/toby%2F30716121_10156494849263714_5357725904713413080_n.jpg?alt=media&token=e87a8ad5-3930-49ca-b658-1f3bce79bcd9",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/toby%2F32947062_10216488635715565_203464583770275840_o.jpg?alt=media&token=a66112a6-58fc-4def-a500-a87e5a8d83ff",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/toby%2F33020314_10216488639795667_4015508583096516608_o.jpg?alt=media&token=248212b7-2563-4c86-a809-a4a8f2de06ae",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/toby%2F33037483_10216488637355606_1037840716358746112_o.jpg?alt=media&token=0a1ae936-fed8-4493-8e63-a903c835158b",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/toby%2F33037483_10216488637355606_1037840716358746112_o.jpg?alt=media&token=0a1ae936-fed8-4493-8e63-a903c835158b"
    ],
    profile_active: true
  },
  {
    id: "A768637",
    name: "Donnie",
    dob: "January 30, 2016",
    sex: "m",
    kennel: "510",
    weight: 90,
    intake_date: "March 23, 2018",
    energy_level: "blue",
    dog_friendly: true,
    cat_friendly: true,
    house_trained: true,
    surgery_date: "December 1, 2017",
    attributes: ["J", "RR", "SP", "TM"],
    notes:
      "I am a red and white, neutered male, who looks like a Pit Bull Terrier mix",
    photo_urls: [
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/donny%2F33784858_10216554780009131_5378057545816473600_o.jpg?alt=media&token=3ffea2c1-c8f4-4af1-badb-1928ed6f39d2",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/donny%2F33848347_10216554780409141_1696991834061930496_o.jpg?alt=media&token=bf5b8e8b-5bd1-4f9e-b546-404a314ff2e5",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/donny%2F33893755_10216554776889053_1165453308643508224_o.jpg?alt=media&token=7a50de3d-9d9b-43e0-a3b9-086411ee3db5",
      "https://firebasestorage.googleapis.com/v0/b/testproj-187418.appspot.com/o/donny%2F33763571_10216554773728974_5732960911212150784_o.jpg?alt=media&token=cf06aae9-7193-47db-bc97-47914bffbbe9"
    ],
    profile_active: true
  }
];

data.forEach(doc => {
  db
    .collection("animals")
    .doc(doc.id)
    .set(doc)
    .then(res => {
      console.log("Document successfully written!");
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });
});

function toString(data) {
  return JSON.stringify(data, null, 2);
}
