import React from 'react'

//  Internal Components
import Particles from 'particlesjs'

import './TrackAnalysis.scss'
import TrackTable from './TrackTable';
import TrackListGraph from './TrackListGraph';

export default class TrackAnalysis extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            track_data: this.props.track_data
        }

        this.sortBy = this.sortBy.bind(this)
    }

    /*  Table Functions */
    //TODO: If time allows
    toggleColors = () => {

    }

    sortBy = (type) => {
        console.log(`Sorting by ${type}`)

        this.setState({
            track_data:
                this.props.track_data.sort((low, high) => {
                    if (typeof low[type] === 'string') return ('' + low[type]).localeCompare(high[type]);
                    return low[type] - high[type]
                })
        })
    }

    render = () => {

        // Load background
        window.onload = function () {
            Particles.init({
                selector: '.background-particles-alt'
            });
        };

        return (
            <div className='App'>
                <header className="App-header" >
                    <p>
                        Let's learn about your music!
                    </p>
                </header>
                <div className='App-body'>
                    <TrackTable track_list={this.state.track_data} sortBy={this.sortBy} />
                    <TrackListGraph />
                    <canvas className="background-particles-alt"></canvas>
                    <script src={Particles}></script>
                </div>

            </div>
        );
    }
}