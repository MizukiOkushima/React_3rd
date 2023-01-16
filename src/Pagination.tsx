// Pagination コンポーネント
import React from "react";
import AlbumList from "./AlbumList";
import "./Pagination.css";
import Album from "./type";

type Props = {
  albums: Album[];
};

const Pagination = (props: Props) => {
  const { albums } = props;
  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} />
    </div>
  );
};

export default Pagination;
