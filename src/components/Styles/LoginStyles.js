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

export const FormStyle = styled.form`
  width: 100%;
  position: relative;
  margin-bottom: 37px;
  background: transparent;
`;

export const Title = styled.h1`
  text-align: center;
  color: black;
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

export const Button = styled.button`
  height: 40px;
  width: 205px;
  margin-left: 8px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
`;
