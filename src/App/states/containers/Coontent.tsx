import { ReactNode, Component } from "react";

import Content from "../../components/Content";

type propsType = Readonly<{
    ready: boolean,
    name: string,
    englishName: string,
    experiences: Array<string>,
    intro?: string,
    birthDay?: string,
    email?: string,
    githubUrl?: string,
    githubDisplayName?: string,
    twitterUrl?: string,
    twitterDisplayName?: string,
    instagramUrl?: string,
    instagramDisplayName?: string,
    facebookUrl?: string,
    facebookDisplayName?: string,
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
            email,
            githubUrl,
            githubDisplayName,
            twitterUrl,
            twitterDisplayName,
            instagramUrl,
            instagramDisplayName,
            facebookUrl,
            facebookDisplayName,
        } = this.props;
        const {ready, displayPage} = this.state;

        return (
            <Content
                displayPage={displayPage}
                switchPage={this.__switchPage}
                ready={ready}
                name={name}
                englishName={englishName}
                intro={intro}
                experiences={experiences}
                birthDay={birthDay}
                email={email}
                twitterUrl={twitterUrl}
                twitterDisplayName={twitterDisplayName}
                instagramUrl={instagramUrl}
                instagramDisplayName={instagramDisplayName}
                facebookUrl={facebookUrl}
                facebookDisplayName={facebookDisplayName}
            />
        )
    }
}
