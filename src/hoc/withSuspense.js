import React from "react"
import Preloader from "../components/Preloader/preloader"

export const withSuspense = Component => props =>
  <React.Suspense fallback={Preloader}>
    <Component {...props}/>
  </React.Suspense>
