import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Loading } from 'src/components/Loading'
import initCornerstone from 'src/helpers/cornerstoneInit'

const Home = lazy(() =>
  import('src/pages/Home').then(module => ({
    default: module.default,
  })),
)

export const Routes = () => {
  initCornerstone()
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/404" component={Home} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
