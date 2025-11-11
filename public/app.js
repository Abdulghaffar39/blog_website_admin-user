
async function signup(e) {

    try {


        e.preventDefault();

        let firstName = document.getElementById("firstName").value
        let lastName = document.getElementById("lastName").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let role = document.getElementById("role").value


        if (firstName === "" || lastName === "" || email === "" || password === "") {

            alert('Please fill all fields!');
            return;
        }


        if (role === "admin") {

            console.log("Admin selected");

        } else if (role === "user") {

            console.log("User selected");

        } else {

            alert('Please select user role')
            return

        };


        const res = await axios.post('http://localhost:5000/api/signUp',

            { firstName, lastName, email, password, role }

        )

        const data = res.data;
        console.log(res);


        if (data.status === 200) {

            alert(data.message);
            window.location.href = 'login.html';
            return;
        }


    } catch (err) {

        console.error(err);
        alert('⚠️ Server error or connection issue.');
    }

}

async function login(e) {

    try {

        e.preventDefault();

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value


        if (email === "" || password === "") {

            alert('Please fill all fields!');
            return;
        }



        const res = await axios.post('http://localhost:5000/api/login',

            { email, password }

        )

        const data = res.data;
        console.log(res);

        res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true });

        if (data.status === 200) {

            alert(data.message);
            // window.location.href = 'login.html';
            return;
        }


    } catch (err) {

        console.error(err);
        alert('⚠️ Server error or connection issue.');
    }

}


async function home(e) {

    try {

        e.preventDefault();


        const res = await axios.get('http://localhost:5000/api/home',

            let username = req.cookies.username

        )

        const data = res.data;
        console.log(res);


    } catch (err) {

        console.error(err);
        alert('⚠️ Server error or connection issue.');
    }

}


function login_page() {

    window.location.href = 'login.html'

}

function SignUp_page() {

    window.location.href = 'index.html'

}