class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript OOP Tutorial", "Houssam", 600);
video1.watch();

const video2 = new Video("FPV Tinywhoop Freestyle", "Alex", 180);
video2.watch();

const videosData = [
  { title: "React Crash Course", uploader: "Sarah", time: 1200 },
  { title: "CSS Grid in 10 Minutes", uploader: "Karim", time: 600 },
  { title: "Node.js API Setup", uploader: "Youssef", time: 950 },
  { title: "Git & GitHub Basics", uploader: "Salma", time: 450 },
  { title: "3D Printing Tips", uploader: "Omar", time: 720 }
];

const videoInstances = [];

videosData.forEach((data) => {
  const newVideo = new Video(data.title, data.uploader, data.time);
  videoInstances.push(newVideo);
  newVideo.watch();
});