import React from "react";
import "./AlbumList.css";
import Album from "./type";

type Props = {
  albums: Album[];
};

const AlbumList = (props: Props) => {
  const { albums } = props;
  return (
    <div className="albumGridWrapper">
      {albums.map((album) => (
        <div key={album.id}>
          <img src={album.url} alt="album" />
        </div>
    ))}
  </div>
  );
};

export default AlbumList;
