import { ReactNode } from "react";
import FooterSection from "../components/footer";
import HeroHeader from "../components/header";


const MainLayout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <HeroHeader />
            {children}
            <FooterSection/>
        </div>
    );
};

export default MainLayout;