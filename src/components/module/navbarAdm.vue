<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"> <img src="../../assets/img/coffee 1.png" alt="">Coffee Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav option-box">
                <li class="nav-item option">
                    <router-link to="/admin/home" exact tag="li"><a class="nav-link" :class="this.$route.path === '/admin/home' ? 'active-tab-navbar':'inactive-tab-navbar'" href="#">Home</a></router-link>
                </li>
                <li class="nav-item option">
                    <router-link to="/admin/product-admin" exact tag="li"><a class="nav-link" :class="this.$route.path === '/admin/product-admin' ? 'active-tab-navbar':'inactive-tab-navbar'" href="#">Products</a></router-link>
                </li>
                <li class="nav-item option">
                    <router-link to="/admin/bmanage-order" exact tag="li"><a class="nav-link" :class="this.$route.path === '/admin/bmanage-order' ? 'active-tab-navbar':'inactive-tab-navbar'" href="#">Orders</a></router-link>
                </li>
                <li class="nav-item option">
                    <router-link to="/admin/dashboard" exact tag="li"><a class="nav-link" :class="this.$route.path === '/admin/dashboard' ? 'active-tab-navbar':'inactive-tab-navbar'" href="#">Dashboard</a></router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto option-box2" >
                <li class="nav-item d-flex option2">
                    <div class="collapse fade" id="searchForm">
                        <input id="search" type="search" class="form-control border-0 bg-light" placeholder="search" />
                    </div>
                    <a class="nav-link ml-auto" href="#searchForm" data-target="#searchForm" data-toggle="collapse" >
                        <img src="../../assets/img/Vector.png" alt="">
                    </a>
                </li>
                <li class="nav-item d-flex option2">
                    <img src="../../assets/img/chat (1) 1.png" alt="" style="" @click.prevent="" type="button">
                </li>
                <li class="nav-item d-flex option2" @click.prevent="goProfile" type="button">
                    <div class="user-photo">
                        <img :src="!getProfile.image ? image : getProfile.image" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'Navbar',
	methods: {
		...mapActions({ getCustProfile: 'getCustProfile' }),
		goProfile () {
			this.$router.push('/admin/profile')
		}
	},
	data () {
		return {
			image: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png'
		}
	},
	computed: {
		...mapGetters(['getProfile'])
	},
	mounted () {
		this.getCustProfile()
	}
}
</script>

<style lang="scss" scoped>
#navbarNav {
    background-color: white;
}

.active-tab-navbar {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #6A4029!important;
}

.inactive-tab-navbar {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #4F5665;
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
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
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
