import React from "react";

import InfoBox from "./ui/InfoBox";
import {
    BackgroundContainer,
    ContentContainer,
} from "./states/containers";

import "./index.scss"

type propsType = Readonly<{}>;
type stateType = Readonly<{
    ready: boolean,
    loadedImage: number,
    rotate: boolean,
}>;

export default class App extends React.Component<propsType, stateType> {
    totalImage: number;
    constructor(props: propsType) {
        super(props);
        this.totalImage = 0;
        this.state = {
            ready: false,
            loadedImage: 0,
            rotate: false,
        };

        this.__checkLoadingFinish = this.__checkLoadingFinish.bind(this);
        this.__switchBackgroundRotate = this.__switchBackgroundRotate.bind(this);
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

    __switchBackgroundRotate (rotate?: boolean) {
        this.setState(state => {
            return {
                rotate: rotate ?? !state.rotate
            };
        });
    }

    componentDidMount(): void {
        let imgArray = Array.from(document.querySelectorAll("img"));
        this.totalImage = imgArray.length;
        this.__checkLoadingFinish(imgArray);
    }

    render(): React.ReactNode {
        const {ready, rotate} = this.state;
        const intro = "\
            沒什麼好說的(X。高三下恰巧撿到成大資工乙組特殊選材名額，以正取最後一名進入成大資工，平常的興趣是做一些小專案，主要使用與擅長的語言為Python，專長為網頁全端，不喜歡打競程。\n\
            其他興趣還有打遊戲、看動漫，偶爾會打音遊，但打得很爛。社恐、個性隨和 吧(沒有主見、選擇困難、不善拒絕，找我問事情最常得到的答案大概是\"不知道\"或\"都可以\"。看到訊息通常會馬上回，如果沒有可能是在睡覺或很忙，一般來說24小時內一定會回。 \
        ";
        return (
            <div id="app">
                <img alt="background" src={`${process.env.PUBLIC_URL}/index.jpg`} />
                <BackgroundContainer
                    ready={ready}
                    name="CHUANG CHIH-HAO"
                    rotate={rotate}
                >
                    <ContentContainer
                        ready={ready}
                        switchBackgroundRotate={this.__switchBackgroundRotate}
                        name="莊智皓"
                        englishName="CHIH-HAO, CHUANG"
                        intro={intro}
                        birthDay="2004/10/21"
                        experiences={[
                            "擔任FRC 8584隊長 (2021~2022)",
                            "就讀國立成功大學 資訊工程學系 (2023~)",
                            "GDSC NCKU 2nd Web組 組員(2023~)",
                        ]}
                    >
                        <InfoBox ms="cake" context="2004/10/21" />
                        <InfoBox ms="mail" context="contact@chih-hao.xyz" url="mailto:contact@chih-hao.xyz" />
                        <InfoBox ms="g" context="CHUANG CHIH-HAO" url="https://github.com/AloneAlongLife" />
                        {/* Twitter */}
                        {/* <InfoBox ms="t" context="" url="" /> */}
                        <InfoBox ms="i" context="zhi_hao_1021" url="https://www.instagram.com/zhi_hao_1021" />
                        <InfoBox ms="f" context="莊智皓" url="https://www.facebook.com/zhihao1021" />
                        <InfoBox ms="share" context="Code::Stats" url="https://codestats.net/users/Chuang%20Chi%20Hao" />
                        <InfoBox ms="share" context="FRC 8584" url="https://frc8584.ddns.net" />
                    </ContentContainer>
                </BackgroundContainer>
            </div>
        );
    }
}
