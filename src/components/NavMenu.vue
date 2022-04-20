<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Num</router-link> 
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
    
    <span class="navbar-toggler-icon"></span>
    
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="(item,index) in PrimerElemento" :key=index>
                <router-link :to="item.url" :class="['dropdown-item']">{{item.name}}</router-link>
            </li>
            </ul>
        </li>
        </ul>
        
    </div>
    </div>
</nav>
</template>

<script>
export default {
    name:"NavMenu",
    data:()=>{
        return {
            PrimerElemento:[
            {name:"about",url:"/about"},
            {name:"about",url:"/about"}
            ]
        }
    }

}
</script>

<style>
nav a.router-link-exact-active {
  color: #DC2F02;
}
</style>