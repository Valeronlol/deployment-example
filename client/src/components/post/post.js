import React from "react";

import { getImagesAxios } from "../../axios/index";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./post.css";

export default function Post() {
  return (
    <div className="container">
      <div className="post">
        <Author />
        <Content />
        <SocialButtons />
        <div></div>
        <div className="comments"></div>
      </div>
    </div>
  );
}

function Author() {
  return (
    <div className="author">
      <div className="fix_header">
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div className="author_info">
          <div className="author_name">
            Sergei Popov <span>added 9 photo</span>
          </div>
          <div className="added_time">today at 9:29 AM</div>
        </div>
      </div>
      <div>menu</div>
    </div>
  );
}

function Content() {
  const [imagesState, setImagesState] = React.useState([]);
  React.useEffect(() => {
    getImagesAxios().then((responce) => setImagesState(responce.data));
  }, []);

  return (
    <div className="content">
      {imagesState.map((img, index) => (
        <div className="img" key={index}>
          <Image
            key={index}
            width={200}
            height={200}
            src={require(`../../images/${img}`)}
          />
        </div>
      ))}
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="social_buttons">
      <div>like: 0</div>
      <div>comments: 0</div>
    </div>
  );
}
