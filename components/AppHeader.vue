<script setup>
//fetch names of all areas
const { data: areas } = await useFetch('/api/areas/names')
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark-blue" class="border-bottom text-light navbar-dark shadow-lg px-md-5" fixed="top" :elevation="6" >
      <!-- <b-navbar smart-scroll toggleable="lg" type="light" :style="{background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(57,72,103,.99) 70%, rgba(0,0,0,0) 100%) '}" class="pa-2 text-light navbar-dark" fixed="top" > -->
        
        <b-navbar-brand to="/" class="d-flex" aria-label="Go to home page">
          <v-img  lazy-src="/favicon.ico" src="/favicon.ico" height="50px" width="50px" alt="MEGA Group logo"/>
        </b-navbar-brand>
        
        <b-navbar-toggle target="nav-collapse"/>
        
        <b-collapse id="nav-collapse" is-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="nav-link">Home</b-nav-item>
            <b-nav-item to="/about/" class="nav-link">About Us</b-nav-item>
            <b-nav-item-dropdown to="/projects/" text="Projects"  data-bs-toggle="dropdown" class="nav-link d-block d-md-none">
              <b-dropdown-item to="/projects/relevant" class="text-dark" >Most Relevant Projects</b-dropdown-item>
              <b-dropdown-item to="/projects/" class="text-dark">All Projects</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item dropdown nav-link d-none d-md-block">
              <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Projects</a>
              <ul class="dropdown-menu">
                <b-dropdown-item to="/projects/relevant" class="text-dark" >Most Relevant Projects</b-dropdown-item>
                <b-dropdown-item to="/projects/" class="text-dark">All Projects</b-dropdown-item>
              </ul>
            </li>
            <b-nav-item to="/people/" class="nav-link">Our Team</b-nav-item>
            <b-nav-item-dropdown text="Area"  data-bs-toggle="dropdown" class="nav-link d-block d-md-none">
              <b-dropdown-item to="/areas/" class="text-dark" >All Areas</b-dropdown-item>
              <!-- <b-dropdown-item to="/areas/" class="text-dark"></b-dropdown-item> -->
              <b-dropdown-item v-for="area in areas" :to="'/areas/'+area.id" class="text-dark" >{{ area.name }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item dropdown nav-link d-none d-md-block">
              <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Area</a>
              <ul class="dropdown-menu">
                <b-dropdown-item to="/areas/" class="text-dark" >All Areas</b-dropdown-item>
                <b-dropdown-item v-for="area in areas" :to="'/areas/'+area.id" class="text-dark" >{{ area.name }}</b-dropdown-item>
              </ul>
            </li>
            <b-nav-item-dropdown text="Contacts"  data-bs-toggle="dropdown" class="nav-link d-block d-md-none">
              <b-dropdown-item to="/contacts/" class="text-dark" >Info</b-dropdown-item>
              <b-dropdown-item to="/contacts/form" class="text-dark">Work with us</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item dropdown nav-link d-none d-md-block">
              <a class="nav-link  dropdown-toggle " href="#" data-bs-toggle="dropdown">Contacts
              </a>
              <ul class="dropdown-menu dropdown-menu-start">
                <b-dropdown-item to="/contacts/" class="text-dark" >Info</b-dropdown-item>
                <b-dropdown-item to="/contacts/form" class="text-dark" >Work with us</b-dropdown-item>
              </ul>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </template>
  <style>
  /* ============ desktop view ============ */
  @media all and (min-width: 992px) {
    .navbar .nav-item .dropdown-menu{ display: none !important; padding-left: 10px; padding-right: 10px;}
    .navbar .dropdown-menu .nav-item:hover{ border-radius: 4px;}
    .navbar .nav-item:hover .dropdown-menu{ display: block !important; }
    .navbar .nav-item .dropdown-menu{ margin-top:0 !important; }
    .navbar-nav 
    .navbar-nav .active{
      border-radius: 4px;
      background-color:#9ba4b5 ;
    }
  }
  /* ============ desktop view .end// ============ */

  /* ============ mobile and over view ============ */
  .navbar .dropdown-menu .nav-item:hover{ border-radius: 4px;}
  .navbar-nav .nav-item a{
    padding-left: 10px; padding-right: 10px;
  }
  .navbar-nav .nav-item button{
    padding-left: 10px; padding-right: 10px;
  }
  .navbar-nav .nav-item .active{
    border-radius: 4px;
    background-color:#9ba4b5 ;
  }
  .navbar-nav .nav-item .dropdown-menu{
    border-radius: 4px;padding-left: 10px; padding-right: 10px;
  }
  
  .navbar-nav .nav-item .dropdown-menu .dropdown-item:hover{
    background-color:#dfdfdf ;
    border-radius: 4px;
  }
  /* ============ mobile and over view .end// ============ */
</style>