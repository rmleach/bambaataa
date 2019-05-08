import * as React from 'react'
import Instrument from './Instrument'

export default class TransportComponent extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Bambaataa!!!</h1>
        <Instrument></Instrument>
      </div>
    )
  }
}
