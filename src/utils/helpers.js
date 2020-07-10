
export function formatQuestion (question, author, authedUser, parentTweet) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    avatar: avatarURL,
    options: { optionOne, optionTwo},
    voted: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
  }
}