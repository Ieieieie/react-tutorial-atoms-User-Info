import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from "../organism/user/UserCard";
import { useRecoilState } from 'recoil';
import { userState } from "../../store/userState";


const users = [...Array(10).keys()].map(((val) => {
    return{
        id: val,
        image: "https://source.unsplash.com/NE0XGVKTmcA",
        name: `じゃけぇ#${val}`,
        email: '12345@example.com',
        phone: '090-1111-1111',
        company: {
          name: 'テスト株式会社'
        },
        website: 'https//google.com'
    }
}))

export const Users = () => {
    // const { state } = useLocation();
    // const isAdmin = state ? state.isAdmin : false; //isAdminがnullの場合を考慮
    // const { userInfo, setUserInfo } = useContext(UserContext) ;

    const [userInfo, setUserInfo] = useRecoilState(userState);

    const onClickSwitch = () => {
        setUserInfo({ isAdmin: !userInfo.isAdmin })
    }
    return(
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <br/>
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea >
                {
                    users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </SUserArea>
        </SContainer>
    )
}
const SContainer = styled.div`
    text-align: center;
    flex-direction: column;
    align-item: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
` 