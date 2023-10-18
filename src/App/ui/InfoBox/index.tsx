import { FunctionComponent } from "react";

import "./index.scss";

type propsType = Readonly<{
    ms: string,
    context?: string,
    url?: string,
    urlDisplayName?: string,
}>;

const InfoBox: FunctionComponent<propsType> = (props: propsType) => {
    const {
        ms,
        context,
        url,
    } = props;
    if (!context && !url) return null;
    const iconType = ms.length === 1 ? "im" : "ms-o"
    return (
        <div className="infoBox">
            <span className={iconType}>{ms}</span>
            {
                url ?
                <a
                    href={url}
                    referrerPolicy="no-referrer"
                    target="__blank"
                >{context ?? url}</a> :
                <p>{context}</p>
            }
        </div>
    );
};

export default InfoBox;
