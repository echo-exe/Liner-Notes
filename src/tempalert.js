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
    
    stop() {
        this.wavesurfer.stop();
    }
    
    skipback() {
        this.wavesurfer.skipBackward();
    }
    
    skipforward() {
        this.wavesurfer.skipForward();
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
            <button class="skip-back-button" onClick={()=>{this.skipback()}}>
                Back
            </button>
            <button class="pause-button" onClick={()=>{this.pause()}}>
                Pause
            </button>
            <button class="play-button" onClick={()=>{this.play()}}>
                Play
            </button>
            <button class ="stop-button" onClick={()=>{this.stop()}}>
                Stop
            </button>
            <button class="skip-forward-button" onClick={()=>{this.skipforward()}}>
                Forward
            </button>    
            
            <div class="get-time">
                {this.getCurrentTime()}
            </div>
      </div>
        )
    }
}
export default TempAlert;
