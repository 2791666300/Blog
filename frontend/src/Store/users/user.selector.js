import { createSelector } from 'reselect'

const selectoruser = (state) => state.user

export const selectorCurrentUser = createSelector(
    [selectoruser],
    (user) => user.currentUser
)

export const selectorAllUsers = createSelector(
    [selectoruser],
    (user) => user.users
)
