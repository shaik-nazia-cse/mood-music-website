const videoMap = {
  happy: "./videos/happy_1.mp4",
  sad: "./videos/sad_1.mp4",
  party: "./videos/party_1.mp4",
  focus: "./videos/focus_cloud1.mp4",
  chill: "./videos/chill_mood1.mp4"
};

const songsDB = {
  happy: {
    English: [
      { title: "Sunny Smile ☀️", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Good Vibes 🎶", url: "https://www.youtube.com/embed/9bZkp7q19f0" },
      { title: "Shine Bright 🌈", url: "https://www.youtube.com/embed/450p7goxZqg" }
    ],
    Hindi: [
      { title: "Khushi Ka Gaana 🎶", url: "https://www.youtube.com/embed/A8n77R2V3Wc" },
      { title: "Phir Se Ud Chala 💫", url: "https://www.youtube.com/embed/XWJrPzAUzAs" },
      { title: "Dil Dhadakne Do 💖", url: "https://www.youtube.com/embed/q6D1MZPD0CQ" }
    ]
  },
  sad: {
    English: [
      { title: "Lonely Road 💔", url: "https://www.youtube.com/embed/d-diB65scQU" },
      { title: "Someone Like You 🎧", url: "https://www.youtube.com/embed/hLQl3WQQoQ0" },
      { title: "Let Her Go 🌧️", url: "https://www.youtube.com/embed/RBumgq5yVrA" }
    ],
    Hindi: [
      { title: "Yaadein 🌧️", url: "https://www.youtube.com/embed/LhVfE-c_S34" },
      { title: "Channa Mereya 💔", url: "https://www.youtube.com/embed/284Ov7ysmfA" },
      { title: "Agar Tum Saath Ho 💫", url: "https://www.youtube.com/embed/xRb8hxwN5zc" }
    ]
  },
  party: {
    English: [
      { title: "Dance All Night 🎧", url: "https://www.youtube.com/embed/e_Z61e5n21s" },
      { title: "Uptown Funk 💃", url: "https://www.youtube.com/embed/OPf0YbXqDm0" },
      { title: "Levitating ✨", url: "https://www.youtube.com/embed/TUVcZfQe-Kw" }
    ],
    Hindi: [
      { title: "Nach Lo 🔥", url: "https://www.youtube.com/embed/yW7tGqH8Sfw" },
      { title: "Kar Gayi Chull 🎉", url: "https://www.youtube.com/embed/AULG4MoYxQk" },
      { title: "Bom Diggy Diggy 💥", url: "https://www.youtube.com/embed/bvC_0foemLY" }
    ]
  },
  focus: {
    English: [
      { title: "Deep Focus 🧘", url: "https://www.youtube.com/embed/5qap5aO4i9A" },
      { title: "Lo-Fi Beats ☁️", url: "https://www.youtube.com/embed/jfKfPfyJRdk" },
      { title: "Calm Study Flow 📚", url: "https://www.youtube.com/embed/7NOSDKb0HlU" }
    ],
    Hindi: [
      { title: "Shanti Sur 🎵", url: "https://www.youtube.com/embed/6iYh83eP_F0" },
      { title: "Man Ki Shaanti 🕊️", url: "https://www.youtube.com/embed/o7Zy_PkW49E" },
      { title: "Meditation Vibes 🪷", url: "https://www.youtube.com/embed/JrKqaUHDSTQ" }
    ]
  },
  chill: {
    English: [
      { title: "Lo-Fi Sunset 🌅", url: "https://www.youtube.com/embed/DWV76nS6e2M" },
      { title: "Beach Breeze 🌴", url: "https://www.youtube.com/embed/5yx6BWlEVcY" },
      { title: "Coffee Lo-Fi ☕", url: "https://www.youtube.com/embed/lTRiuFIWV54" }
    ],
    Hindi: [
      { title: "Shaam Ki Chai 🍵", url: "https://www.youtube.com/embed/hT0oV9I13H8" },
      { title: "Sukoon Wale Pal 🌙", url: "https://www.youtube.com/embed/b7yp8oXCKcA" },
      { title: "Raat Ki Shanti 🌌", url: "https://www.youtube.com/embed/YykjpeuMNEk" }
    ]
  },
  rain: {
    English: [
      { title: "Rainy Night 🌧️", url: "https://www.youtube.com/embed/9UMxZofMNbA" },
      { title: "Soft Rain Jazz 🎷", url: "https://www.youtube.com/embed/djV11Xbc914" },
      { title: "Thunder Chill 🌩️", url: "https://www.youtube.com/embed/q76bMs-NwRk" }
    ],
    Hindi: [
      { title: "Baarishen ☔", url: "https://www.youtube.com/embed/dJzF8O9e7TA" },
      { title: "Pehli Baarish 🌦️", url: "https://www.youtube.com/embed/xv7kYXKpXqg" },
      { title: "Rim Jhim Rim Jhim 🎵", url: "https://www.youtube.com/embed/0_UBRvmfUmU" }
    ]
  },
  motivation: {
    English: [
      { title: "Rise Up 💪", url: "https://www.youtube.com/embed/kNw8V_Fkw28" },
      { title: "Eye of the Tiger 🥊", url: "https://www.youtube.com/embed/btPJPFnesV4" },
      { title: "Stronger 💥", url: "https://www.youtube.com/embed/34Na4j8AVgA" }
    ],
    Hindi: [
      { title: "Lakshya 🏆", url: "https://www.youtube.com/embed/qy8ZxkL_4K0" },
      { title: "Zinda 💫", url: "https://www.youtube.com/embed/yvUwn8AFdQc" },
      { title: "Brothers Anthem 🔥", url: "https://www.youtube.com/embed/FN7ALfpGxiI" }
    ]
  },
  dj: {
    English: [
      { title: "EDM Drop ⚡", url: "https://www.youtube.com/embed/IcrbM1l_BoI" },
      { title: "Bass Boosted 🔊", url: "https://www.youtube.com/embed/7wtfhZwyrcc" },
      { title: "Neon Nights 🎆", url: "https://www.youtube.com/embed/60ItHLz5WEA" }
    ],
    Hindi: [
      { title: "DJ Wale Babu 🎧", url: "https://www.youtube.com/embed/dBlh0s2pF2A" },
      { title: "Aankh Marey 💃", url: "https://www.youtube.com/embed/cPv-fW3mUKY" },
      { title: "High Rated Gabru 🔥", url: "https://www.youtube.com/embed/32VoaK2xvko" }
    ]
  },
    road: {
    English: [
      { title: "EDM Drop ⚡", url: "https://www.youtube.com/embed/IcrbM1l_BoI" },
      { title: "Bass Boosted 🔊", url: "https://www.youtube.com/embed/7wtfhZwyrcc" },
      { title: "Neon Nights 🎆", url: "https://www.youtube.com/embed/60ItHLz5WEA" }
    ],
    Hindi: [
      { title: "DJ Wale Babu 🎧", url: "https://www.youtube.com/embed/dBlh0s2pF2A" },
      { title: "Aankh Marey 💃", url: "https://www.youtube.com/embed/cPv-fW3mUKY" },
      { title: "High Rated Gabru 🔥", url: "https://www.youtube.com/embed/32VoaK2xvko" }
    ]
  },
    lofi: {
    English: [
      { title: "EDM Drop ⚡", url: "https://www.youtube.com/embed/IcrbM1l_BoI" },
      { title: "Bass Boosted 🔊", url: "https://www.youtube.com/embed/7wtfhZwyrcc" },
      { title: "Neon Nights 🎆", url: "https://www.youtube.com/embed/60ItHLz5WEA" }
    ],
    Hindi: [
      { title: "DJ Wale Babu 🎧", url: "https://www.youtube.com/embed/dBlh0s2pF2A" },
      { title: "Aankh Marey 💃", url: "https://www.youtube.com/embed/cPv-fW3mUKY" },
      { title: "High Rated Gabru 🔥", url: "https://www.youtube.com/embed/32VoaK2xvko" }
    ]
  },
    calm: {
    English: [
      { title: "EDM Drop ⚡", url: "https://www.youtube.com/embed/IcrbM1l_BoI" },
      { title: "Bass Boosted 🔊", url: "https://www.youtube.com/embed/7wtfhZwyrcc" },
      { title: "Neon Nights 🎆", url: "https://www.youtube.com/embed/60ItHLz5WEA" }
    ],
    Hindi: [
      { title: "DJ Wale Babu 🎧", url: "https://www.youtube.com/embed/dBlh0s2pF2A" },
      { title: "Aankh Marey 💃", url: "https://www.youtube.com/embed/cPv-fW3mUKY" },
      { title: "High Rated Gabru 🔥", url: "https://www.youtube.com/embed/32VoaK2xvko" }
    ]
  },
};


// Elements
const bgVideo = document.getElementById("bgVideo");
const moodBtns = document.querySelectorAll(".mood-btn");
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("songModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");
const langContainer = document.getElementById("langContainer");
const songList = document.getElementById("songList");

let currentMood = null;

function setBgVideo(src) {
  bgVideo.style.opacity = 0;
  setTimeout(() => {
    bgVideo.src = src;
    bgVideo.load();
    bgVideo.play();
    bgVideo.style.opacity = 1;
  }, 300);
}

function showSongs(mood) {
  modal.classList.remove("hidden");
  modalTitle.textContent = mood.charAt(0).toUpperCase() + mood.slice(1) + " Songs";
  langContainer.innerHTML = "";
  songList.innerHTML = "";

  const langs = Object.keys(songsDB[mood]);
  langs.forEach(lang => {
    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.onclick = () => showSongsByLang(mood, lang);
    langContainer.appendChild(btn);
  });
}

function showSongsByLang(mood, lang) {
  songList.innerHTML = "";
  songsDB[mood][lang].forEach(s => {
    const li = document.createElement("li");
    li.textContent = s.title;
    li.onclick = () => window.open(s.url, "_blank");
    songList.appendChild(li);
  });
}

moodBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.dataset.mood;
    currentMood = mood;
    setBgVideo(videoMap[mood]);
    showSongs(mood);
  });
});

cards.forEach(card => {
  card.addEventListener("click", () => {
    const theme = card.dataset.theme;
    showSongs(theme);
  });
});

modalClose.onclick = () => modal.classList.add("hidden");
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });
