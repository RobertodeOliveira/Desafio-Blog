import Button from '../Button'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ContainerWrapper>
        <S.Navbar>
          <S.Logo>Bloger</S.Logo>
          <S.Navbutton>
            <Button title={'Login'} />
            <Button title={'Sing-up'} />
          </S.Navbutton>
        </S.Navbar>
        <S.Content>
          <S.Title>A Modern publishing platform</S.Title>
            <S.Description>Grow your audience and build your online brand</S.Description>
          <S.Navbutton>
            <Button title={'Start for Free'} />
            <Button title={'Learn More'} />
          </S.Navbutton>
        </S.Content>
      </S.ContainerWrapper>
    </S.Wrapper>
  )
} 