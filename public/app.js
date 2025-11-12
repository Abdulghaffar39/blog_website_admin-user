
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
            { withCredentials: true }
        );

        alert(res.data.message);  // success


        window.location.href = "admin.html";

        // if (user.role === "admin") {

        //     return res.send({
        //         status: 200,
        //         message: "Welcome Admin",
        //     });

        // } else if (user.role === "user") {

        //     return res.send({

        //         status: 200,
        //         message: "Welcome user",

        //     });
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


async function submit(e) {

    e.preventDefault();

    const res = await axios.get('http://localhost:5000/api/home',

        // { email, role },
        { withCredentials: true }
    );
    // console.log(email, role);
    
    const allCookies = document.cookie;
    console.log(allCookies.email);

    
}

function login_page() {

    window.location.href = 'login.html'

}

function SignUp_page() {

    window.location.href = 'index.html'

}