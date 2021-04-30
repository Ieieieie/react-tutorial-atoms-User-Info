import styled from 'styled-components';

export const Input = (props) => {
    const { placeholder = '' } = props; //何も引数がない時のためにから文字を設定
    return(
        <SInput type='text' placeholder={placeholder}/>
    )
}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`