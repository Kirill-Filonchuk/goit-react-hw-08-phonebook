import styled from 'styled-components';

const LogoStyle = styled.div`
  background-color: white;
  padding: 5px 5px;
`;
const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Logo = () => {
  return (
    <LogoStyle>
      <Img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczayTUInoY1Ya1EAAHK7NYbYggbmDzFJe8w&usqp=CAU"
        alt="Nature"
      />
    </LogoStyle>
  );
};
