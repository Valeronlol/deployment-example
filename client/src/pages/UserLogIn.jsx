import React, { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../context/authContext";
import { DownloadOutlined } from "@ant-design/icons";

import BodyPosts from "../components/bodyPosts/bodyPosts";
import "../App.css";

export default function UserLogIn() {
  const { logout, userEmail } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar">
        <Button type="primary" shape="round" onClick={logout}>
          logout
        </Button>
        <span>
          <span>
            <b>{userEmail}</b>
          </span>
        </span>
      </div>
      <div className="container">
        <Button
          type="error"
          shape="round"
          icon={<DownloadOutlined />}
          size={"large"}
        >
          Download
        </Button>
      </div>
      <div>
        <BodyPosts />
      </div>
    </div>
  );
}
