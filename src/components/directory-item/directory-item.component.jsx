import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

//  import { useNavigate } from "react-router-dom";
// WE Can use a Function called onNavigateHandler which allows use to use route from one component to the next.
// we first need to imporrt useNavigate.
// when then creat the function const onNavigateHansdler = () => navigate(route);
// using a onlick will allow the useNavigate to access the different routes.
