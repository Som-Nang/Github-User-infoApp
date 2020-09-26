import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    loction,
    twitter_username } = githubUser;
  return <Wrapper>
    <header>
      <img src={avatar_url} loading={name} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>@{twitter_username || 'Twitter'}</p>
      </div>
      <a href={html_url}>follow</a>
    </header>
    <p className="bio">{bio}</p>
    <div className="links">
      <p>
        <MdBusiness></MdBusiness>{company || 'Company'}
      </p>
      <p>
        <MdLocationOn></MdLocationOn>{loction || ' In Side Earth'}
      </p>
      <a href={`https://${blog} `} >
        <MdLink> </MdLink>
        {blog}
      </a>
    </div>
  </Wrapper>
};
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    img:hover{
      transition: 100ms transform ease-in;
      transform: scale(1.08);
    
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p{
      color: var(--clr-grey-3);
      margin-bottom: 0;
      display: flex;
      align-items: center;
      
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
