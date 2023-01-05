import {useQuery} from 'react-query'

export const AddDataIntoCache = ({PostCodeQuery}) => {

    if (PostCodeQuery[0] !== undefined){

        const result = useQuery('data', ()=>{
            fetch(`https://api.zippopotam.us/GB/${PostCodeQuery}`)
            .then((response) => response.json())
            .then((json)=>{
    console.log('datacache', json)
            })
        })
    }
  

};

