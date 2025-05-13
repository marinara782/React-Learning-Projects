import FollowButton from "./FollowButton.js";
import LikeButton from "./LikeButton.js";

const postImage = "https://wiki.leagueoflegends.com/en-us/images/thumb/Jinx_Arcane_10_Render.png/752px-Jinx_Arcane_10_Render.png?288d6";
const userImage = "https://avatarfiles.alphacoders.com/319/thumb-1920-319426.jpg";

export default function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Pic" />
        <p>Hipthehippocorn</p>
        <FollowButton />
      </div>
      <img id="post-img" src={postImage} alt="Post Pic" />
      <LikeButton />
    </div>
  );
}