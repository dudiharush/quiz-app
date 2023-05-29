#install & run steps:

1. git clone the repo
2. cd into the repo's folder
3. run: npm i
4. run: npm run dev

# app flow
note: you need to "login" to use the app, if you don't, you will be redirected to the login page.

after login, you can fill in the quiz
after the quiz is finished, you can restart it by going to the home page and refreshing it, so you can "login" with another user

#dataflow and state architecture is at file: architecture.dio

#styling - tailwindcss:

- atomic classes are better than class names
- very popular and has a big community
- easy to customize, adapts to any design, and the build size is tiny

#state management - zustand:

- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't wrap your app in context providers
- Can inform components transiently (without causing render)
- very popular and has a big community

#project file structure

pages - for components that have a route, like: LoginPage, QuizPage etc
and for components that are specific to the page

components - for components that are shared between pages

services - has external services, like: - api service: loads / save data in persistent data (localStorage) - data loaders: hooks the wrap the api service

types - used for all typescript related interfaces / types - modelTypes - used for the business object (domain model) types

store - used for all client state related data - selectors - used to select (and subscribe to) parts of the state

utils - should container general purpose pure functions as helpers
