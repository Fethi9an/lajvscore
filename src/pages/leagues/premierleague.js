import GameList from "@/component/gamelist/GameList";
import Navbar from "@/component/Navbar/Navbar";
import Header from "@/component/Header/Header";
import SideBar from "@/component/Sidebar/Sidebar";
import BackToTopButton from "@/component/BackToTopButton/BackToTopButton";

function premierleague() {
    return ( 
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <SideBar></SideBar>
        <GameList></GameList>
        <BackToTopButton></BackToTopButton>
    </div>
    );
}
export default premierleague;