import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const useServices = () => {
    const [services, setServices] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handleDetails = id => {
        history.push(`/services/${id}`)
    }
    return {
        services, handleDetails
    }
}

export default useServices;