<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" role="navigation" id="main">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="~@/assets/img/peatio-logo.png" alt="Logo">
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#platform">Platform</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact us</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  height: 80px;

  .navbar-brand {
    max-width: 10vw;
  }

  .navbar-nav {
    .nav-item {
      .nav-link {
        color: #212f3e;
        font-weight: 300;
      }
    }
  }
}
</style>
