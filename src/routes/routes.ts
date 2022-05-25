import { lazy, LazyExoticComponent } from "react";
// import { Lazyload1, Lazyload2, Lazyload3 } from "../01-lazyload/pages";
import '../01-lazyload/pages/Lazyload1';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}


const Lazyload1 = lazy(() => import (/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/Lazyload1'))  
const Lazyload2 = lazy(() => import (/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/Lazyload2')) 
const Lazyload3 = lazy(() => import (/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/Lazyload3')) 


export const routes: Route[] = [
    {
        to: 'lazy1',
        path: '/lazy1',
        Component: Lazyload1,
        name: 'Lazy1'
    },
    {
        to: 'lazy2',
        path: '/lazy2',
        Component: Lazyload2,
        name: 'Lazy2'
    },
    {
        to: 'lazy3',
        path: '/lazy3',
        Component: Lazyload3,
        name: 'Lazy3'
    },
]