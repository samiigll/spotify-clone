import React from "react";
import styled from "styled-components";
export default function Login() {
  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
      <button>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`


display: flex;
flex-direction: column;
`;
