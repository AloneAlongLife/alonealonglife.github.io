import {ReactNode, Component} from "react";

import "./index.scss";

type propsType = Readonly<{
    status: "minimal" | "title" | "expand",
    name: string,
    rotate: boolean
    children?: ReactNode,
}>;

export default class Background extends Component<propsType> {
    render(): ReactNode {
        const {
            status,
            name,
            rotate,
            children
        } = this.props;
        const isPhone = window.innerHeight / window.innerWidth > 1;
        let className = status;
        className += rotate ? " rotate" : "";
        return (
            <div id="background" className={className}>
                <div className="welcomeBox">
                    <h1>{isPhone ? `${name}'s Website`.replaceAll(" ", "\n") : `${name}'s Website`}</h1>
                    <h2>Welcome</h2>
                </div>
                {children}
            </div>
        );
    }
}
