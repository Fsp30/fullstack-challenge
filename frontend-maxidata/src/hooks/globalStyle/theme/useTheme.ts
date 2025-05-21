import {useEffect, useState} from 'react'

export function useTheme(){
        const [theme, setTheme] = useState<'light' | 'dark'>(() =>{
                const storedTheme = localStorage.getItem('theme')
                if(storedTheme === 'dark' || storedTheme === 'light') return storedTheme
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                return prefersDark ? 'dark' : 'light'
        })

        useEffect(() => {
                const root = document.documentElement
                if(theme === 'dark'){
                        root.classList.add('dark')
                } else{
                        root.classList.remove('dark')
                }
                localStorage.setItem('theme', theme)
        }, [theme])

        const toggleTheme = () =>{
                setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        }
        return {theme, toggleTheme}
}