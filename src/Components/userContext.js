import React from 'react'

// Create and export the context:

const UserContext = React.createContext('CodeWhiz')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext
