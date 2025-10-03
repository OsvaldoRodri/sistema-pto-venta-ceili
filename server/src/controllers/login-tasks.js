import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();

async function getAllUsers() {
    const users = await prisma.users.findMany();
    
    prisma.$disconnect();
    return users
}

const handleLogin = async (req, res) => {

    const clientCredentials = req.body; // Example usage of req
    console.log("The client sent: ", clientCredentials); // Example usage of res
    const users = await getAllUsers();
    
    for (let u of users) {
        if(u.name == clientCredentials.name && u.password == clientCredentials.password){
            console.log("Login successful. Welcome ", u.role.toUpperCase(), u.name);
            const resStatus = {
                success: true,
                message: `Login successful. Welcome ${u.role.toUpperCase()} ${u.name}`,
                role: u.role,
                name: u.name
            };
            
            res.json(resStatus);
            
            return ;
        }
        }

        const resStatus = {
            success: false,
            message: "Login failed"
        };
        res.json(resStatus);
        
    /*if (result.name === "ede" && result.password === 'admin'){
        res.send("Login successful");
    } else {
        res.send("Login failed");
    } */
}

export { handleLogin };