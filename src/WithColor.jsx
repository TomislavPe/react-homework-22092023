import { useState } from "react";

const WithColor = (Component) => ({color}) => {
    const style = { backgroundColor: color };

    return <Component style={style}/>;
};

export default WithColor;