import React, { useState } from 'react';
import { stringifyWithCircular } from './utils';

/**
 *
 * @typedef {Object} Config
 * @property {boolean} [toConsole] - name of the component
 * @property {boolean} [toDashboard] - name of the component
 */

/**
 *
 * @param {React.Component} Component
 * @param {Config} Config
 * @returns
 */
export default function withPropertyDashboard(Component, config = {}) {
    function MonitoredComponent(props) {
        config.toConsole && console.log('props', props);
        return (
            <>
                <Component {...props} />
                {config.toDashboard && <PropertyDashboard properties={props} />}
            </>
        );
    }
    return MonitoredComponent;
}

const STEP = 100;

function PropertyDashboard({ properties }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const moveDashboard = (dx, dy) => {
        const newPosition = {
            x: position.x + dx,
            y: position.y + dy,
        };

        setPosition(newPosition);
    };

    return (
        <div className="property-dashboard" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <h1>Property Dashboard</h1>
            <div>
                {stringifyWithCircular(properties)}
            </div>
            <div className="controls">
                <button onClick={() => moveDashboard(0, -STEP)}>Up</button>
                <button onClick={() => moveDashboard(0, STEP)}>Down</button>
                <button onClick={() => moveDashboard(-STEP, 0)}>Left</button>
                <button onClick={() => moveDashboard(STEP, 0)}>Right</button>
            </div>
            <style>
                {`
          .property-dashboard {
            position: absolute;
            background-color: white;
            border: 1px solid #ccc;
            padding: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            user-select: none;
            transition: transform 0.3s ease-in-out;
          }

          .controls {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }

          .controls button {
            margin: 5px;
          }
        `}
            </style>
        </div>
    );
}

