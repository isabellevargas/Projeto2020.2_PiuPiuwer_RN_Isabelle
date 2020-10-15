import styled from "styled-components/native";

export const WrapperComponent = styled.View`
  /*border: 0 0 1px 0 solid rgba(200, 121, 168, 0.73);*/
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PiuComponents = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InteractionsComponent = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const LikeComponent = styled.View`
    display: flex;
    align-items: center;
`;

export const LikeText = styled.Text`
    text-decoration: none;
    color: #b164ae;
    font-size: 8px;
    padding-top: 8px;
`;

export const InteractionImage = styled.Image`
    width: 10px;
    height: 10px;
    margin: 10px 5px 0 10px;
`;

export const DataComponent = styled.View`
  display: flex;
`;

export const UserImage = styled.Image`
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const UserData = styled.View`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
`;

export const Name = styled.Text`
    font-size: 10px;
    color: black;
`;

export const Username = styled.Text`
    font-size: 8px;
    font-weight: normal;
    color: black;
`;

export const PiuText = styled.Text`
    font-size: 9px;
    color: black;
    margin-top: 3px;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    width: 100%;
`;
