import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const useServices = () => {
    const [services, setServices] = useState([])

    const [doctors, setDoctors] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setDoctors(data.doctors)
            })
    }, [])


    const handleDetails = id => {
        history.push(`/services/${id}`)
    }

    const handleAppoinment = service => {

        history.push('/appoinment')
    }
    return {
        services, handleDetails, handleAppoinment, doctors
    }
}

export default useServices;