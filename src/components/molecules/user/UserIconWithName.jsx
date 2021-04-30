import styled from "styled-components";
import React, { memo, useContext } from 'react';
import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";
import { useRecoilValue} from 'recoil';


export const UserIconWithName = memo((props) => {
    const { image, name } = props;
    // const { userInfo }= useContext(UserContext);
    const userInfo = useRecoilValue(userState);     //useRecoilValueはset関数の必要がない時に使える
    const isAdmin = userInfo? userInfo.isAdmin : false;
    
    return(
        <SContainer>
            <SImg height ={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
})

const SContainer = styled.div`
    text-align: center;
`

const SImg = styled.img`
    border-radius: 50%;
`

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`

const SEdit = styled.span`
    test-decoretion: underline;
    color: #aaa;
    cursor: pointer;
`