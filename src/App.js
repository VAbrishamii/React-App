import React,{Component} from "react";
import Navbar from "./component/Navbar";
import Cover from "./component/Cover";
import Cards from "./component/Cards";
import Search from "./component/Search";
import Logo from "./component/Logo";
import Footer from "./component/Footer";



class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Cover />
                <Cards />
                <Search />
                <Logo />
                <Footer />
            
               
            </div>
        )
    }
}
export default App;
