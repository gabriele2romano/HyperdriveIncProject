<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Your Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <NuxtLink to="/people/." class="nav-link">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/projects/." class="nav-link">Projects</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact/." class="nav-link">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  