import { useEffect, useState } from "react"

const useLocalStorage = (key: string, defaultValue: string | number | boolean) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        
        return storedValue ? JSON.parse(storedValue) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(defaultValue));

    }, [key, value])

  return {value, setValue}
}

export default useLocalStorage