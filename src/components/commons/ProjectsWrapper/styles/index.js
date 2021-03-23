/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

export const ProjectsWrapper = styled.div`
    margin-top: -32px;
    background-color: ${function (props) {
    return props.theme.colors.background.dark.color;
  }};
    padding-bottom: 90px;
`;

ProjectsWrapper.Section = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    margin: 30px 0;
    padding-bottom: 50px;
`;

ProjectsWrapper.Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.title}
    padding: 35px 0;
`;

ProjectsWrapper.Content = styled.div`
    display: flex;
    justify-content: center;

    ${breakPointsMedia({
    xs: css`
            flex-wrap: wrap;
        `,
    md: css`
            flex-wrap: nowrap;
        `,
  })}
`;

ProjectsWrapper.Image = styled.img`
    background: url(https://mir-s3-cdn-cf.behance.net/user/276/d2ff2d30408991.56edd9abea663.jpg) center center / cover rgb(28, 24, 20);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow};

    ${breakPointsMedia({
    md: css`
            margin: 40px 15px;
            width: 250px;
            height: 250px;
        `,
  })}
`;

ProjectsWrapper.ImgSlug = styled.img`
    margin-top: 50px;
    margin-bottom: -50px;
    width: 400px;
    height: 300px;
    border-radius: 10px;
`;

ProjectsWrapper.TextSlug = styled.div`
  width: 100%;
`;

ProjectsWrapper.SubSlug = styled.h3`
    font-size: 14px;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.subTitle}
    padding: 35px 0;
`;

ProjectsWrapper.Text = styled.p`
    color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
    ${TextStylesVariantsMap.paragraph1}
    text-align: justify;
    margin: 60px 60px;

    ${breakPointsMedia({
    xs: css`
            width: 65%;
        `,
    md: css`
            width: 50%;
        `,
    lg: css`
            width: 45%;
        `,
    xl: css`
            width: 30%;
        `,
  })}
`;

ProjectsWrapper.Repo = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 80px;
    color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
`;

ProjectsWrapper.RepoDetails = styled.ul`
  width: 100%;
  margin: 15px 0;
`;

ProjectsWrapper.RepoText = styled.li`
  list-style: none;
  list-style-type: none;
  color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
`;

ProjectsWrapper.RepoLink = styled.li`
  text-decoration: none;
  color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
    ${TextStylesVariantsMap.paragraph1}
  list-style: none;
  list-style-type: none;
`;
