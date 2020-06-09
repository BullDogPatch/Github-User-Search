import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  color: red;
  font-family: monospace;
`;
const UserCard = styled.div`
  width: 80%;
  margin: auto;
`;

const UserDetails = styled.p`
  font-family: monospace;
  font-weight: bold;
`;

const GithubUser = props => {
  // console.log(props)
  return (
    <UserCard>
      <H2>Username: {props.users.login}</H2>
      <H2>Name: {props.users.name}</H2>
      <UserDetails>Location: {props.users.location}</UserDetails>
      {/* <a href={props.users.html_url}>Git Handle</a> */}
      <UserDetails>Followers: {props.users.followers}</UserDetails>

      <img src={props.users.avatar_url} alt="avatar" />
    </UserCard>
  );
};

export default GithubUser;
