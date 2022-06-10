<template>
  <nav>
    <NavMenu />
  </nav>
  <router-view />
</template>

<script>
import NavMenu from "@/components/NavMenu.vue"

export default ({
  components: {
    NavMenu,
  },
  data:()=>{
    return {
      source:"# hello world!"
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFBA08;
  background-color: #03071E;
  min-height:100vh;
}
#cuerpo{
  margin: 1rem;
  padding: 3rem;
}

.enfasis {
    color: #E85D04;
}

.importante {
    background-color: #4d194d;
    padding: 2rem;
    margin: 2rem;
    border-style: dashed;
    border-color: #d00000;
}

.importante em {
    display: block;
    color: #D00000;
}
.comentario{
  color:#555555;
}
.clave{
  color:#d00000;
}
.cambiar{
  text-decoration: underline #adff02;
  color: #adff02;
}
img{
  display:block;
  margin: 0 auto;
}
h1 {
    text-align: center;
    color: #E85D04;
    padding: 2rem 0;
}

h2 {
    color: #dc2f02;
    padding: 0 0.5rem;
    padding: 2rem 0;
}

h3 {
    color: #bb4d00;
    padding: 0 1.5rem;
    padding: 1rem 0;
}

h4 {
    color: #7400b8;
    padding: 0 2rem;
}

h5 {
    color: #adff02;
    padding: 0 2.5rem;
}

pre {
    padding: 1em 3em;
}

pre code {
    border-radius: 0.3em;
}

kbd {
    background-color: #7400b8;
    padding: 5px 5px;
    border-radius: 5px;
    display: inline;
    box-shadow: 0px 4px 8px -4px #555555;
}

q{
  color:#7400b8
}

li em{
  color:#adff02;
}
dt{
  color:#adff02;
}

span mjx-container{
  display: block;
  color:#adff02;
  text-align: center;
  padding:1em;
  margin:2em;
  border-radius: 0.3em;
  border: salmon dotted 0.3em;
  background: #131418;
}
</style>
