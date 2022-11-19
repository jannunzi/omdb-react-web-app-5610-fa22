const Login = () => {
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice1234')
    return(
        <>
            <h1>Login</h1>
            <input className="form-control" placeholder="username" value={username}/>
            <input className="form-control" placeholder="password" type="password" value={password}/>
            <button>Login</button>
        </>
    )
}