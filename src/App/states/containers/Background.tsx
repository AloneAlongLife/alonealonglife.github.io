import { ReactNode, Component } from "react";

import Background from "../../components/Background";

function getStatus(statusCode: number): "minimal" | "title" | "expand" {
    switch (statusCode) {
        case 1:
            return "title";
        case 2:
            return "expand";
        case 0:
        default:
            return "minimal";
    }
};

type propsType = Readonly<{
    ready: boolean,
    name: string,
    children?: ReactNode,
}>;
type stateType = Readonly<{
    statusCode: number,
}>;

export default class BackgroundContainer extends Component<propsType, stateType> {
    constructor(props: propsType) {
        super(props);
        this.state = {
            statusCode: 0,
        };
    }

    componentDidUpdate(prevProps: propsType, prevState: stateType): void {
        if (this.props.ready && !prevProps.ready) {
            this.setState({
                statusCode: 1,
            });
            setTimeout(() => {
                this.setState({
                    statusCode: 2,
                });
            }, 4000)
        }
    }

    render(): ReactNode {
        const {name, children} = this.props;
        const {statusCode} = this.state;

        return (
            <Background
                status={getStatus(statusCode)}
                name={name}
            >{children}</Background>
        )
    }
}
