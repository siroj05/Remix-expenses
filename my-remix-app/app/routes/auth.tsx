import authStyle from '~/styles/auth.css'
export default function Auth(){
    return(
        <main>
            <h1>Auth pages</h1>
        </main>
    )
}

export function links(){
    return[{rel : 'stylesheet', href:authStyle}]
}