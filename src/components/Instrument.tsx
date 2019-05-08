import * as React from 'react';
import { Kick } from '../engines/kick';
import {Transport } from 'tone';

export default class Instrument extends React.Component<any, any> {
  private kick: Kick;
  private ctx: AudioContext;
  private loopId: number;

  constructor(props: any) {
    super(props);
    this.ctx = new AudioContext;
    this.sound = new Kick(this.ctx);
    Transport.loop = true;
    Transport.loopEnd = '1m'
  }

  createLoop = () => {
    Transport.clear(this.loopId);
    const loop = (time: number) => {
      this.kick.trigger(time);
      this.kick.trigger(time + 0.5);
      this.kick.trigger(time + 1);
      this.kick.trigger(time + 1.5);
    }
    this.loopId = Transport.schedule(loop, '0');
  }

  public handleClick = () => {
    this.createLoop();
    Transport.start();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Kick
        </button>
      </div>
    )
  }
}