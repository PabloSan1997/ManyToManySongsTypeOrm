import { MyHeader } from "../components/Header";
import { SimpleAutorArea } from "../components/SimpleAuthorsArea";
import { SimpleSongArea } from "../components/SimpleSongArea";
import '../styles/home.scss';

export function Home() {
    return (
        <>
            <MyHeader />
            <SimpleAutorArea />
            <SimpleSongArea />
        </>
    );
}