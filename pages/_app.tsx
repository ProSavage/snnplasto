import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import LightTheme from "../styles/theme/LightTheme";
import Navbar from "./../components/ui/Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import { Sun, Moon } from "react-feather";
import { RecoilRoot } from "recoil";
import { useRecoilValue } from "recoil";
import { themeState } from "../styles/atoms/theme";
import Footer from "../components/ui/Footer";

function MyApp({ Component, pageProps }) {



  return (
    <Wrapper>
     <RecoilRoot>
        <WrappedApp Component={Component} pageProps={pageProps}/>
      </RecoilRoot>
    </Wrapper>
  );
}


function WrappedApp({ Component, pageProps }) {

  const theme = useRecoilValue(themeState)


  return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageContainer>
            <Navbar />
            <Component {...pageProps} />
            {/* <Footer/> */}
          </PageContainer>
        </ThemeProvider>
  );
}


const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default MyApp;