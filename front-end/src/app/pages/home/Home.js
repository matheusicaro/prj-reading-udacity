import React from 'react'

import NavBar from '../../components/NavBar'
import { Dashboard } from '../../components'

const Home = props => {
  return (
    <div style={container}>
      <NavBar />

      <Dashboard
        posts={props.posts}
        onClicksPost={props.onClicksPost}
        onClicksFilter={props.onClicksFilter}
        categories={props.categories}
      />
    </div>
  )
}

export default Home

const container = {
  'display': 'grid',
  'gridGap': '5%',
  'justifyItems': 'center',
  'width': '100%'
}
