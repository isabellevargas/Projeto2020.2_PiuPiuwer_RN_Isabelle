import styled from "styled-components/native";

export const WrapperComponent = styled.View`
  border-bottom-color:rgba(200, 121, 168, 0.73);
  border-bottom-width: 1px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
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
  margin-bottom: 17px;
`;

export const LikeComponent = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LikeText = styled.Text`
    text-decoration: none;
    color: #b164ae;
    font-size: 12px;
    padding-top: 8px;
`;

export const InteractionImage = styled.Image`
    width: 18px;
    height: 18px;
    margin: 15px 10px 0 15px;
`;

export const DataComponent = styled.View`
  display: flex;
  flex-direction: row;
`;

export const UserImage = styled.Image`
    resizeMode: cover;
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

export const UserData = styled.View`
    margin-left: 15px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Name = styled.Text`
    font-size: 17px;
    color: black;
`;

export const Username = styled.Text`
    font-size: 13px;
    font-weight: normal;
    color: black;
`;

export const PiuText = styled.Text`
    font-size: 15px;
    color: black;
    margin-top: 7px;
    flex-shrink: 1;
    width: 100%;
`;
