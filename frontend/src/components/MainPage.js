import React,{useEffect,useState} from 'react';
import AllPosts from './AllPosts';
import MediaFeed from './MediaFeed';
import SideNav from './SideNav';
import UserProfile from './UserProfile';

export default function MainPage() {
  return( 
  <div>
    <SideNav/>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(auto, 1fr))", gridGap: "10px"}}>
     <AllPosts/>
    </div>
    <UserProfile/>
  </div>
)
}  
