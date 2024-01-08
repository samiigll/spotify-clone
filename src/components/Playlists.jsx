import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

export default function Playlists() {
  const [{ token, dispatch }] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get();
  };
  getPlaylistData();
 }, [token, dispatch]);
  return <div>Playlists</div>;
}
