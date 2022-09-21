import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  width: 100%;
`
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navbutton = styled.div`
  display: flex;
`

export const Wrapper = styled.div`
  background-color: hsl(356, 100%, 66%);
  height: 500px;
  width: 100%;
  border-radius: 0 0 0 90px;
  display: flex;
  background-image: url('/image/logo-banner-desktop.svg');
  transform: scale(1);
  background-size: 170%;
  background-repeat: no-repeat;
  background-position: 10%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  align-items: center;
  width: 100%;
`
export const Title = styled.h1`
  font-weight: 500;
  color: white;
`
export const Description = styled.p`
  color:hsl(0, 0%, 100%);
  /* font-family: 'Ubunto'; */
  font-size: 18px;
  padding-bottom: 10px;
`
export const Logo = styled.h2`
  font-size: 22px;
  color: white;
`