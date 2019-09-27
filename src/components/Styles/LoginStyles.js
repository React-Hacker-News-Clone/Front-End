import styled from "styled-components";

export const CardLogin = styled.div`
  background: #4cbddd;
  height: auto;
  border: 3px solid #f1f1f1;
  margin: 25px auto;
  width: 30vw;
  border-radius: 10px;
  overflow: hidden;
  padding: 15px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
  background: transparent;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  line-height: 2;
  margin-top: 1vw;
`;

export const ShortText = styled.p`
  text-align: center;
  color: black;
`;

export const FieldForm = styled.div`
  font-size: 15px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
    rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
  background: rgba(242, 241, 238, 0.6);
  cursor: text;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const ButtonStyle = styled.button`
  direction: ltr;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 10px;
  font-weight: 500;
  height: auto;
  line-height: normal;
  padding: 8px 16px;
  text-align: center;
  width: 100%;
`;

export const ButtonContainer = styled.button`
  border-radius: 1.875rem;
  border: none;
  padding: 0.3125rem 0.625rem;
  color: #fff;
  width: 16rem;
  height: 3rem;
  margin-top: 0.6rem;
  background: #4cbddd;
  transition: all ease-in 0.2s;
  font-size: 1.5rem;
  &:hover {
    background: #343a40;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 60vw;
    height: 2.875rem;
    font-size: 1.5rem;
  }
`;
