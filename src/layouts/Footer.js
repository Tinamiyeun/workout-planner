import Styled from "styled-components";

function Footer() {

    return (
        <Wrapper>
            <p>Created by The Limit Group. ©copyright 2022</p>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = Styled.div`
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #F2B705;
  color: #59445F;
  text-align: center;
`;