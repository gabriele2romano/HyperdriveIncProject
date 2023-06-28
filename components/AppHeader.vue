<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark-blue" class="border-bottom text-light navbar-dark" fixed="top" >
      <!-- <b-navbar smart-scroll toggleable="lg" type="light" :style="{background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(57,72,103,.99) 70%, rgba(0,0,0,0) 100%) '}" class="pa-2 text-light navbar-dark" fixed="top" > -->
        
        <b-navbar-brand to="/" class="d-flex" >
          <v-img src="/favicon.ico" height="50px" width="50px" />
        </b-navbar-brand>
        
        <b-navbar-toggle target="nav-collapse"/>
        
        <b-collapse id="nav-collapse" is-nav>
          
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="nav-link">Home</b-nav-item>
            <b-nav-item to="/people/" class="nav-link">About</b-nav-item>
            <b-nav-item-dropdown to="/projects/" text="Projects"  data-bs-toggle="dropdown" class="nav-link d-block d-md-none">
              <b-dropdown-item to="/projects/relevant" class="text-dark" >Most Relevant Projects</b-dropdown-item>
              <b-dropdown-item to="/projects/" class="text-dark">All Projects</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item dropdown nav-link d-none d-md-block">
              <v-link class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">Projects</v-link>
              <ul class="dropdown-menu">
                <b-dropdown-item to="/projects/relevant" class="text-dark" >Most Relevant Projects</b-dropdown-item>
                <b-dropdown-item to="/projects/" class="text-dark">All Projects</b-dropdown-item>
                <!-- <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>three</b-dropdown-item> -->
                </ul>
              </li>
              <b-nav-item to="/areas/" class="nav-link">Area</b-nav-item>
              <b-nav-item to="/contacts/" class="nav-link">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </template>
    
    <script>
  </script>
  <style>
  /* ============ desktop view ============ */
  @media all and (min-width: 992px) {
    .navbar .nav-item .dropdown-menu{ display: none !important; }
    .navbar .nav-item:hover .nav-link{  }
    .navbar .nav-item:hover .dropdown-menu{ display: block !important; }
    .navbar .nav-item .dropdown-menu{ margin-top:0 !important; }
  }
  /* ============ desktop view .end// ============ */
</style>