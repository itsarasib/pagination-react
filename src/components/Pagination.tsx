interface props {
    // total: number[]
    repoPerPage : number 
    totalRepos : number
    // bad naming practice
    setPage : (page:number) => void
    currentPages : number

}

export const Pagination : React.FC<props> = ({ repoPerPage,totalRepos, setPage, currentPages }) => {


    const pageNo = []
    for(let i = 1 ; i <= Math.ceil(totalRepos / repoPerPage) ; i ++){
        pageNo.push(i)
    }

    const PreviousPage : React.FC = () =>{
        // if(currentPages == 1){
        //     return(
        //     <button 
        //     onClick={() => setPage(currentPages)} 
        //     >
        //         Prev</button>
        //     )
        // }else{
        //     return(
        //     <button 
        //     onClick={() => setPage(currentPages-1)} 
        //     >
        //         Prev</button>
        //     )
        // }

        return (
            <>
                 { currentPages == 1 ? <> true </> : <> false </>}
            </>
        )
    }

    // const NextPage : React
    
    return (
        // split to css file
        <div style={{display: "flex", flexDirection: "row", justifyContent:'center', gap: '10px'}}>
            {/* {total.map(num => <button> {num} </button>)} */}
            <PreviousPage />
            {pageNo.map(num => (
                <button 
                onClick={() => setPage(num)} 
                >
                    {num}</button>
            ))}
        </div>
    )

}

