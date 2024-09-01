import React from "react";
import {createBrowserRouter,} from "react-router-dom";
import Home1 from "./croppredictor/Home1";
import Home2 from "./Agrirental/Home2";
import App from "../App";
import Home from "./Parent/Home";

const router= createBrowserRouter([
    { // parent
        path:"/",
        element: <App/>,
        children:[
            {path:"/",element:<Home/>},

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
  