import {ReactNode, Component} from "react";

import "./index.scss";

type propsType = Readonly<{
    status: "minimal" | "title" | "expand",
    name: string,
    children?: ReactNode,
}>;

export default class Background extends Component<propsType> {
    render(): ReactNode {
        const {status, name, children} = this.props;
        const isPhone = window.innerHeight / window.innerWidth > 1;
        return (
            <div id="background" className={status} >
                <div className="welcomeBox">
                    <h1>{isPhone ? `${name}'s Website`.replaceAll(" ", "\n") : `${name}'s Website`}</h1>
                    <h2>Welcome</h2>
                </div>
                {children}
            </div>
        );
    }
}
