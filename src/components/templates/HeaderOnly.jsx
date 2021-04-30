import styled from 'styled-components';
import { Header } from '../atoms/layout/Header';

export const HeaderOnly = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    )
}
