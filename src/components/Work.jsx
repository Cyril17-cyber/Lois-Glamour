import React from "react";
import Projects from "./SubConents/Projects";

function Works(props) {
    return (
        <div className="work">
            {props.works.map((work, id) => {
                return (
                    <Projects
                    key={id}
                    work={work}
                    />
                )
            })}
        </div>
    )
}

export default Works;