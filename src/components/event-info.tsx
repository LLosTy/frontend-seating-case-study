import {Button} from "@/components/ui/button.tsx";
import axios from 'axios';
import {AxiosError, AxiosResponse} from "axios";
import {useEffect, useState} from "react";

//TODO Move the API to .env

// const endpointUrl = 'https://api.example.com/data';

// Make the Axios GET request




export const EventInfo = () => {

    // const [eventId, setEventId] = useState<string>("")
    //
    // const handleSetEventId = (newEventId: string) =>{
    //     setEventId(newEventId);
    // }

    const [namePub, setNamePub] = useState<string>("")

    const handleSetNamePub = (newNamePub: string) => {
        setNamePub(newNamePub)
    }

    const [description, setDescription] = useState<string>("")

    const handleSetDescription = (newDescription: string) =>{
        setDescription(newDescription)
    }

    useEffect(() => {
        axios.get('https://nfctron-frontend-seating-case-study-2024.vercel.app/event')
            .then((response: AxiosResponse) => {
                // handleSetEventId(response.data.eventId)
                handleSetNamePub(response.data.namePub)
                handleSetDescription(response.data.description)
            })
            .catch((error: AxiosError) => {
                console.error('Error fetching data:', error);
            });}, []);


    return (
        <aside className="w-full max-w-sm bg-white rounded-md shadow-sm p-3 flex flex-col gap-2">
            {/* event header image placeholder */}
            <div className="bg-zinc-100 rounded-md h-32"/>
            {/* event name */}
            <h1 className="text-xl text-zinc-900 font-semibold">{namePub}</h1>
            {/* event description */}
            <p className="text-sm text-zinc-500">{description}</p>
            {/* add to calendar button */}
            <Button variant="secondary" disabled>
                Add to calendar
            </Button>
        </aside>
    )
}
