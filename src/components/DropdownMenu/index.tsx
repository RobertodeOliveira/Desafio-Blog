// import { useState } from 'react'
// import * as S from './styles'

// export default function DropdownMenu({ selected, setSelected }) {
//   const [isActive, setIsAsctive] = useState(false)
//   const option = ['React', 'Vue', 'Angular']
//   return (
//     <S.Dropdown>
//       <S.DropdownBtn onClick={(e) => setIsAsctive(!isActive)}>
//         Choose One
//         <img src="/image/caret-down.png" alt="imagem cart down" />
//       </S.DropdownBtn>
//       {isActive && (<S.DropdownContent>
//         {option.map((option, index) => <S.DropdownItem onClick={setSelected(option)} key={index}>{option}
//         </S.DropdownItem>
//         )}
//         <S.DropdownItem>Vue</S.DropdownItem>
//       </S.DropdownContent>)}
//     </S.Dropdown>
//   )
// }