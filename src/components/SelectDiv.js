import React from "react";
import { ACTIONS } from "./Constants";

export function SelectDiv()
{
    return(
        <select className="complete3">
            <option value={ACTIONS.EMPTY}></option>
            <option value={ACTIONS.COMPLETED}></option>
            <option value={ACTIONS.EDIT}></option>
            <option value={ACTIONS.REMOVE}></option>
        </select>
    )
}