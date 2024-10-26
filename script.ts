type Sound = "summer" | "rain" | "winter";

class WeatherSoundsApp {
  private audioElement: HTMLAudioElement;
  private currentSound: Sound | null = null;

  constructor() {
    this.audioElement = new Audio();
    this.audioElement.loop = true;

    this.initVolumeControl();
    this.initButtons();
  }
  private initVolumeControl() {
    const volumeControl = document.querySelector(".volume") as HTMLInputElement;

    volumeControl.addEventListener("input", () => {
      this.audioElement.volume = parseFloat(volumeControl.value);
    });
    this.audioElement.volume = parseFloat(volumeControl.value);
  }
  private initButtons() {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const sound = button.dataset.sound as Sound;
        this.toggleSound(sound, button);
      });
    });
  }

  private toggleSound(sound: Sound, button: HTMLButtonElement) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".button");
    buttons.forEach((item) => {
      item.classList.remove("playing");
      item.classList.remove("pause");
    });
    if (this.currentSound === sound) {
      if (this.audioElement.paused) {
        this.audioElement.play();
        button.classList.add("playing");
      } else {
        this.audioElement.pause();
        button.classList.add("pause");
      }
    } else {
      this.playSound(sound);
      button.classList.add("playing");
    }
  }

  private playSound(sound: Sound) {
    this.audioElement.src = `assets/sounds/${sound}.mp3`;
    this.audioElement.play();

    this.currentSound = sound;
    document.body.className = sound;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new WeatherSoundsApp();
});
