import React, { createContext, useState } from 'react';

export const UserContext = createContext({});


export const UserProvider = (props) => {
    const { children } = props;

    const [userInfo, setUserInfo]  = useState(null);

    //stateを渡すと配下のコンポーネントでstateを参照、セットできる
    return(
        <UserContext.Provider value={{ userInfo, setUserInfo }}> 
            {children}   
        </UserContext.Provider>
    )
}