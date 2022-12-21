import React, { Fragment } from 'react'
import HeaderBody from './HeaderBody/HeaderBody'
import HeaderFirst from './HeaderFirst/HeaderFirst'


export default function HeaderMain() {
    return (
        <Fragment>
            <HeaderFirst></HeaderFirst>
            <HeaderBody></HeaderBody>
        </Fragment>
    )
}
