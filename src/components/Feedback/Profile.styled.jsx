import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
    width: 300px;
    text-align: center;
    border: 1px solid #ececec;
    background-color: white;`;

export const Description = styled.div`
     padding: 20px;
        font-size: 22px;`;

export const Avatar = styled.img`
width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
    background-color: #807e7d;
    margin-bottom: 20px;
    border-radius: 50%;
        `;
export const NameProfile = styled.p`
         font-weight: 700;
    margin-bottom: 20px;
    color:black;  `;

export const ProfileInfo = styled.p`
    margin-bottom: 20px;
    color: gray;`;

export const UserList = styled.ul`
 display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ececec;
    list-style: none;
     background-color: #ececec;
    `;
export const UserCard = styled.li`
    display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc(100% / 3);
padding: 12px;

&:not(:last-child) {
    border: 1px solid rgba(47, 48, 58, 0.1);
};`
export const UserLabel = styled.span`
font-size: 12px;
  margin-bottom: 8px;
  color: gray;`;

export const UserValue = styled.span`
  font-size: 12px;
        font-weight: bold;
        color: black;`;

