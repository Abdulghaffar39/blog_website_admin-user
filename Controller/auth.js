const schemaPoint = require("../DB/dbSchema");


async function signUp(req, res) {
    try {

        const { firstName, lastName, email, password, role } = req.body;


        const checkEmail = await schemaPoint.findOne({ email })
        console.log(checkEmail, 'line number 41');

        if (checkEmail) {

            return res.send({
                status: 505,
                message: "user already exists",
            })
        }


        const user = {

            firstName,
            lastName,
            email,
            password,
            role,
        };

        const result = new schemaPoint(user).save();

        res.send({

            result,
            status: 200,
            message: "signup successfully",
        });


    } catch (err) {

        res.send({

            err,
            status: 500,
            message: "sorry! server is not responding",

        });
    }
}


module.exports = { signUp }
