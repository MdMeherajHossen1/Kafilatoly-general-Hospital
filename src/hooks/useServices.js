import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const useServices = () => {
    const [services, setServices] = useState([])

    const [doctors, setDoctors] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch('https://peaceful-brook-76175.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {

                setDoctors(data)
            })
    }, [])
    useEffect(() => {
        fetch('https://peaceful-brook-76175.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {

                setServices(data)
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