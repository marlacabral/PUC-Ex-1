import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;


// export default function Route() {
//     return (
//         <BrowserRouter>
//              <Route path="/" element={<Home />} />
//         </BrowserRouter>

//     )
// }