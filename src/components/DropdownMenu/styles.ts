import styled from 'styled-components'

export const Dropdown = styled.div`
  width: 400px;
  margin: 100px;
  position: relative;
  margin-bottom: 200px;
  user-select: none;
`

export const DropdownBtn = styled.div`
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(211, 211, 211, 0.6);
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  cursor: pointer;
img{
  height:20px;
}
`

export const DropdownContent = styled.div`
    position: absolute;
    padding: 15px;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(211, 211, 211, 0.6);
    font-weight: 500;
    color: #333;
    top: 120%;
    width: inherit;
  
`

export const DropdownItem = styled.div`
  cursor: pointer;
  padding: 7px;
  :hover{
    background: #f4f4f4;
    transition: all 0.2s;
  } 
`