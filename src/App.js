import logo from './logo.svg';
import './App.css';
// import { PrimaryButton } from './components/atoms/button/PrimaryButton';
// import { SecondaryButton } from './components/atoms/button/SecondaryButton';
// import { SearchInput } from './components/molecules/SearchInput';
// import { UserCard } from './components/organism/user/UserCard';
// import { HeaderOnly } from './components/templates/HeaderOnly';
// import { BrowserRouter } from 'react-router-dom';
// import { DefaultLayout } from './components/templates/DefaultLayout';
import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';
import { RecoilRoot} from 'recoil';

const user = {
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  name: 'じゃけぇ',
  email: '12345@example.com',
  phone: '090-1111-1111',
  company: {
    name: 'テスト株式会社'
  },
  website: 'https//google.com'
}
function App() {
  return (              //react-router-domのLinkを使うにはapp全体をBrowserRouterで囲う
    // <BrowserRouter> 
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <br/>
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
    
    //RecoilRootで囲ってrecoilを適用
    <RecoilRoot> 
      <UserProvider>
       <Router />
      </UserProvider>
    </RecoilRoot>
   
  );
}

export default App;
