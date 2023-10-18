import {
    Component,
    CSSProperties,
    ReactElement,
    ReactNode,
} from "react";

import "./index.scss";

type propsType = Readonly<{
    ready: boolean,
    name: string,
    englishName: string,
    displayPage: 0 | 1,
    experiences: Array<string>,
    intro: string,
    switchPage: (page: 0 | 1) => void,
    switchBackgroundRotate: (rotate?: boolean) => void,
    children?: Array<ReactElement>
}>;

export default class Content extends Component<propsType> {
    constructor(props: propsType) {
        super(props);

        this.__lastPage = this.__lastPage.bind(this);
        this.__nextPage = this.__nextPage.bind(this);
    }

    __lastPage() {
        this.props.switchPage(0);
        this.props.switchBackgroundRotate(false);
    }

    __nextPage() {
        this.props.switchPage(1);
        this.props.switchBackgroundRotate(true);
    }

    render(): ReactNode {
        const {
            ready,
            name,
            englishName,
            displayPage,
            intro,
            experiences,
            children,
        } = this.props;

        return (
            <div
                id="content"
                className={ready ? "ready" : undefined}
                style={{
                    "--info-num": children?.length
                } as CSSProperties}
            >
                <div className={`page${displayPage === 0 ? " show" : ""}`}>
                    <img alt="avatar" src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} />
                    <h3 className="name">{name}</h3>
                    <h3
                        className="englishName"
                        style={{
                            "--font-ratio": (10 / 6) * name.length / englishName.length
                        } as CSSProperties}
                    >{englishName}</h3>
                    {children}
                </div>
                <div className={`page${displayPage === 1 ? " show" : ""}`}>
                    <div className="intro">
                        <h3>介紹</h3>
                        <div className="context">
                            {intro.split("\n").map((value, index) => <p key={index}>{value}</p>)}
                        </div>
                    </div>
                    <div className="experiences">
                        <h3>經歷</h3>
                        <ul>
                            {experiences.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="buttonBar">
                    <button
                        className={displayPage !== 0 ? "show" : undefined}
                        onClick={this.__lastPage}
                    >Last</button>
                    <button
                        className={displayPage !== 1 ? "show" : undefined}
                        onClick={this.__nextPage}>Next</button>
                </div>
            </div>
        );
    }
}
