import React, {useEffect, useState} from "react";

export const PageTree = ({ data }) => {
    const [expanded, getExpanded] = useState([]);

    const getToggle = (id) => {
        if(!expanded.includes(id)) {
            getExpanded([...expanded, id])
        } else {
            getExpanded(expanded.filter(ids => ids !== id))
        }
    }

    if(!(data.length > 0)) return null;
    const getPageTree = (data) => {
        return data.map(item => {
            const {name, id, children} = item;
            return (
                <ul key={id}>  
                    <span onClick={() => getToggle(id)}>{children ? (!expanded.includes(id) ? '▶' : '▼') : ''}</span>
                    <li key={id}>{name}</li>
                    {item.children && expanded.includes(id) && getPageTree(children)}
                </ul>
            );
        })
    }
    return (
        <>
        <h1>Page Tree</h1>
        <ul>{getPageTree(data)}</ul>
        </>
    );
}