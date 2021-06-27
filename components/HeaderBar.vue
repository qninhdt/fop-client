<template>
    <nav class="navbar" id="header-bar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://github.com/qninhdt/focusop">
        <img class="rotating" style="max-height: 5rem;" src="/app/public/logo.png" width="64" height="64">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <NuxtLink to="/console" class="navbar-item">
                <i class="fal fa-game-console-handheld"></i>
                Bảng điều khiển
            </NuxtLink>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary">
                <strong>Kiểm tra</strong>
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<style>
    #header-bar {
        margin-bottom: 2rem;
        background-color: transparent;
    }
</style>