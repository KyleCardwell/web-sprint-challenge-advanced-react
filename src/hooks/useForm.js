// write your custom hook here to control your checkout form

import { useState } from "react";


export const useForm = (initialValue) => {

    const [ form, setForm ] = useState(initialValue)

    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    return [ form, handleChanges ]

}