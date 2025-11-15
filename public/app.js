
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

    e.preventDefault();

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    if (email === "" || password === "") {

        alert('Please fill all fields!');
        return;
    }


    try {

        const res = await axios.post('http://localhost:5000/api/login',

            { email, password },
        );

        console.log(res.data.user.role);

        const token = res.data.token;  // JWT from backend
        localStorage.setItem("token", token);

        alert(res.data.message);  // success

        getToken()


        // if (res.data.user.role === "user") {

        //     window.location.href = "user.html";
        // }
        // else if (res.data.user.role === "admin") {

        //     window.location.href = "admin.html";
        // }



    } catch (err) {

        if (err.response) {
            // backend responded with non-2xx
            alert(`Error: ${err.response.data.message}`);
        } else if (err.request) {
            // request made but no response
            alert("⚠️ No response from server. Possible CORS or network issue.");
        } else {
            alert("⚠️ Axios Error: " + err.message);
        }
        console.error(err);
    }

}


// async function home(e) {

//     try {



//         const response = await axios.get('http://localhost:5000/api/home');

//         console.log(response.data.user);


//     } catch (err) {

//         console.error(err);
//         alert('⚠️ Server error or connection issue.');
//     }

// }


async function getToken() {

    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:5000/api/home", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    console.log(res.data.user);

    if (res.data.user.role === "user") {

        window.location.href = "user.html";
    }
    else if (res.data.user.role === "admin") {

        window.location.href = "admin.html";
    }



}

async function submit(e) {

    e.preventDefault();

}

function login_page() {

    window.location.href = 'login.html'

}

function SignUp_page() {

    window.location.href = 'index.html'

}