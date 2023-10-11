import { MyHeader } from "../components/Header";
import { SimpleAutorArea } from "../components/SimpleAuthorsArea";
import { SimpleSongArea } from "../components/SimpleSongArea";


export function Home() {
    return (
        <>
            <MyHeader />
            <SimpleAutorArea />
            <SimpleSongArea />
        </>
    );
}