<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"> <img src="../../../assets/img/coffee 1.png" alt="">Coffee Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav option-box">
                <li class="nav-item option">
                    <router-link to="/auth/signup" exact tag="li"><a class="nav-link" href="#">Home</a></router-link>
                </li>
                <li class="nav-item option">
                    <router-link to="/auth/signup" exact tag="li"><a class="nav-link" href="#">Products</a></router-link>
                </li>
                <li class="nav-item option">
                    <router-link to="/auth/signup" exact tag="li"><a class="nav-link" href="#">Your Cart</a></router-link>
                </li>
                <li class="nav-item option">
                    <router-link to="/auth/signup" exact tag="li"><a class="nav-link" href="#">History</a></router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto option-box2" >
                <li class="nav-item d-flex option2">
                    <div class="login" type = button @click.prevent="goLogin">Login</div>
                    <!-- <button class="login" @click.prevent="this.$route.push('/auth/login')">Login</button> -->
                </li>
                <li class="nav-item d-flex option2">
                    <button class="signup" @click.prevent="goSignUp">Sign Up</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
	name: 'Navbar',
	methods: {
		goSignUp () {
			this.$router.push('/auth/signup')
		},
		goLogin () {
			this.$router.push('/auth/login')
		}
	}
}
</script>

<style lang="scss" scoped>
.login {
    font-family: Rubik;
font-size: 16px;
font-weight: 500;
text-align: left;
color: #0B132A;
}

.signup {
    height: 45px;
width: 150px;
border-radius: 50px;
background-color: #FFBA33;
font-family: Rubik;
font-size: 16px;
font-weight: 500;
color: #6A4029;
border: none;
outline: none;

}

#navbarNav {
    background-color: white;
}
.navbar-toggler {
    border: none;
    outline: none;
    margin-right: 5%;
}
nav {
    height: 100px;
    border-bottom: 0.5px solid #9F9F9F;
    background-color: white;
    z-index: 999;
}
.navbar-brand {
    margin-left: 5%;
    margin-right: 10%;
    font-family: Rubik;
    font-size: 20px;
    font-weight: 700;
    color: #0B132A;
}
.navbar-brand img {
    margin-right: 10%;
}
.option-box {
    width: 50%;
}
.option {
    width: 100%;
    text-align: center;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    color: #4F5665;
}
.option2 {
    margin-right: 8%;
}
.option-box2 {
    display: flex;
    align-items: center;
    justify-content:flex-end;
    width: 30%;
    margin-right:10%;
}
img {
    width: 30px;
    height: 30px;
}
.user-photo {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
}
@media screen and (max-width: 991px) {
    .option-box {
        width: 100%;
    }
    .option-box2 {
        width: 100%;
    }
    img {
        margin-bottom: 3%;
    }
    .user-photo {
        border-radius: 50%;
    }
    .option2 {
        margin-right: 0%;
        margin-bottom: 2%
    }
}

</style>
