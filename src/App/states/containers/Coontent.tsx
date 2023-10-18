import { ReactNode, Component, ReactElement } from "react";

import Content from "../../components/Content";

type propsType = Readonly<{
    ready: boolean,
    name: string,
    englishName: string,
    experiences: Array<string>,
    switchBackgroundRotate: (rotate?: boolean) => void,
    intro: string,
    birthDay?: string,
    children?: Array<ReactElement>
}>;
type stateType = Readonly<{
    displayPage: 0 | 1,
    ready: boolean,
}>;

export default class ContentContainer extends Component<propsType, stateType> {
    constructor(props: propsType) {
        super(props);

        this.state = {
            displayPage: 0,
            ready: false,
        }

        this.__switchPage = this.__switchPage.bind(this);
    }

    componentDidUpdate(prevProps: propsType, prevState: stateType): void {
        if (this.props.ready && !prevProps.ready) {
            // 等待Background預備完成
            setTimeout(() => {
                this.setState({
                    ready: true,
                })
            }, 7500);
        }
    }

    __switchPage(page: 0 | 1): void {
        this.setState({
            displayPage: page
        });
    }

    render(): ReactNode {
        const {
            name,
            englishName,
            intro,
            experiences,
            birthDay,
            children,
            switchBackgroundRotate,
        } = this.props;
        const {ready, displayPage} = this.state;

        return (
            <Content
                displayPage={displayPage}
                switchPage={this.__switchPage}
                switchBackgroundRotate={switchBackgroundRotate}
                ready={ready}
                name={name}
                englishName={englishName}
                intro={intro}
                experiences={experiences}
            >{children}</Content>
        )
    }
}
