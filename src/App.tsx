import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Pagination";
import Album from "./type";

function App() {
  // useState 初期値:[]空の配列 <>ジェネリクスで型宣言
  const [albums, setAlbums] = useState<Album[]>([]);

  // useEffect 第２引数を[]の空で指定すると一回だけページ読み込み時に発火する
  useEffect(() => {
    // getAlbums awaitを使った非同期処理関数を使う
    const getAlbums = async () => {
      // jsonplaceholderのjsonファイルを読み込む
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((res) => res.json())
        .then((albums) => setAlbums(albums));
    };
    // 処理実行
    getAlbums();
  }, []);

  return (
    <div className="App">
      <Pagination albums={ albums } />
    </div>
  );
}

export default App;
