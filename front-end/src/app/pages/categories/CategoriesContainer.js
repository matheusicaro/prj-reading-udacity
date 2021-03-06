import React from 'react'
import { connect } from 'react-redux'

import Categories from './Categories'
import { SortBy, RouterUtils } from '../../../utils'
import { POST_TYPE_ACTION, PostAction } from '../../../services/actions/post'
import { ROUTES } from '../../constants'

const CategoriesPage = (props) => {
  if (props.posts === null) {
    props.dispatch(PostAction.initialData)
    return 'CARREGANDO'
  }
  const { category } = props.match.params
  const posts = SortBy.category(category, props.posts)

  const onClicksCard = (action, data) => {
    if (
      action === POST_TYPE_ACTION.CHANGE_VOTE.upVote ||
      action === POST_TYPE_ACTION.CHANGE_VOTE.downVote
    ) {
      const cardId = data
      props.dispatch(PostAction.updateScore(action, cardId))
    } else if (action === POST_TYPE_ACTION.DELETE) {
      const cardId = data
      props.dispatch(PostAction.delete(cardId))
    } else if (action === POST_TYPE_ACTION.EDIT) {
      const { cardId, update } = data
      props.dispatch(PostAction.edit(cardId, update))
    } else if (action === POST_TYPE_ACTION.NAVIGATE) {
      const path = ROUTES.returnPathToPostId(data.id, data.category)
      props.navigate(path)
    } else if (action === POST_TYPE_ACTION.SELECT_ORDER_BY_OPTION) {
      if (data === undefined) {
        return
      }
      const optionFilter = data
      props.dispatch(PostAction.orderBy(optionFilter))
    } else if (action === POST_TYPE_ACTION.CREATE_NEW_POST) {
      props.dispatch(PostAction.createNewPost(data))
    }
  }

  return (
    <Categories posts={posts} onClicksPost={onClicksCard} onClicksFilter={onClicksCard}
    />
  )
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => {
  const navigate = RouterUtils.Router(dispatch)
  return { dispatch, ...navigate }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage)
