import React, { Component } from "react";

import { Provider as MobXProvider, observer } from "mobx-react";

import Physics from "../logic/Physics";
import Sprite from "../logic/Sprite";
import MarbleList from "./MarbleList";

@observer
class App extends Component {
    componentDiMount() {
        Sprite.loadSprite(() => Physics.startGameLoop());
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Inelastic collisions</h2>
                    <p>Rendered on canvas, built with React and Konva</p>
                </div>
                <div className="App-intro">
                    <MobXProvider physics={Physics} sprite={Sprite}>
                        <MarbleList />
                    </MobXProvider>
                </div>
            </div>
        );
    }
}

export default App;
