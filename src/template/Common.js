import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

export const Common = (props) => {

    const {Component,...restProps} = props;

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    })

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Header/>
            <div className="pt-64 sm:pt-40"></div>
            <Component {...propsRoute} />
            <div className="pb-40"></div>
            <Footer/>
        </Fragment>
    }} />
}