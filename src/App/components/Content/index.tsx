import { ReactNode, Component, CSSProperties } from "react";

import GithubIcon from "react-svg-loader!../../svgs/guthub.svg";

import "./index.scss";

type propsType = Readonly<{
    ready: boolean,
    name: string,
    englishName: string,
    displayPage: 0 | 1,
    experiences: Array<string>,
    intro?: string,
    switchPage: (page: 0 | 1) => void,
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

export default class Content extends Component<propsType> {
    constructor(props: propsType) {
        super(props);

        this.__lastPage = this.__lastPage.bind(this);
        this.__nextPage = this.__nextPage.bind(this);
    }

    __lastPage() {
        this.props.switchPage(0);
    }

    __nextPage() {
        this.props.switchPage(1);
    }

    render(): ReactNode {
        const {
            ready,
            name,
            englishName,
            displayPage,
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

        return (
            <div id="content" className={ready ? "ready" : undefined}>
                <div className={`page${displayPage === 0 ? " show" : ""}`}>
                    <img alt="avatar" src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} />
                    <h3 className="name">{name}</h3>
                    <h3
                        className="englishName"
                        style={{
                            "--font-ratio": (10/6) * name.length / englishName.length
                        } as CSSProperties}
                    >{englishName}</h3>
                    {
                        birthDay ? <div>
                            <span className="ms-o">cake</span>
                            <p>{birthDay}</p>
                        </div> : undefined
                    }
                    <GithubIcon />
                </div>
                <div className={`page${displayPage === 1 ? " show" : ""}`}>

                </div>
                <div className="buttonBar">
                    <button onClick={this.__lastPage}>Last</button>
                    <button onClick={this.__lastPage}>Next</button>
                </div>
            </div>
        );
    }
}

function infoBlock(
    ms: string,
    context: string,
    url?: string,
    urlDisplay?: string
) {

}
