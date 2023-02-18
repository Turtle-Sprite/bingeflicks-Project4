const bcrypt = require('bcryptjs')

const testBcrypt = async () => {
    try {
        //when a user is registering, we need to make a hash of their password
        const newPassword = 'hello'
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds)
        console.log('hashed passwords:', hashedPassword)
        //when a user is logging in, we need to test the password that the user supplies against te hash that is in the database
        const matchPasswords = await bcrypt.compare('hello', hashedPassword)
        console.log('does the password match the hash?', matchPasswords)
    }catch (err) {
        console.log(err)
    }
}

// testBcrypt()

const jwt = require('jsonwebtoken')

const jwttest = () => {
    try {
        //payload of data
        const payload = {
            name: 'Weston',
            id: '1234',
            email: 'w@b.com'
            //DO NOT PUT THE USER'S PASSWORD
        }
        //secret to sign the jwt with -> password for server
        const secret = 'my super big secret'
        const token = jwt.sign(payload, secret)
        console.log(token)
        //make a jwt
        const decode = jwt.verify(token, secret)
        console.log(decode)


    } catch (err) {
        console.log(err)
    }
}
jwttest()