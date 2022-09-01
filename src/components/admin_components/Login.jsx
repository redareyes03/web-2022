import { Button, Card, Input, Spacer, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-1/3 ">

                <Card>
                    <Card.Header className="flex justify-between">
                        <Text>Please login</Text>
                        <Text color="error" hidden={!error}>Failed Login</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>
                        <Input
                            onChange={({ target }) => setEmail(target.value)}
                            clearable placeholder="@ correo" type={"email"} label="Correo" />
                        <Spacer />
                        <Input
                            onChange={({ target }) => setPass(target.value)}
                            clearable placeholder="* contraseña" type={"password"} label="Contraseña" />
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Button className="mx-auto" size={"sm"} onClick={async () => {
                            const auth = getAuth(app)
                            const { currentUser } = getAuth(app)
                            try {
                                await signInWithEmailAndPassword(auth, email, pass)
                            } catch (error) {
                                setError(true)
                            }

                        }}>Login</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default Login; 