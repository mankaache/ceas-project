import { useRouter } from "next/router";


const EventCardsDetails = () => {
    const router = useRouter()
    const {eventType} = router.query
    return (
        <div> eventCardsDetails <p>{eventType}</p></div>
    )
}

export default EventCardsDetails