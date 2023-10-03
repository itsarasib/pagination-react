import { useEffect, useState } from "react";
import { Repo } from "../types";
import Repos from "../components/Box";
import { Pagination } from "../components/Pagination";

// const getToN = (n: number) : number[] => {
//     const temp = []
//     for(let i = 1 ; i <= n ; i ++){
//         temp.push(i)
//     }
//     return temp
// }

//Hi Ten
//Test add branch
// bad practice, arrow function, type
function Home(){

    const [repos, setRepos] = useState<Repo[]>([])
    // const [totalPage, setTotalPage] = useState<number>(0)
    // const   reposPerPage = 5

    // where type
    // bad naming practice
    const [pages, setPages] = useState(1);
    const reposPerPage = 5
    


    useEffect(() =>{
        fetch('https://api.github.com/repositories')
        .then(response => response.json())
        .then((data : Repo[])=>{
            setRepos(data)
            console.log(data.length);
            // setTotalPage(Math.ceil(data.length / reposPerPage))
        })
    },[])

    //CHATGPT
    const indexOfLastRepo = pages * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    return(
        <div>
            <Repos repos={currentRepo}/>
            {/* <Pagination total={getToN(totalPage)} /> */}
            <Pagination repoPerPage={reposPerPage} totalRepos={repos.length} setPage={setPages} currentPages={pages}/>
        </div>
    )

}
export default Home;