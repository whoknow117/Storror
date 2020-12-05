import React from 'react';
import classes from './Content.module.scss';
import SliderShow from "./SliderShow/SliderShow";

type ContentPropsType = {

}

const Content: React.FC<ContentPropsType> = () => {

    return <div className={classes.content}>
                <SliderShow/>
    </div>
}
export default Content;