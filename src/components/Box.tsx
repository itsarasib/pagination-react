import { Repo } from "../types";


interface props{ 
    repos: Repo[]
}

const Repos: React.FC<props> = ({ repos }) => {
    

    return(
        <div>
            {repos.map(data =>{
                return(
                    <div>
                        <p>{data.name}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default Repos;

