import { Link } from "react-router-dom"
export default function TOP(){
    return(
        <>
        <h1>検索サイト一覧</h1>
        <ul>
        <li>
            
            <Link to="/Search">pixabay</Link>
          </li>
        </ul>
        </>
    )
}
