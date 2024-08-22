import Description from './Default/_components/Description';
import Logo from './Default/_components/Logo';
//import Content from "../components/Content";
//import GitHub from "../components/GitHub";

import OpenLink from '../components/OpenLink';
import Lessoninfo from './Default/_components/Lessoninfo';
import Contador from './Default/_components/Contador';
import App from './Default/_components/practica1';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador/>
                <Logo />
                <Description />
                <OpenLink 
                    title="Learn React" 
                    url="https://react.dev/"
                />
                <OpenLink 
                    title="Mi proyecto react (Github)" 
                    url="https://github.com/mateorengel/desarrollo-frontend-react"
                />

                <Lessoninfo 
                    number="1" 
                    title="Introducción a react y estructura de proyecto"
                />
                <Lessoninfo 
                    number="2" 
                    title="Context API para la gestión del estado global en aplicaciones react"
                />
                {/* <App/> */}

             
                

                {/* <Content />
                <GitHub /> */}
                
            </header>
        </>
    );
};

export default Default;