import React from "react";
import "../App.css";
import "../../node_modules/antd/dist/antd.css";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import BodyPosts from "../components/bodyPosts/bodyPosts";

export default function Main() {
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="navbar">
        <div>
          <Button type="primary" shape="round" onClick={showDrawer}>
            MENU
          </Button>
        </div>

        <div className="user_btn_auth_login">
          <div>
            <Button type="primary" shape="round" href="login">
              login
            </Button>
          </div>
          <div>
            <Button type="primary" shape="round" href="registration">
              registration
            </Button>
          </div>
        </div>

        <Drawer
          title="Basic Drawer"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <div>
            <Button>
              <Link to="/login">login</Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link to="/registration">registration</Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link to="/upload">Upload</Link>
            </Button>
          </div>
        </Drawer>
      </div>

      <div>
        <BodyPosts />
      </div>
    </>
  );
}
