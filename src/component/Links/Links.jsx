import React from "react";
import "../Links/Links.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import git from "../../assets/git.png";
import slack from "../../assets/slack.png";

function links() {
  return (
    <div className="links_btn">
      <Button
        id="twitter_link"
        refs="https://twitter.com/home"
        name="Twitter Link"
      />
      <Button
        id="btn__zuri"
        refs="https://training.zuri.team/"
        name="Zuri Team"
      />
      <Button id="books" refs="http://books.zuri.team" name="Zuri Books" />
      <Button
        id="book__python"
        refs="https://books.zuri.team/"
        name="Python Books"
      />
      <Button
        id="pitch"
        refs="https://background.zuri.team"
        name="Background Check for Coders"
      />
      <Button
        id="book__design"
        refs="https://books.zuri.team/design-rules"
        name="Design Books"
      />
      <button id="contact">
        <Link to="/contact">Contact Me </Link>
      </button>
      <div className="social_presence">
        <img src={git} alt="" />
        <img src={slack} alt="" />
        {/* <div>
          <a id="git" href="https://github.com/Halabitimoty">
            <img src={git} alt="" />
          </a>
        </div>

        <div>
          <a
            id="slack"
            href="https://app.slack.com/client/T042F7V19Q8/C041S7VF5JR"
          >
            <img src={slack} alt="" />
          </a> 
        </div>*/}
      </div>
    </div>
  );
}

export default links;
