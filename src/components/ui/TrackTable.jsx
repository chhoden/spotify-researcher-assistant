import React from 'react'

import './TrackTable.scss'

function TrackTable(props) {

    // Generates Red-Green color based on track's 'energy' value.
    function determineStrengthColor(nrg_val) {
        const green = 120

        var hue = green * (1 - nrg_val)

        // Return a CSS HSL string
        return 'hsl(' + hue + ', 100%, 30%)';
    }

    // Table of tracks featuring five details as listed below.
    return (
        <table id='track-table'>
            <thead>
                <th>
                    <button type='sort' onClick={() => props.sortBy('artist')}>
                        Artist
                    </button>
                </th>
                <th>
                    <button type='sort' onClick={() => props.sortBy('title')}>
                        Title
                    </button>
                </th>
                <th>
                    <button type='sort' onClick={() => props.sortBy('energy')}>
                        Energy
                    </button>
                </th>
                <th>
                    <button type='sort' onClick={() => props.sortBy('valence')}>
                        Valence
                    </button>
                </th>
                <th>
                    <button type='sort' onClick={() => props.sortBy('duration_ms')}>
                        Seconds
                    </button>
                </th>
            </thead>
            <tbody>
                {
                    props.track_list.map(track =>
                        (
                            <tr className="track-table-item"
                                style={{ backgroundColor: determineStrengthColor(track.energy) }}>
                                <td>{track.artist}</td>
                                <td>{track.title}</td>
                                <td>{track.energy}</td>
                                <td>{track.valence}</td>
                                <td>{Math.floor((track.duration_ms / 1000))}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default TrackTable