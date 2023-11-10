import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { checkUserSession } from './Store/users/user.action';

import Index from './Routers/Index/index.component';
import Auth from './Routers/Auth.js/auth.component';
import ListNavigation from './Routers/ListNavigation/listNavi.component';
import Navigation from './Routers/Navigation/navigation.component';

import Categories from './Routers/Categories/categories.component';
import Articles from './Routers/Articles/articles.component';
import Friendship from './Routers/Friendship/friendship.component';
import AboutMe from './Routers/AboutMe/aboutMe.component';
import AboutBlog from './Routers/AboutBlog/aboutBolg.component';
import More from './Routers/More/more.component';
import Components from './Routers/Components/Components.component';
import YourSelf from './Routers/YourSelfPage/YourSelf/yourself.component';
import CreatorPage from './Routers/CreatorPage/creator.component'


import Profile from './Routers/YourSelfPage/Profile/profile.component'
import Account from './Routers/YourSelfPage/Account/account.component'
import Likes from './Routers/YourSelfPage/Likes/likes.component'
import Tages from './Routers/YourSelfPage/Tages/tages.component'

import { GlobalStyle } from './globalStyles'


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (

    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/listnavi' element={<ListNavigation />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/navi/*' element={<Navigation />} >
          <Route path='articles/*' element={<Articles />} />
          <Route path='categories' element={<Categories />} />
          <Route path='friendship' element={<Friendship />} />
          <Route path='aboutme' element={<AboutMe />} />
          <Route path='aboutblog' element={<AboutBlog />} />
          <Route path='more' element={<More />} />
          <Route path='component' element={<Components />} />
          <Route path='creator/*' element={< CreatorPage />} />
          <Route path='yourself/*' element={<YourSelf />} >
            <Route index element={<Profile />} />
            <Route path='account' element={<Account />} />
            <Route path='likes' element={<Likes />} />
            <Route path='tages' element={<Tages />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>


  )
}


export default App;
