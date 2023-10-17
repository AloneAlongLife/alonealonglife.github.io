import React from "react";

import {
    BackgroundContainer,
    ContentContainer,
} from "./states/containers";

import "./index.scss"

type propsType = Readonly<{}>;
type stateType = Readonly<{
    ready: boolean,
    loadedImage: number,
}>;

export default class App extends React.Component<propsType, stateType> {
    totalImage: number;
    constructor(props: propsType) {
        super(props);
        this.totalImage = 0;
        this.state = {
            ready: false,
            loadedImage: 0,
        };

        this.__checkLoadingFinish = this.__checkLoadingFinish.bind(this);
    }

    __checkLoadingFinish (
        unFinishElement: Array<HTMLImageElement>,
        callback?: () => void
    ) {
        unFinishElement = unFinishElement.filter(element => !element.complete);
        let loaded = this.totalImage - unFinishElement.length;
        let ready = unFinishElement.length === 0;
        this.setState({
            loadedImage: loaded,
            ready: ready
        });
        if (!ready) setTimeout(() => {
            this.__checkLoadingFinish(unFinishElement, callback)
        }, 100);
        else if (callback) callback();
    }

    componentDidMount(): void {
        let imgArray = Array.from(document.querySelectorAll("img"));
        this.totalImage = imgArray.length;
        this.__checkLoadingFinish(imgArray);
    }

    render(): React.ReactNode {
        const {ready} = this.state;
        return (
            <div id="app">
                <img alt="background" src={`${process.env.PUBLIC_URL}/img/index.jpg`} />
                <BackgroundContainer
                    ready={ready}
                    name="CHUANG CHIH-HAO"
                >
                    <ContentContainer
                        ready={ready}
                        name="莊智皓"
                        englishName="CHIH-HAO, CHUANG"
                        intro={undefined}
                        birthDay="2004/10/21"
                        email="contact@chih-hao.xyz"
                        githubUrl="https://github.com/AloneAlongLife"
                        githubDisplayName="Github"
                        instagramUrl="https://www.instagram.com/zhi_hao_1021"
                        instagramDisplayName="zhi_hao_1021"
                        facebookUrl="https://www.facebook.com/zhihao1021/"
                        facebookDisplayName="zhihao1021"
                        experiences={[
                            
                        ]}
                    />
                </BackgroundContainer>
            </div>
        );
    }
}
