import React from "react";
import { Story } from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://avatars.githubusercontent.com/u/33202282?v=4"
        title="DAJA"
      />
      <Story
        image="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        title="Rafeh Qazi"
      />
      <Story
        image="https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
        title="Frankie"
      />
      <Story
        image="https://images.unsplash.com/photo-1554310603-d39d43033735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
        title="Aaron Bernath"
      />
      <Story
        image="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
        title="Naz "
      />
    </div>
  );
};

export { StoryReel };
