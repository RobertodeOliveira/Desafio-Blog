import * as S from './styles'

export type ButtonProps = {
  title: string 
}

export const Button = ({title}:ButtonProps) => {
  return(
    <S.Wrapper>
      <S.Button>{title}</S.Button>
    </S.Wrapper>
  )
}

export default Button