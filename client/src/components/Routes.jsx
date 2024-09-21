import React from "react";
import {createBrowserRouter,} from "react-router-dom";
import Home1 from "./croppredictor/Home1";
import Home2 from "./Agrirental/Home2";
import App from "../App";
import Home from "./Parent/Home";
import Authentication1 from "./Parent/Authentication/Authentication1";
import Authentication2 from "./Parent/Authentication/Authentication2";


const isLogin=true;

const router= createBrowserRouter([
    { // parent
        path:"/",
        element: <App/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/login",element:<Authentication1/>},
            {path:"/signup",element:<Authentication2/>},

            {  // crop predictor routes
                path:"/cropPredictor",
                element:<Home1/>,
                children:[
                    {path:""}

                ]
            },
            {// agrirental routes
                path:"/agriRental",
                element:<Home2/>,
                children:[
                    {path:""}
                ]
            },// add more routes below

        ]

    }
          
])

export default router;
  