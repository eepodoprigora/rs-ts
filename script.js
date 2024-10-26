var WeatherSoundsApp = /** @class */ (function () {
    function WeatherSoundsApp() {
        this.currentSound = null;
        this.audioElement = new Audio();
        this.audioElement.loop = true;
        this.initVolumeControl();
        this.initButtons();
    }
    WeatherSoundsApp.prototype.initVolumeControl = function () {
        var _this = this;
        var volumeControl = document.querySelector(".volume");
        volumeControl.addEventListener("input", function () {
            _this.audioElement.volume = parseFloat(volumeControl.value);
        });
        this.audioElement.volume = parseFloat(volumeControl.value);
    };
    WeatherSoundsApp.prototype.initButtons = function () {
        var _this = this;
        var buttons = document.querySelectorAll(".button");
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var sound = button.dataset.sound;
                _this.toggleSound(sound, button);
            });
        });
    };
    WeatherSoundsApp.prototype.toggleSound = function (sound, button) {
        var buttons = document.querySelectorAll(".button");
        buttons.forEach(function (item) {
            item.classList.remove("playing");
            item.classList.remove("pause");
        });
        if (this.currentSound === sound) {
            if (this.audioElement.paused) {
                this.audioElement.play();
                button.classList.add("playing");
            }
            else {
                this.audioElement.pause();
                button.classList.add("pause");
            }
        }
        else {
            this.playSound(sound);
            button.classList.add("playing");
        }
    };
    WeatherSoundsApp.prototype.playSound = function (sound) {
        this.audioElement.src = "assets/sounds/".concat(sound, ".mp3");
        this.audioElement.play();
        this.currentSound = sound;
        document.body.className = sound;
    };
    return WeatherSoundsApp;
}());
document.addEventListener("DOMContentLoaded", function () {
    new WeatherSoundsApp();
});
