import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;

export const Section = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.1;

  &.active {
    color: #080808;
    background-color: #fff;
    transition: background-color .5s ease-in, color .5s ease-in;
    font-style: italic;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20em;
`;
export const Loader = styled.div`
  background-color: white;
  height: 7px;
  width: 325px;
  border-radius: 7px;
  margin-top: 20px;

  > span {
    height: 7px;
    width: 125px;
    background-color: #ffbc35;
    border-radius: 10px;
    position: absolute;
    animation: loader 3s infinite;
  }

  @keyframes loader {
    0% {
      transform: translateX(0px);
    }

    50% {
      transform: translateX(100px);
    }

    100% {
      transform: translateX(200px);
    }
  }
`;

export const SectionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 5em;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2em;
`

export const Movie = styled.div`
    width: 300px;
    margin: 1rem;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0.2px 4px 6px rgb(0,0,0, .25);
    position: relative;
    overflow: hidden;
    > img {
        width: 100%;
    }

    > .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1rem 1rem;
        margin: 0;
        letter-spacing: .5px;
        > h3 {
            font-size: .9rem; 
        }

        > span {
            background-color: #080808;
            color: #fff;
            padding: .25rem .5rem;
            border-radius: 3px;
            font-weight: bold;
        }
    }

    > .overview {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        padding: 1rem;
        max-height: 100%;
        transform: translateY(101%);
        transition: transform .3s ease-in;
        font-size: .9rem; 
        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    &:hover {
        > .overview {
            transform: translateY(0);
        }
    }
`;

export const Empty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-top: 10em;
    color: white;
`;
