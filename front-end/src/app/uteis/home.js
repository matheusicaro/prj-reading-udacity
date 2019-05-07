import lodash from 'lodash'
import { POST } from '../constants/actions'

export const updateScorePost = (posts, action, postId) => {
  if (action === POST.CHANGE_VOTE.upVote) {
    lodash.forIn(posts, (value, key) => {
      if (value.id === postId) { posts[key].voteScore += 1 }
    })
  } else {
    lodash.forIn(posts, (value, key) => {
      if (value.id === postId) { posts[key].voteScore -= 1 }
    })
  }
}