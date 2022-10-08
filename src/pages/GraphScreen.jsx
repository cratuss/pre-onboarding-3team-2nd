import { blue, pearl } from '../theme';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import GraphField from '../components/GraphField/GraphField';

const GraphScreen = () => {
  return (
    <>
      <Fade>
        <StyledGraphScreen>
          <GraphField />
        </StyledGraphScreen>
      </Fade>
    </>
  );
};
export default GraphScreen;

const StyledGraphScreen = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 20%;
  padding: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
  background-size: cover;
  .graph-inner-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 3px solid ${blue};
    background-color: #ffffffd5;
    .temperatures-box {
      width: 100%;
      height: 300px;
      margin-bottom: 50px;
      background: #777;
    }
    .humidity-box {
      width: 100%;
      height: 300px;
      margin-bottom: 50px;
      background: #777;
    }
    .atmospheric-pressure-box {
      width: 100%;
      height: 300px;
      background: #777;
    }
  }

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 1024px) {
  }

  /* ============= ======= 890px ============ ======== */
  @media screen and (max-width: 890px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-top: 250px;
    padding: 10px;
    background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
    background-size: cover;
    .graph-inner-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
      border: 3px solid ${blue};
      background-color: #ffffffd5;
      .temperatures-box {
        width: 100%;
        height: 300px;
        margin-bottom: 50px;
        background: #777;
      }
      .humidity-box {
        width: 100%;
        height: 300px;
        margin-bottom: 50px;
        background: #777;
      }
      .atmospheric-pressure-box {
        width: 100%;
        height: 300px;
        background: #777;
      }
    }
  }

  /* ============= ======= 480px ============ ======== */
  @media screen and (max-width: 480px) {
  }

  /* ============= ======= 378px ============ ======== */
  @media screen and (max-width: 378px) {
  }
`;
