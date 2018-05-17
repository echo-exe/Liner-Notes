import React, { Component } from 'react';


class TempAlert extends Component {
    componentDidMount() {
        this.wavesurfer = window.WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });

        this.wavesurfer.load('assets/atlas-shells.mp3');
        this.wavesurfer.on('ready', () => {
        this.wavesurfer.play();
        setInterval(()=>{
            console.log ("ayo wassup")
            this.setState({
                currentTime: this.wavesurfer.getCurrentTime()
            })
        }, 1000)
        });
    }

    pause() {
        this.wavesurfer.pause();
    }
    
    play() {
        this.wavesurfer.play();
    }
    
    getCurrentTime() {
   if (this.state) {
       return this.state.currentTime
   }
   else {
       return ""
   }
    }

    render() {
        return (
        <div>
            <div id="waveform"></div>
            <button class="pause-button" onClick={()=>{this.pause()}}>
                Pause
            </button>
            <button class="play-button" onClick={()=>{this.play()}}>
                Play
            </button>
            <div class="get-time">
                {this.getCurrentTime()}
            </div>
      </div>
        )
    }
}
export default TempAlert;
