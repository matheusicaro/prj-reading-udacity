import React, { Fragment } from 'react'
import FilterByCategories from './FilterByCategories'
import FilterByPost from './FilterByPost'

import './filter.css'

export const Filter = ({ byCategories, onclick }) => {
  return (
    <Fragment>
      <div className='container'>
        <FilterByPost onclick={onclick} />
        { byCategories && <FilterByCategories {...byCategories} onclick={onclick} /> }
      </div>

    </Fragment>
  )
}
