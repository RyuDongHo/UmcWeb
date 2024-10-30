import styled from "styled-components";

const STYLE = {
  MovieDetail: styled.div`
    background-color: ${({ theme }) => theme.background};
    width: 100%;
  `,
  MovieBanner: styled.div`
    display: flex;
    flex-direction: column;
    line-height: 24px;
    height: 360px;
    background-size: cover;
    background-position: center -60px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.backgroundImg});
  `,
  MovieInfoContainer: styled.div`
    display: flex;
    gap: 12px;

  `
};

export default STYLE;
